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

# Quick Setup Guide - Windows PowerShell

## 1️⃣ Local Development Setup

### Step 1: Start Backend
```powershell
cd backend
python -m venv venv
.\venv\Scripts\Activate.ps1
pip install -r requirements.txt
python manage.py runserver
```
✅ Backend running at: `http://localhost:8000`

### Step 2: Start Frontend (New Terminal)
```powershell
cd frontend
npm install
npm run dev
```
✅ Frontend running at: `http://localhost:5173`

### Step 3: Test Locally
- Visit http://localhost:5173
- Test chatbot and contact form
- Check DevTools → Network tab to verify API calls to localhost:8000

---

## 2️⃣ Environment Variables Setup

### Local Development (.env.local - already created)
```
VITE_API_URL=http://localhost:8000
```

### Production (Vercel)
You'll set this in Vercel Dashboard:
```
VITE_API_URL=https://your.onrender.com
```

---

## 3️⃣ Deploy to Vercel (Step-by-Step)

### Option A: Via Vercel Dashboard (Easiest)

1. **Push to GitHub**
   ```powershell
   git add .
   git commit -m "Setup env variables"
   git push origin main
   ```

2. **Go to Vercel:** https://vercel.com/dashboard

3. **Click "Add New" → "Project"**

4. **Import your GitHub repo**
   - Select your portfolio repository
   - Click "Import"

5. **Configure Project**
   - Root Directory: `frontend`
   - Framework Preset: Vite
   - Click "Continue"

6. **Add Environment Variable**
   - Click "Environment Variables"
   - Add:
     ```
     Name: VITE_API_URL
     Value: https://your.onrender.com
     ```
   - Select: Production, Preview
   - Click "Add"

7. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Get your Vercel URL: `https://your-project.vercel.app`

### Option B: Via Vercel CLI

```powershell
npm install -g vercel
cd frontend
vercel
# Follow prompts and select "frontend" as root

# Add env var
vercel env add VITE_API_URL
# Enter: https://your.onrender.com

# Deploy to production
vercel --prod
```

---

## 4️⃣ Verify Deployment

1. Visit your Vercel URL
2. Open DevTools (F12) → Network tab
3. Test chatbot
4. Check that API calls go to: `https://your.onrender.com/chat/`

---

## 5️⃣ Frontend Code Changes (Done ✅)

Your `frontend/api/api.js` now uses:
```javascript
const baseURL = import.meta.env.VITE_API_URL || 'http://localhost:8000'
```

This means:
- **Locally:** Uses `http://localhost:8000` (from .env.local)
- **On Vercel:** Uses `https://your.onrender.com` (from Vercel env vars)

---

## 📋 Files Created/Modified

✅ `frontend/api/api.js` - Updated to use env variables
✅ `frontend/.env.example` - Template for env vars
✅ `frontend/.env.local` - Local dev configuration
✅ `frontend/.gitignore` - Already ignores .env.local

---

## 🚀 Final Checklist

