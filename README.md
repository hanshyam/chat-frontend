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
│   ├── src  
│   │   ├── components/             # Reusable React components (UI elements)  
│   │   ├── pages/                  # Page components (Login, Chat, Register, etc.)  
│   │   ├── context/                # Global state (auth, socket context)  
│   │   ├── App.jsx                 # Main app with routing  
│   │   ├── main.jsx                # React entry point  
│   │   └── index.css               # Tailwind base styles  
│   ├── package.json                # Frontend dependencies and scripts  
│   └── vite.config.js              # Vite configuration


⚛️ Frontend (React + Vite) Installation
Step 1: Navigate to the client directory
bash
Copy
Edit
cd client
Step 2: Install all dependencies
bash
Copy
Edit
npm install
This installs the following packages:

React & React DOM – Core React libraries

React Router DOM – For page routing (v7)

Axios – HTTP requests to the backend

Socket.IO Client – Real-time WebSocket connection

Tailwind CSS & @tailwindcss/vite – Utility-first CSS framework

React Hot Toast – Toast notifications for success/error messages

Step 3: Tailwind CSS Setup
Ensure your tailwind.config.js looks like this:

js
Copy
Edit
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
In your src/index.css, import Tailwind’s directives:

css
Copy
Edit
@tailwind base;
@tailwind components;
@tailwind utilities;
Step 4: Start the development server
bash
Copy
Edit
npm run dev
This will start your frontend at:

arduino
Copy
Edit
http://localhost:5173
Make sure your backend (server) is running on the port expected by your frontend (usually http://localhost:5000 or specified in .env).


