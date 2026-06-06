# 📈 Zerodha Clone

A full-stack trading platform inspired by Zerodha, built using the **MERN Stack (MongoDB, Express.js, React.js, and Node.js)**. The application replicates key features of a modern stock trading platform, including portfolio management, holdings tracking, watchlists, order management, and an interactive trading dashboard.

---

## 📖 Overview

Zerodha Clone is a comprehensive trading dashboard application designed to simulate the user experience of a modern stock brokerage platform. Users can manage their holdings, monitor stock performance, place orders, and track their investments through a clean and responsive interface.

This project demonstrates full-stack web development concepts such as RESTful APIs, state management, database integration, responsive UI development, and scalable application architecture.

---

## ✨ Features

### 👤 User Management

* Secure User Authentication
* User Profile Management
* Session Handling

### 📊 Trading Dashboard

* Interactive Dashboard
* Portfolio Overview
* Holdings Management
* Position Tracking
* Funds Management

### 📈 Market Features

* Watchlist Management
* Stock Monitoring
* Order Placement Simulation
* Buy/Sell Actions
* Real-Time Portfolio Updates

### 📉 Analytics & Visualization

* Interactive Charts
* Portfolio Distribution Graphs
* Holdings Analytics
* Performance Tracking

### 🎨 User Interface

* Responsive Design
* Modern Trading Dashboard
* Easy Navigation
* User-Friendly Experience

---

## 🛠️ Tech Stack

### Frontend

* React.js
* JavaScript
* HTML5
* CSS3
* Bootstrap

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose ODM

### Other Tools

* Axios
* React Router
* Chart.js

---

## 📂 Project Structure

```text
Zerodha-Clone/
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── components/
│   └── pages/
│
├── dashboard/
│   ├── src/
│   ├── components/
│   └── pages/
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   └── config/
│
├── package.json
├── .env
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/priti16011996/zerodha-clone.git
cd zerodha-clone
```

### Install Dependencies

Backend

```bash
cd backend
npm install
```

Frontend

```bash
cd frontend
npm install
```

Dashboard

```bash
cd dashboard
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file inside the backend directory:

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

---

## ▶️ Run Application

Backend

```bash
npm start
```

Frontend

```bash
npm start
```

Dashboard

```bash
npm start
```

---

## 🗄️ Database Models

### User

```javascript
{
  name: String,
  email: String,
  password: String
}
```

### Holding

```javascript
{
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  net: String,
  day: String
}
```

### Position

```javascript
{
  product: String,
  name: String,
  qty: Number,
  avg: Number,
  price: Number
}
```

---

## 🚀 Key Highlights

* Full Stack MERN Application
* Trading Dashboard Simulation
* Portfolio Management
* Holdings & Positions Tracking
* Watchlist Functionality
* Interactive Charts
* RESTful API Architecture
* Responsive User Interface
* MongoDB Atlas Integration

---

## 📈 Future Enhancements

* Real-Time Stock Market Data
* Advanced Charting
* Order History
* Portfolio Analytics
* News Integration
* Price Alerts
* Dark Mode
* Mobile Application

---

## 📸 Project Screenshots

### Home Page

*Add Screenshot Here*

### Dashboard

*Add Screenshot Here*

### Holdings

*Add Screenshot Here*

### Watchlist

*Add Screenshot Here*

### Orders

*Add Screenshot Here*

---

## 👨‍💻 Author

### Priti Maurya

Full Stack Developer passionate about building scalable web applications using the MERN Stack and modern web technologies.

* GitHub: https://github.com/priti16011996

If you found this project useful, consider giving it a ⭐ on GitHub.

---

## 📄 License

This project is licensed under the MIT License.
