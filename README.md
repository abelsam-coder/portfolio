# 🚀 Abel Samuel Portfolio

A modern full-stack portfolio project with an AI-powered chatbot, client contact workflow, responsive landing experience, and Django backend APIs.

## ✨ What this project includes
- **Interactive frontend** built with React, Vite, Tailwind CSS, and animated UI components
- **AI chatbot** with backend conversational logic, fallback query handling, and contextual replies
- **Portfolio dashboard** sections for services, projects, testimonials, tech skills, and contact
- **Contact capture flow** sending form submissions through a Django API and email confirmation via Resend
- **Django REST backend** with chatbot, message API, and admin auth endpoints
- **Database-ready setup** using PostgreSQL and environment-driven configuration
- **Responsive design** optimized for desktop and mobile

## 🚧 Main features
- **AI Chat assistant** for service, pricing, contact, and portfolio inquiries
- **Dynamic services and project cards** with hover interactions and filtering
- **Fully functioning contact form** that stores messages and sends acknowledgement emails
- **Dark/light friendly UI** with glassmorphism, gradients, and motion effects
- **Admin authentication** endpoints for backend control
- **Live deployment-ready architecture** for frontend + backend separation

## 🧩 Tech stack

### Frontend
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8%2B-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS%204-06B6D4?logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer-Motion-0055FF?logo=framer&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-1.16-5A29E4?logo=axios&logoColor=white)
![React Router](https://img.shields.io/badge/React%20Router-7-CA4245?logo=reactrouter&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-0.184-000000?logo=threedotjs&logoColor=white)
![Lucide](https://img.shields.io/badge/Lucide%20React-Icons-F97316?logoColor=white)

### Backend
![Django](https://img.shields.io/badge/Django-6.0-092E20?logo=django&logoColor=white)
![DRF](https://img.shields.io/badge/Django%20REST-Framework-red?logo=django&logoColor=white)
![Groq](https://img.shields.io/badge/Groq-AI%20API-FF6B35?logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Latest-4169E1?logo=postgresql&logoColor=white)
![Python](https://img.shields.io/badge/Python-3.9%2B-3776AB?logo=python&logoColor=white)
![Gunicorn](https://img.shields.io/badge/Gunicorn-26-499848?logo=gunicorn&logoColor=white)

## 📁 Repository structure

```text
portfolio/
├── backend/
│   ├── admin_panel/         # Admin authentication and email utilities
│   ├── chatbot/             # AI assistant endpoints, model storage, chat data
│   ├── core/                # Django settings, URL routing, ASGI/WSGI
│   ├── message/             # Contact form message API and serializers
│   ├── manage.py
│   └── requirements.txt
├── frontend/
│   ├── api/                 # Axios HTTP client configuration
│   ├── public/
│   ├── src/
│   │   ├── components/      # UI sections, chatbot, contact form, projects
│   │   ├── context/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── Home.jsx
│   ├── package.json
│   └── vite.config.js
├── Docker/
├── NGINX/
└── README.md
```

## 🔌 Backend API endpoints
- `POST /chat/` — send a chat message and receive an AI reply
- `POST /message/` — submit a contact form entry
- `GET /start/` — healthcheck endpoint for backend availability
- `POST /auth/login/` — admin panel login route

## ⚙️ Environment variables
Create a `.env` file for the backend with values like:

```env
DJANGO_SECRET_KEY=your-secret-key
DB_NAME=your_db_name
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_HOST=localhost
DB_PORT=5432
GROQ_API_KEY=your_groq_api_key
RESEND_API_KEY=your_resend_api_key
```

For the frontend, use `.env.local` if needed to store custom URLs or feature flags.

## 📥 Setup instructions
### Backend
```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

> Open the frontend at `http://localhost:5173` and the backend at `http://127.0.0.1:8000`.

## 🧪 Recommended development workflow
1. Start backend first: `python manage.py runserver`
2. Start frontend: `npm run dev`
3. Use the contact form and chatbot to verify API responses
4. Check browser console and Django server logs for errors

## 🚀 Deployment Stack

### Recommended Production Setup
- **Frontend:** ![Vercel](https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white) — Deploy React app with automatic scaling, CDN, and HTTPS
- **Backend:** ![Render](https://img.shields.io/badge/Render-46E3B7?logo=render&logoColor=white) — Host Django API with PostgreSQL integration
- **Database:** ![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?logo=supabase&logoColor=white) — PostgreSQL hosting with real-time updates and instant REST API

### Deployment Steps
1. **Frontend (Vercel)**
   - Connect your GitHub repo to Vercel
   - Set `VITE_API_URL=https://your-backend.onrender.com` in environment variables
   - Auto-deploy on push to main branch

2. **Backend (Render)**
   - Create a Web Service on Render
   - Connect to your GitHub repository
   - Set environment variables for Supabase connection
   - Deploy Django with Gunicorn

3. **Database (Supabase)**
   - Create a Supabase project
   - Copy PostgreSQL connection string
   - Use in Render backend environment variables

---

## 👨‍💻 About Abel Samuel

I'm a **Full Stack Developer**, **AI Engineer**, **Cybersecurity Specialist**, and **Startup Founder** based in **Ethiopia (Hawassa)** with **3+ years of professional experience** building intelligent systems and scalable digital solutions.

### 🎯 What I do
- Build production-ready **full-stack applications** (React + Django + PostgreSQL)
- Design and integrate **AI-powered solutions** using Groq, OpenAI, and LLMs
- Develop **REST APIs** and microservices for enterprise systems
- Create **e-commerce platforms, ERP systems, and business management tools**
- Implement **cybersecurity measures** and penetration testing
- Deploy applications on **cloud infrastructure** (Vercel, Render, Supabase, AWS)

### 💡 Specializations
- **Frontend:** React, Vite, Tailwind CSS, Three.js, Motion Design
- **Backend:** Django, Django REST Framework, Groq AI SDK, PostgreSQL
- **DevOps:** Docker, Gunicorn, GitHub Actions, cloud deployment
- **AI/ML:** Chatbots, RAG systems, prompt engineering, AI automation
- **Security:** Penetration testing, ethical hacking, vulnerability assessment

### 🚀 Notable Projects
- **Ethioglobal Digital Platform** — AI-powered chatbot integration for customer service
- **Scalable E-Commerce Platform** — Payment processing, inventory, admin dashboard
- **Restaurant Management System** — Digital ordering, reservations, real-time tracking
- **Online Exam Platform** — Auto-grading, AI proctoring, analytics dashboard

### 📊 By The Numbers
- **50+ Projects** delivered
- **120+ Satisfied Clients**
- **98%** customer satisfaction rate
- **3+ Years** professional experience
- **6+ Active Repos** on GitHub

---
- Chatbot fallback logic in `backend/chatbot/views.py` returns human contact details for support-related queries
- Contact form email sending is handled via `backend/message/views.py` and the Resend API
- Database credentials are environment-driven in `backend/core/settings.py`

## ⭐ Support this project

If you find this project useful, consider:

- **⭐ Star this repository** on GitHub to show your support
- **💬 Share your feedback** — open an issue or discussion
- **🤝 Contribute** — submit pull requests and improvements
- **💼 Hire Abel** — contact for freelance or full-time opportunities
- **☕ Buy me coffee** — support via PayPal or sponsorship

Your support keeps this project maintained and helps inspire future work!

## 📌 Contact & socials
- **Owner:** Abel Samuel
- **Email:** abelsamuel841@gmail.com
- **Phone:** 0957576652
- **GitHub:** [Visit my GitHub](https://github.com/abelsamuel)
- **Portfolio:** This repository itself
- **Available for:** Freelance projects, full-time roles, AI solutions, web dev, mobile apps

---

Built to present an intelligent portfolio with modern UI, chat-driven engagement, and backend API support.

If you find value in this work, please consider leaving a ⭐ or reaching out. Thanks!