- [ ] Backend running on Render (https://your.onrender.com)
- [ ] Frontend code pushed to GitHub
- [ ] Vercel project created and connected
- [ ] Environment variable `VITE_API_URL` set in Vercel
- [ ] Vercel deployment complete
- [ ] Tested API calls from Vercel frontend to Render backend
- [ ] Everything working! 🎉

---

## 💡 Useful Commands

```powershell
# Check if variables are loaded (run in browser console)
console.log(import.meta.env.VITE_API_URL)

# Build for production
npm run build

# Check build output
npm run preview

# Deploy from CLI
vercel --prod
```

---

## 🆘 Common Issues

| Issue | Solution |
|-------|----------|
| "Cannot reach backend" | Check Render status, verify API URL |
| "Env var not loading" | Redeploy Vercel, hard refresh (Ctrl+Shift+R) |
| "CORS error" | Add Vercel domain to Django CORS settings |
| ".env.local committed" | Already in .gitignore, you're good! |

---

Need help? Check `VERCEL_DEPLOYMENT_GUIDE.md` for detailed instructions!

# Vercel Deployment Guide with Environment Variables

## Step 1: Prepare Your Repository

1. Make sure your frontend code is pushed to GitHub
2. Add your `.env.local` to `.gitignore` (don't commit local env vars)
   ```bash
   echo ".env.local" >> .gitignore
   ```

## Step 2: Deploy to Vercel

### Option A: Using Vercel CLI
```bash
npm install -g vercel
cd frontend
vercel
```

### Option B: Using Vercel Dashboard
1. Go to https://vercel.com/dashboard
2. Click "Add New" → "Project"
3. Import your GitHub repository
4. Select the `frontend` directory as root

## Step 3: Configure Environment Variables in Vercel

### Via Vercel Dashboard:
1. Go to your project settings
2. Navigate to **Settings** → **Environment Variables**
3. Add the following variables:

| Variable | Development | Production | Preview |
|----------|-------------|------------|---------|
| `VITE_API_URL` | `http://localhost:8000` | `https://your-backend.onrender.com` | `https://your-backend.onrender.com` |

### Example Setup:
```
Name: VITE_API_URL
Value: https://your-backend.onrender.com
Environments: Production, Preview
```

For development:
```
Name: VITE_API_URL
Value: http://localhost:8000
Environments: Development
```

### Via Vercel CLI:
```bash
vercel env add VITE_API_URL
# Then enter your backend URL when prompted
```

## Step 4: Set Your Render Backend URL

Replace `https://your-backend.onrender.com` with your actual Render backend URL:

**Your Render Backend:**
```
https://your.onrender.com
```

So in Vercel, set:
```
VITE_API_URL=https://your.onrender.com
```

## Step 5: Deploy

1. **Automatic (Recommended):**
   - Push to GitHub main branch
   - Vercel automatically deploys

2. **Manual:**
   ```bash
   vercel --prod
   ```

## Step 6: Verify Deployment

1. Visit your Vercel URL: `https://your-project.vercel.app`
2. Open browser DevTools (F12) → Network tab
3. Test chatbot or contact form
4. Verify API calls go to your Render backend

## Environment Variables Reference

### Development (Local)
```bash
VITE_API_URL=http://localhost:8000
```

### Production (Vercel)
```bash
VITE_API_URL=https://your.onrender.com
```

## Backend API Endpoints

- `POST /chat/` - Chatbot messages
- `POST /message/` - Contact form
- `GET /start/` - Health check
- `POST /auth/login/` - Admin login

## CORS Configuration (Backend)

Make sure your Django backend has CORS enabled for Vercel domain:

In `backend/core/settings.py`:
```python
ALLOWED_HOSTS = ['*']

CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",
    "http://localhost:5173",
    "https://your-project.vercel.app",
]
```

## Testing Your Setup

### Local Testing:
```bash
# Terminal 1: Backend
cd backend
python manage.py runserver

# Terminal 2: Frontend
cd frontend
npm run dev
# Visit http://localhost:5173
```

### Production Testing:
Visit your Vercel URL and test:
- Contact form submission
- Chatbot responses
- View network requests to Render backend

## Common Issues

### ❌ Issue: "Cannot reach backend"
**Solution:** Check that:
- Backend is running on Render
- `VITE_API_URL` is set correctly in Vercel
- CORS is configured in Django settings

### ❌ Issue: "Environment variable not loading"
**Solution:**
- Ensure variable name starts with `VITE_`
- Redeploy after changing variables
- Check Vercel deployment logs

### ❌ Issue: "CORS error"
**Solution:**
- Add your Vercel domain to `CORS_ALLOWED_ORIGINS`
- Redeploy backend

## Useful Links

- **Vercel Docs:** https://vercel.com/docs
- **Vite Env Vars:** https://vitejs.dev/guide/env-and-mode.html
- **Render Docs:** https://render.com/docs

## Quick Checklist

- [ ] Backend running on Render
- [ ] Frontend pushed to GitHub
- [ ] Connected GitHub repo to Vercel
- [ ] Set `VITE_API_URL` in Vercel environment variables
- [ ] Deployed to Vercel
- [ ] Tested API endpoints in production
- [ ] CORS configured in Django
- [ ] All working! 🎉



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