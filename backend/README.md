# 🌍 RapidRelief - Intelligent Disaster Management System

🚀 **Frontend (Live Demo)**
https://rapid-relief-system-cs4ihclf5-aditya-vermas-projects-835bd38a.vercel.app/

🔗 **Backend API (Node.js)**
https://rapidrelief-system.onrender.com

🧠 **Machine Learning Service (FastAPI)**
https://rapidreliefsystempythonservices.onrender.com

---

# 📖 Overview

RapidRelief is a full-stack Intelligent Disaster Management System designed to enhance disaster response through real-time coordination, resource optimization, machine learning predictions, and spatial allocation algorithms.

The system provides dedicated interfaces for:

* Citizens
* Rescue Personnel
* Administrators

RapidRelief integrates modern web technologies, real-time communication, machine learning, and geospatial optimization to assist disaster management agencies in making faster and more effective decisions during emergencies.

---

# 🚀 Key Features

## 👤 Citizen Portal

* User Registration & Login
* Disaster Incident Reporting
* Emergency Assistance Requests
* Incident Status Tracking
* Nearby Assistance Centers
* Safe Zone & Shelter Discovery

---

## 🚑 Rescue Personnel Portal

* Rescue Dashboard
* Mission Assignment Management
* Availability Updates
* Live Incident Tracking
* Profile Management
* Document Verification

---

## 🛡️ Administrator Portal

* Incident Monitoring
* Rescue Personnel Verification
* Resource Management
* Analytics Dashboard
* AI Prediction Monitoring
* System Administration

---

## ⚡ Real-Time Communication

* Live Incident Updates
* Rescue Assignment Notifications
* Status Tracking
* Socket.IO Integration
* Real-Time Dashboard Updates

---

## 🗺️ Geospatial Features

* Interactive Maps
* Incident Visualization
* Rescue Team Tracking
* Assistance Center Locations
* Safe Zone Mapping
* Live Location Monitoring

---

## 🧠 AI & Machine Learning

The integrated FastAPI ML service predicts:

* Rescue Teams Required
* Ambulances Required
* Food Packets Required
* Medical Kits Required

Prediction factors include:

* Disaster Severity
* Population Density
* Rainfall
* Medical Need Level
* Infrastructure Damage
* Road Blockage
* Disaster Type

---

## 🌍 Spatial Optimization

RapidRelief utilizes KD-Tree nearest-neighbor search algorithms to:

* Locate Nearby Rescue Teams
* Optimize Resource Allocation
* Minimize Response Time
* Improve Rescue Efficiency

---

# 🏗️ System Architecture

```text
Citizen / Rescue / Admin
            │
            ▼
      React Frontend
            │
            ▼
      Node.js Backend
            │
   ┌────────┴────────┐
   ▼                 ▼
MongoDB Atlas   FastAPI ML Service
                        │
                        ▼
                 ML Prediction Engine
                 + KD-Tree Allocation
```

---

# 🛠️ Tech Stack

## Frontend

| Technology       | Purpose                 |
| ---------------- | ----------------------- |
| React            | UI Development          |
| Vite             | Build Tool              |
| Tailwind CSS     | Styling                 |
| React Router DOM | Routing                 |
| Axios            | API Requests            |
| Socket.IO Client | Real-Time Communication |
| React Leaflet    | Maps Integration        |

---

## Backend

| Technology | Purpose                 |
| ---------- | ----------------------- |
| Node.js    | Backend Runtime         |
| Express.js | REST API                |
| MongoDB    | Database                |
| Socket.IO  | Real-Time Communication |
| JWT        | Authentication          |
| Cloudinary | File Storage            |
| Multer     | File Uploads            |

---

## Machine Learning Service

| Technology    | Purpose              |
| ------------- | -------------------- |
| FastAPI       | ML Microservice      |
| scikit-learn  | Machine Learning     |
| Pandas        | Data Processing      |
| NumPy         | Numerical Computing  |
| SciPy KD-Tree | Spatial Optimization |

---

# 📂 Project Structure

```bash
RapidRelief/
│
├── frontend/
│   │
│   ├── src/
│   │   ├── api/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── layouts/
│   │   ├── pages/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   │
│   ├── Node_backend/
│   │   ├── src/
│   │   │   ├── config/
│   │   │   ├── controllers/
│   │   │   ├── middleware/
│   │   │   ├── models/
│   │   │   ├── routes/
│   │   │   ├── services/
│   │   │   ├── utils/
│   │   │   └── uploads/
│   │   │
│   │   ├── index.js
│   │   └── package.json
│   │
│   └── Python_backend/
│       ├── app/
│       │   ├── ml/
│       │   ├── routes/
│       │   ├── schemas/
│       │   ├── services/
│       │   └── spatial/
│       │
│       ├── main.py
│       └── requirements.txt
│
└── README.md
```

---

# ⚙️ Local Setup

## 1. Clone Repository

```bash
git clone <repository_url>
cd RapidRelief
```

---

## 2. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

## 3. Node.js Backend Setup

```bash
cd backend/Node_backend
npm install
npm start
```

Backend runs on:

```text
http://localhost:8000
```

---

## 4. FastAPI ML Service Setup

```bash
cd backend/Python_backend

pip install -r requirements.txt

uvicorn main:app --reload --port 5001
```

ML Service runs on:

```text
http://localhost:5001
```

---

# 🔑 Environment Variables

## Node Backend

```env
PORT=8000

MONGO_URI=your_mongodb_uri

JWT_SECRET=your_secret_key

PYTHON_SERVICE_URL=http://localhost:5001

CLOUDINARY_CLOUD_NAME=your_cloud_name

CLOUDINARY_API_KEY=your_api_key

CLOUDINARY_API_SECRET=your_api_secret
```

---

## Frontend

```env
VITE_API_URL=http://localhost:8000/api

VITE_SOCKET_URL=http://localhost:8000

VITE_BACKEND_URL=http://localhost:8000
```

---

# 📡 API Modules

| Module            | Endpoint           |
| ----------------- | ------------------ |
| Authentication    | /api/auth/*        |
| Incidents         | /api/incidents/*   |
| Rescue Management | /api/rescue/*      |
| Assignments       | /api/assignments/* |
| Administration    | /api/admin/*       |

---

# 🔐 Security Features

* JWT Authentication
* Password Hashing with bcrypt
* Role-Based Authorization
* Protected Routes
* Session Validation
* Secure File Upload Validation
* Cloudinary Storage Integration

---

# 📂 File Upload Support

Supported file formats:

* PDF
* JPG
* JPEG
* PNG

Storage:

* Cloudinary

---

# ⚡ Real-Time Events

Socket.IO events include:

* Incident Updates
* Rescue Assignments
* Status Changes
* Resource Updates
* Live Tracking

---

# 🚀 Future Enhancements

* Progressive Web App (PWA)
* Offline Incident Reporting
* Push Notifications
* Multi-Language Support
* Mobile Application
* SMS/Satellite Fallback Communication
* Traffic-Aware Routing
* Advanced Analytics Dashboard
* AI-Based Disaster Forecasting

---

# 👨‍💻 Author

**Aditya Verma**

B.Tech Engineering Student

---

# 📄 License

This project is developed for educational, research, and disaster management purposes.

© 2026 Aditya Verma. All Rights Reserved.
