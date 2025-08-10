# School Management API

## Assignment Overview
The task was to build a backend API for managing school data.  
The requirements included:
- Creating a **MySQL database and table** for storing school records.
- Implementing API endpoints for adding and retrieving school data.
- Deploying the backend to a live server.
- Testing the API using **Postman**.

---

## 🛠️ Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MySQL (Clever Cloud)
- **Deployment:** Render
- **Testing:** Postman

---

## 📂 Steps Followed

### 1. Setting Up the Database
- Created a **MySQL database** on [Clever Cloud](https://www.clever-cloud.com/).
- Noted down the connection credentials:  
  - Host  
  - Port (default: `3306`)  
  - Database name  
  - Username & password  
- Used **MySQL Workbench** to connect to Clever Cloud’s remote database.

---

### 2. Creating the Table
Executed the following SQL command in MySQL Workbench to create the `schools` table:

```sql
CREATE TABLE schools (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    address VARCHAR(255) NOT NULL,
    latitude DOUBLE,
    longitude DOUBLE
);
```

### 3. Backend Setup
Initialized a Node.js project:

```bash
npm init -y
npm install express mysql dotenv
```
Created .env file to store database credentials:

```env
MYSQLHOST=your_clever_cloud_host
MYSQLUSER=your_username
MYSQLPASSWORD=your_password
MYSQLDATABASENAME=your_database_name
MYSQLPORT=3306
```
Implemented server.js with API routes:

POST /addSchool → Adds a school record to the database.

GET /listSchools → Retrieves all school records in the proximity of the user's loaction.

### 4. Deployment on Render
* Pushed the project to GitHub.

* Connected the GitHub repo to Render.

* Configured Environment Variables in Render from .env.

* Deployed the backend and obtained a live API URL.

### 5. Testing with Postman
Opened Postman and tested the deployed API:

POST Request:

URL: [https://your-render-app.onrender.com/addschool
](https://school-api-1-tqml.onrender.com/api/addSchool)
Body (JSON):

```json
{
  "name": "JP High School",
  "address": "Diamond Harbour, Kolkata",
  "latitude": 45.9080,
  "longitude": 21.4521
}
```

GET Request:

URL: [https://your-render-app.onrender.com/schools](https://school-api-1-tqml.onrender.com/api/listSchools?lat=22.5726&lon=88.3639)


Both requests returned correct responses, confirming the backend and database were working properly.

✅ Outcome
* Successfully connected a MySQL database from Clever Cloud to a Node.js backend.

* Deployed the backend API on Render.

* Verified functionality using Postman.


