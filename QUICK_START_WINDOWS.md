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
VITE_API_URL=https://portfolio-dbq5.onrender.com
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
     Value: https://portfolio-dbq5.onrender.com
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
# Enter: https://portfolio-dbq5.onrender.com

# Deploy to production
vercel --prod
```

---

## 4️⃣ Verify Deployment

1. Visit your Vercel URL
2. Open DevTools (F12) → Network tab
3. Test chatbot
4. Check that API calls go to: `https://portfolio-dbq5.onrender.com/chat/`

---

## 5️⃣ Frontend Code Changes (Done ✅)

Your `frontend/api/api.js` now uses:
```javascript
const baseURL = import.meta.env.VITE_API_URL || 'http://localhost:8000'
```

This means:
- **Locally:** Uses `http://localhost:8000` (from .env.local)
- **On Vercel:** Uses `https://portfolio-dbq5.onrender.com` (from Vercel env vars)

---

## 📋 Files Created/Modified

✅ `frontend/api/api.js` - Updated to use env variables
✅ `frontend/.env.example` - Template for env vars
✅ `frontend/.env.local` - Local dev configuration
✅ `frontend/.gitignore` - Already ignores .env.local

---

## 🚀 Final Checklist

- [ ] Backend running on Render (https://portfolio-dbq5.onrender.com)
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
