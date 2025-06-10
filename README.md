# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# 💬 Real-Time Chat Application (MERN + Socket.IO)

A full-stack real-time chat application built using the **MERN stack** (MongoDB, Express, React, Node.js) and **Socket.IO** for WebSocket communication.

---

## 🚀 Features

- 🔐 User authentication (JWT)
- 💬 Real-time messaging using Socket.IO
- 📸 Image sharing via Cloudinary
- ⚡ Modern UI with Tailwind CSS
- 👤 Online/offline user tracking

---

## 📦 Tech Stack

| Layer     | Tech                          |
|-----------|-------------------------------|
| Frontend  | React, Tailwind CSS, Axios    |
| Backend   | Node.js, Express, MongoDB     |
| Real-time | Socket.IO                     |
| Auth      | JWT                           |
| Uploads   | Multer, Cloudinary            |

---

## 📁 Project Structure & File Usage

chat-app/
├── client/                         # Frontend (React)
│   ├── public/                     # Static files
│   ├── src/
│   │   ├── components/             # Reusable React components (UI elements)
│   │   ├── pages/                  # Page components (Login, Chat, Register, etc.)
│   │   ├── context/                # Global state (auth, socket context)
│   │   ├── App.jsx                 # Main app with routing
│   │   ├── main.jsx                # React entry point
│   │   └── index.css               # Tailwind base styles
│   ├── package.json                # Frontend dependencies and scripts
│   └── vite.config.js              # Vite configuration

├── server/                         # Backend (Express + Socket.IO)
│   ├── config/
│   │   ├── db.js                   # MongoDB connection setup
│   │   └── GenerateJwtToken.js    # JWT generation logic
│   ├── controllers/
│   │   ├── userController.js       # User registration and login logic
│   │   └── messageController.js    # Sending and fetching messages
│   ├── middleware/
│   │   ├── errorHandler.js         # Global error handling
│   │   ├── multer.js               # File upload (image) middleware
│   │   └── tokenVerification.js    # Verifies JWTs for protected routes
│   ├── models/
│   │   ├── userModel.js            # Mongoose schema for user
│   │   └── messageModel.js         # Mongoose schema for messages
│   ├── routes/
│   │   ├── userRoute.js            # API routes for user auth
│   │   └── messageRoute.js         # API routes for messaging
│   ├── utils/
│   │   └── cloudinary.js           # Cloudinary config for uploading images
│   ├── public/assets/images/       # Uploaded files (if needed for dev)
│   ├── constants.js                # Shared constants (e.g., error messages)
│   ├── .env                        # Environment variables
│   ├── server.js                   # Main server entry point (starts Express & Socket.IO)
│   └── package.json                # Backend dependencies and scripts

├── README.md                       # Project overview and setup instructions
└── .gitignore                      # Git ignored files



