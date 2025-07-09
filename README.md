# 📝 MERN Blog Application

A full-stack blog application built with the **MERN Stack** (MongoDB, Express.js, React, Node.js) and styled with **Tailwind CSS**. It allows users to create, read, and delete blog posts with category tagging.

---

## 📚 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Screenshots](#screenshots)
- [Installation](#installation)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Folder Structure](#folder-structure)

---

## ✨ Features

- Create, view, and delete blog posts.
- Tag posts with categories.
- Responsive design using Tailwind CSS.
- MongoDB as the database.
- RESTful API with Express.js and Node.js.
- React Router DOM for frontend routing.
- Axios for API requests.

---

## 🚀 Tech Stack

| Tech             | Description                    |
|------------------|--------------------------------|
| MongoDB          | NoSQL Database                 |
| Express.js       | Node.js Framework              |
| React            | Frontend UI Library            |
| Node.js          | Backend JavaScript Runtime     |
| Tailwind CSS     | Utility-first CSS Framework    |
| Axios            | HTTP client for API requests   |
| Mongoose         | MongoDB ODM                    |

---

## 🖼️ Screenshots

> Add screenshots of the app interface here  
> Example:

- ![Homepage](screenshots/homepage.png)
- ![Post Form](screenshots/post-form.png)

---

## 🛠️ Installation

### 📦 Backend Setup

```bash
# Navigate to the server folder
cd server

# Install dependencies
pnpm install

# Create a .env file
cp .env.example .env

# Start MongoDB locally (ensure it runs on port 27017)

# Start backend server
pnpm run dev
🌐 Frontend Setup
bash
Copy
Edit
# Navigate to the client folder
cd client

# Install dependencies
pnpm install

# Start the development server
pnpm run dev
The client will run on http://localhost:5173 by default.

🔐 Environment Variables
Create a .env file in the server directory:

env
Copy
Edit
PORT=5000
MONGO_URI=mongodb://localhost:27017/mern-blog
NODE_ENV=development
📡 API Endpoints
Posts Routes
Method	Endpoint	Description
GET	/api/posts	Get all posts
GET	/api/posts/:id	Get single post
POST	/api/posts	Create new post
PUT	/api/posts/:id	Update post
DELETE	/api/posts/:id	Delete post

Categories Routes
Method	Endpoint	Description
GET	/api/categories	Get all categories
POST	/api/categories	Create new category

🗂️ Folder Structure
bash
Copy
Edit
mern-blog/
├── client/                # React frontend
│   ├── pages/             # Pages like Home, PostForm
│   ├── components/        # Navbar, PostCard
│   ├── App.jsx            # Main routing component
│   └── index.js           # Entry point
│
├── server/                # Node.js backend
│   ├── controllers/       # API route logic
│   ├── models/            # Mongoose schemas
│   ├── routes/            # API routes
│   ├── config/            # DB connection
│   ├── middleware/        # Error handling
│   ├── .env               # Environment variables
│   └── server.js          # Server entry point
🤝 Contributing
Contributions are welcome!

Fork the repo

Create your feature branch (git checkout -b feature/myFeature)

Commit your changes (git commit -m 'Add some feature')

Push to the branch (git push origin feature/myFeature)

Open a pull request

📄 License
This project is licensed under the MIT License.

🙋‍♀️ Author
Susan Ngesa
GitHub

yaml
Copy
Edit
