# ProNote 📝

### Professional MERN Stack Note Application

ProNote is a high-performance, secure, and minimal **note-taking web application** built using the **MERN Stack**. It provides a private note vault protected by an additional password layer, full CRUD operations, and a modern professional UI powered by **Tailwind CSS**.

---

## 🌐 Live Project

🔗 **Live Demo:**  
https://pronote-notesapp.netlify.app/

📦 **GitHub Repository:**  
https://github.com/sabbirShaikh/ProNotes-note-management.git

---

## 🚀 Features

- **Secure Authentication**

  - User signup and login using **JWT**
  - Global auth state managed via **React Context API**

- **Private Note Vault**

  - Secondary password verification required to access saved notes
  - Enhanced data privacy and security

- **Full CRUD Functionality**

  - Create, Read, Update, and Delete notes
  - Real-time UI updates without page reload

- **Professional UI/UX**

  - Clean and responsive design
  - Glassmorphism effects and smooth transitions
  - Mobile-friendly layout

- **Contact Service**

  - Integrated email service using **Nodemailer**
  - Users can send inquiries directly to the developer

- **Profile Management**
  - Update email address
  - Change password
  - Delete account securely

---

## 🛠️ Tech Stack

### Frontend

- React.js
- Tailwind CSS
- React Router v6
- Fetch API
- React Toastify

### Backend

- Node.js
- Express.js

### Database

- MongoDB (Mongoose)

### Authentication

- JSON Web Token (JWT)

### Email Service

- Nodemailer

### State Management

- React Context API

---

## 📦 Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/sabbirShaikh/ProNotes-note-management.git
cd ProNotes-note-management
```

### 2️⃣ Backend Setup

```bash
cd server
```

Create a `.env` file:

```env
PORT=8080
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
```

Install dependencies and start:

```bash
npm install
npm start
```

### 3️⃣ Frontend Setup

```bash
cd client
npm install
npm start
```

---

## 📂 Project Structure

```plaintext
├── client/
│   ├── src/
│   │   ├── apis/
│   │   ├── components/
│   │   ├── context/
│   │   └── pages/
└── server/
    ├── controllers/
    ├── models/
    ├── routes/
    ├── middleware/
    └── utils/
```

---

## 👨‍💻 Developed By

**Sabbir Shaikh**  
MERN Stack Developer

🌐 Portfolio: https://sk-sabbir-ali-portfolio.netlify.app  
💻 GitHub: https://github.com/sabbirShaikh

---

## 📜 License

MIT License
