# Ahesanali Kadiwala — Developer Portfolio

A modern, responsive, and production-ready developer portfolio built with React and a full-stack architecture.

The portfolio showcases my projects, technical skills, education, experience, GitHub repositories, and provides a secure contact form backed by an Express.js API and MongoDB.

## 🌐 Live Demo

**Portfolio:**  
https://ahesanali-kadiwala-portfolio.netlify.app

**GitHub Repository:**  
https://github.com/Ahesanali20/Ahesanali-portfolio

---

## ✨ Features

- Responsive portfolio design
- Dark / Light theme
- Animated UI interactions
- Project filtering
- Dynamic project details
- GitHub repository integration
- GitHub repository fetching with TanStack Query
- Contact form with client-side validation
- Server-side contact validation
- MongoDB contact message storage
- API rate limiting
- CORS protection
- Helmet security headers
- Environment variable configuration
- Reusable component architecture
- Mobile-friendly navigation
- Resume download
- Custom 404 page

---

## 🛠️ Tech Stack

### Frontend

- React
- Vite
- React Router
- Redux Toolkit
- TanStack Query
- Axios
- React Hook Form
- Zod
- Tailwind CSS
- Motion
- Lucide React

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS
- Helmet
- Express Rate Limit
- dotenv

### Deployment

- Vercel — Frontend
- Render — Backend
- MongoDB Atlas — Database

---

## 🏗️ Project Architecture

The project follows a modular and scalable architecture separating pages, reusable components, features, services, state management, hooks, and backend responsibilities.

```text
ahesanali-kadiwala-portfolio/
│
├── public/
│   ├── images/
│   ├── favicon.svg
│   └── resume.pdf
│
├── server/
│   ├── config/
│   │   └── database.js
│   ├── controllers/
│   │   └── contactController.js
│   ├── middleware/
│   │   ├── contactValidation.js
│   │   ├── errorHandler.js
│   │   └── rateLimiter.js
│   ├── models/
│   │   └── Contact.js
│   ├── routes/
│   │   └── contactRoutes.js
│   ├── app.js
│   ├── server.js
│   └── package.json
│
├── src/
│   ├── components/
│   │   ├── animations/
│   │   ├── common/
│   │   ├── footer/
│   │   ├── layout/
│   │   ├── navbar/
│   │   └── ui/
│   │
│   ├── data/
│   ├── features/
│   ├── hooks/
│   ├── lib/
│   ├── pages/
│   ├── providers/
│   ├── routes/
│   ├── schemas/
│   ├── services/
│   ├── store/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .env.example
├── components.json
├── eslint.config.js
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 📄 Pages

### Home

Contains:

- Hero section
- About preview
- Skills preview
- Featured projects
- GitHub repositories
- Contact CTA

### About

Contains:

- Professional introduction
- Experience
- Education

### Projects

Contains:

- Project listing
- Project filtering
- Technology information
- GitHub links
- Live demo links
- Dynamic project details

### Skills

Organized technical skills with categorized presentation.

### Contact

A validated contact form connected to the production backend API.

### Not Found

Custom 404 page for invalid routes.

---

## 📬 Contact Form Architecture

The contact form uses a complete frontend-to-backend flow.

```text
React Contact Form
        ↓
React Hook Form
        ↓
Zod Validation
        ↓
Axios API Request
        ↓
Express.js API
        ↓
Rate Limiter
        ↓
Server-side Validation
        ↓
Contact Controller
        ↓
Mongoose
        ↓
MongoDB Atlas
        ↓
Success Response
```

### API Endpoint

```text
POST /api/contact
```

### Health Check

```text
GET /api/health
```

---

## 🔐 Security

The backend includes several production-oriented security measures:

### Helmet

Adds secure HTTP response headers.

### CORS

Only configured frontend origins are allowed to communicate with the API.

### Rate Limiting

Contact submissions are limited to prevent excessive requests.

```text
5 requests / 15 minutes
```

### Request Validation

Both frontend and backend validate contact form input.

### Environment Variables

Sensitive configuration such as:

- MongoDB connection string
- Frontend API URL
- Production client URL

is stored using environment variables instead of being hardcoded.

---

## 🔑 Environment Variables

### Frontend

Create a `.env` file:

```env
VITE_API_URL=http://localhost:5000/api
```

### Backend

Create:

```text
server/.env
```

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
CLIENT_URL=http://localhost:5173
NODE_ENV=development
```

Never commit `.env` files to Git.

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Ahesanali20/Ahesanali-portfolio.git
```

### 2. Navigate into the project

```bash
cd Ahesanali-portfolio
```

### 3. Install frontend dependencies

```bash
npm install
```

### 4. Configure frontend environment variables

Create:

```text
.env
```

```env
VITE_API_URL=http://localhost:5000/api
```

### 5. Install backend dependencies

```bash
cd server
npm install
```

### 6. Configure backend environment variables

Create:

```text
server/.env
```

Add your MongoDB connection string and client URL.

### 7. Start the backend

From the `server` directory:

```bash
npm run dev
```

### 8. Start the frontend

Open another terminal from the project root:

```bash
npm run dev
```

The frontend will run on:

```text
http://localhost:5173
```

---

## 📦 Production Build

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## 🚢 Deployment

### Frontend

The React frontend is deployed using Vercel.

### Backend

The Express.js API is deployed using Render.

### Database

MongoDB Atlas is used as the production database.

```text
Frontend → Vercel
Backend  → Render
Database → MongoDB Atlas
```

---

## 📌 Featured Projects

### Conversational Library Manager

AI-powered conversational library management system supporting English and Hindi interactions.

**Technologies:**

- Python
- Groq Llama3 API
- MySQL
- JavaScript

### E-Commerce Store

Responsive React e-commerce application with product management, Redux Toolkit state management, API integration, and cart functionality.

**Technologies:**

- React
- Redux Toolkit
- React Router
- Axios
- Tailwind CSS

### Developer Portfolio

Production-ready portfolio application built with React and a full-stack contact system.

**Technologies:**

- React
- Redux Toolkit
- TanStack Query
- React Hook Form
- Zod
- Tailwind CSS
- Motion
- Express.js
- MongoDB

---

## 🔮 Future Improvements

Possible future enhancements include:

- Admin dashboard for contact messages
- Email notifications for new messages
- Blog section
- Advanced analytics
- Improved image optimization
- Further code splitting and lazy loading
- Automated testing
- CI/CD workflow

---

## 👨‍💻 Author

### Ahesanali Kadiwala

**React Developer | Frontend Developer**

Ahmedabad, India

- GitHub: https://github.com/Ahesanali20
- LinkedIn: https://linkedin.com/in/ahesanalikadiwala
- Email: kadiwalaahesanali20@gmail.com

---

## 📄 License

This project is created for personal portfolio and professional showcase purposes.
