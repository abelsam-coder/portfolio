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
https://portfolio-dbq5.onrender.com
```

So in Vercel, set:
```
VITE_API_URL=https://portfolio-dbq5.onrender.com
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
VITE_API_URL=https://portfolio-dbq5.onrender.com
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
