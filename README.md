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
- React 19
- Vite
- Tailwind CSS 4
- Framer Motion
- Axios
- React Router DOM
- Three.js / React Three Fiber
- Heroicons, Lucide React

### Backend
- Django 6
- Django REST Framework
- django-cors-headers
- Groq SDK for AI assistant completions
- PostgreSQL database driver (`psycopg2-binary`)
- Resend email API integration
- Python Dotenv

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

## 🚀 Deployment notes
- Host frontend on Vercel, Netlify, or plain static hosting
- Deploy backend on Render, Railway, Heroku, or any container-enabled platform
- Use PostgreSQL in production and secure all API keys
- Configure `ALLOWED_HOSTS` and `DEBUG=False` in production

## 💡 Notes
- Chatbot fallback logic in `backend/chatbot/views.py` returns human contact details for support-related queries
- Contact form email sending is handled via `backend/message/views.py` and the Resend API
- Database credentials are environment-driven in `backend/core/settings.py`

## 📌 Contact
- **Owner:** Abel Samuel
- **Email:** abelsamuel841@gmail.com
- **Project path:** `c:\Users\ABELA\OneDrive\Documents\My_Projects\portfolio`

---

Built to present an intelligent portfolio with modern UI, chat-driven engagement, and backend API support.