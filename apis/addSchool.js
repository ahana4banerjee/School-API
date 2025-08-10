import Joi from 'joi';
import pool from '../db/db.js';

const railwaySchema = Joi.object({
  name: Joi.string().max(255).required(),
  address: Joi.string().max(500).required(),
  latitude: Joi.number().min(-90).max(90).required(),
  longitude: Joi.number().min(-180).max(180).required()
});

export const addSchool = async (req, res) => {
  try {
    const { error, value } = railwaySchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        error: error.details[0].message 
    });
    }

    const { name, address, latitude, longitude } = value;
    const [result] = await pool.execute(
      'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)',
      [name, address, latitude, longitude]
    );

    res.status(201).json({
        success: true,
        id: result.insertId,
        message: 'School added successfully'
    });
  } catch (err) {
    console.error('Error adding school:', err);
    res.status(500).json({ 
        success: false,
        message: err.message });
  }
};
