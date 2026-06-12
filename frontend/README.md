# RapidRelief - Frontend

🚀 **Live Demo:**
https://rapid-relief-system-cs4ihclf5-aditya-vermas-projects-835bd38a.vercel.app/

---

## Overview

RapidRelief is an Intelligent Disaster Management System designed to improve disaster response through real-time coordination, resource allocation, and AI-assisted decision making.

The frontend provides dedicated interfaces for:

* Citizens (Users)
* Rescue Personnel
* Administrators

The application is built using React, Vite, Tailwind CSS, Axios, React Router, Socket.IO Client, and React Leaflet.

---

## Features

### Citizen Features

* User Registration and Login
* Report Disaster Incidents
* Request Emergency Assistance
* Track Incident Status
* View Nearby Assistance Centers
* View Safe Zones and Shelters

### Rescue Personnel Features

* Rescue Dashboard
* Assigned Mission Management
* Live Incident Tracking
* Availability Updates
* Profile Management
* Document Verification Status

### Administrator Features

* Incident Monitoring
* Rescue Personnel Verification
* Resource Management
* Analytics Dashboard
* AI Resource Prediction Monitoring
* System Monitoring

### Real-Time Features

* Live Incident Updates
* Rescue Assignment Notifications
* Status Tracking
* Socket.IO Integration

### Mapping Features

* Incident Locations
* Rescue Team Locations
* Assistance Centers
* Safe Zones
* Live Tracking

---

## Tech Stack

| Technology       | Purpose                 |
| ---------------- | ----------------------- |
| React            | Frontend Framework      |
| Vite             | Build Tool              |
| Tailwind CSS     | Styling                 |
| React Router DOM | Routing                 |
| Axios            | API Requests            |
| Socket.IO Client | Real-Time Communication |
| React Leaflet    | Interactive Maps        |

---

## Project Structure

```bash
src/
│
├── api/
│   ├── axios.js
│   ├── auth.api.js
│   ├── incident.api.js
│   ├── rescue.api.js
│   └── admin.api.js
│
├── assets/
│
├── components/
│   ├── common/
│   ├── auth/
│   ├── incident/
│   ├── rescue/
│   ├── admin/
│   └── maps/
│
├── context/
│   ├── AuthContext.jsx
│   ├── SocketContext.jsx
│   └── NotificationContext.jsx
│
├── hooks/
│
├── layouts/
│
├── pages/
│   ├── auth/
│   ├── user/
│   ├── rescue/
│   └── admin/
│
├── routes/
│
├── services/
│
├── utils/
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## Installation

### Clone Repository

```bash
git clone <repository-url>
```

### Navigate To Frontend Directory

```bash
cd frontend
```

### Install Dependencies

```bash
npm install
```

---

## Environment Variables

Create a `.env` file in the project root.

```env
VITE_API_URL=/api
VITE_SOCKET_URL=http://localhost:8000
VITE_BACKEND_URL=http://localhost:8000
```

For production deployment, replace localhost URLs with your deployed backend URLs.

Example:

```env
VITE_API_URL=https://rapidrelief-system.onrender.com/api
VITE_SOCKET_URL=https://rapidrelief-system.onrender.com
VITE_BACKEND_URL=https://rapidrelief-system.onrender.com
```

---

## Running the Development Server

Start the development server:

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

---

## Production Build

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## Backend Integration

The frontend communicates with:

### Backend API

```text
http://localhost:8000/api
```

### Machine Learning Service

Resource prediction requests are handled through the backend, which communicates with the FastAPI machine learning service.

---

## Authentication & Authorization

Authentication is implemented using:

* JWT Access Tokens
* React Context API
* Protected Routes
* Role-Based Authorization

### Supported Roles

* USER
* RESCUE
* ADMIN

---

## Real-Time Communication

RapidRelief uses Socket.IO for:

* Live Incident Updates
* Rescue Assignment Notifications
* Status Tracking
* Real-Time Dashboard Updates

---

## Maps & Location Services

The application integrates React Leaflet to provide:

* Incident Mapping
* Rescue Team Tracking
* Assistance Center Locations
* Safe Zone Visualization
* Disaster Monitoring

---

## Future Enhancements

* Progressive Web App (PWA)
* Offline Incident Reporting
* Push Notifications
* Multi-language Support
* Dark Mode
* Advanced Analytics
* Satellite Communication Integration
* AI-Based Disaster Prediction
* Mobile Application Support

---

## Author

**Aditya Verma**

Third-Year Engineering Student

---

## License

This project is developed for educational, research, and disaster management purposes.
© 2026 Aditya Verma. All rights reserved.
