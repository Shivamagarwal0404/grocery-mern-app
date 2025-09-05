# 🛒 Grocery Manager (MERN Stack)

A full-stack grocery management web app built with the **MERN stack** (MongoDB, Express, React, Node.js).  
This project was developed as part of the **SmartBridge Internship Program**.

---

## ✨ Features
- 🔐 User Authentication (Register/Login with JWT)
- 📦 Manage Groceries (CRUD operations: Create, Read, Update, Delete)
- 🎨 Responsive UI with **Tailwind CSS**
- 🔗 Connected Frontend + Backend (REST APIs)
- 🗄️ MongoDB Atlas / Local MongoDB Database
- 🖥️ Deployed on Localhost (with option for cloud deployment)

---

## 📂 Project Structure
grocery-mern-app/
│
├── client/ # React Frontend
│ ├── src/
│ │ ├── pages/
│ │ │ ├── Home.js
│ │ │ ├── Dashboard.js
│ │ │ ├── Login.js
│ │ │ └── Register.js
│ │ ├── App.js
│ │ └── index.css
│ └── package.json
│
├── server/ # Express + Node.js Backend
│ ├── models/
│ │ ├── userModel.js
│ │ └── groceryModel.js
│ ├── routes/
│ │ ├── authRoutes.js
│ │ └── groceryRoutes.js
│ ├── middleware/
│ │ └── authMiddleware.js
│ ├── server.js
│ └── package.json
│
├── .env # Environment variables
├── README.md # Project Documentation
└── .gitignore # Ignore node_modules, .env
