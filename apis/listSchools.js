import pool from '../db.js';

function haversine(lat1, lon1, lat2, lon2) {
  const toRad = (deg) => deg * Math.PI / 180;
  const R = 6371; // Radius of Earth in km
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
    Math.sin(dLon / 2) ** 2;

  return R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
}

export const listSchools = async (req, res) => {
  try {
    const userLat = parseFloat(req.query.lat);
    const userLon = parseFloat(req.query.lon);

    if (Number.isNaN(userLat) || Number.isNaN(userLon)) {
      return res.status(400).json({ error: 'Please provide lat and lon as query params' });
    }

    const [schools] = await pool.query('SELECT id, name, address, latitude, longitude FROM schools');

    const sorted = schools
      .map(school => ({
        ...school,
        distance_km: Number(haversine(userLat, userLon, school.latitude, school.longitude).toFixed(3))
      }))
      .sort((a, b) => a.distance_km - b.distance_km);

    res.json(sorted);
  } catch (err) {
    console.error('Error listing schools:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
