# 🚀 Deployment Guide - Foodie Project

## ✅ Deployment Status

### Frontend
- **Status**: ✅ Deployed
- **Platform**: Vercel
- **URL**: https://foodie-frontend-kappa.vercel.app
- **Inspect**: https://vercel.com/sheetal-lodhis-projects/foodie-frontend

### Backend
- **Status**: ✅ Deployed
- **Platform**: Railway (Node.js)
- **URL**: https://foodie-production-d900.up.railway.app
- **Dashboard**: https://railway.com/project/107eb211-be3a-4aad-a2fc-0c1cf35ed2d0

---

## 📋 Required Setup Steps

### 1. **Configure Backend Environment Variables on Vercel**

The backend needs environment variables to function properly. Follow these steps:

1. Go to [Vercel Dashboard](https://vercel.com/sheetal-lodhis-projects/foodie-backend)
2. Click on **Settings**
3. Navigate to **Environment Variables**
4. Add the following variables:

```
MONGODB_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRE=7d
CLOUDINARY_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
FRONTEND_URL=https://foodie-frontend-kappa.vercel.app
NODE_ENV=production
PORT=5000
```

5. Click **Save**
6. Redeploy the backend for changes to take effect

### 2. **Update Frontend Environment Variables (Optional)**

If the backend URL changes, update:
- `frontend/.env.production` with the correct `VITE_API_BASE_URL`

### 3. **MongoDB Atlas Setup**

1. Create a cluster at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a database user with a secure password
3. Get your connection string (URI)
4. Add it to Vercel environment variables as `MONGODB_URI`

### 4. **Cloudinary Setup**

1. Sign up at [Cloudinary](https://cloudinary.com)
2. Get your cloud name, API key, and API secret
3. Add them to Vercel environment variables

---

## 🔄 Redeployment

### Frontend
If you make changes to the frontend:
```bash
git push origin main
```
Vercel will automatically redeploy when you push to GitHub.

### Backend
If you make changes to the backend:
```bash
git push origin main
```
Vercel will automatically redeploy when you push to GitHub.

---

## 🧪 Testing the Deployment

### Test Backend API
```bash
curl https://foodie-backend-three.vercel.app/ping
# Should return: "pong"
```

### Test Frontend
1. Visit https://foodie-frontend-kappa.vercel.app
2. You should see the landing page
3. Try registering and creating a recipe

---

## 🐛 Troubleshooting

### Backend Returns 500 Error
- **Cause**: Missing environment variables
- **Solution**: Add all required variables to Vercel dashboard and redeploy

### Frontend Can't Connect to Backend
- **Cause**: Incorrect API URL or CORS issue
- **Solution**: 
  1. Verify `VITE_API_BASE_URL` is correct
  2. Check CORS settings in `backend/src/index.ts`

### Database Connection Failed
- **Cause**: Invalid MongoDB URI or network access not allowed
- **Solution**:
  1. Verify `MONGODB_URI` is correct
  2. Add Vercel's IP to MongoDB Atlas IP whitelist (0.0.0.0/0 for testing)

---

## 📊 Monitoring

### View Deployment Logs
1. Go to Vercel Dashboard
2. Select your project
3. Click **Deployments** tab
4. Click on a deployment to see logs

### Monitor Performance
- Frontend: Use Vercel Analytics
- Backend: Check Vercel logs and MongoDB Atlas monitoring

---

## 🔒 Security Checklist

- [ ] Change `JWT_SECRET` to a strong random string
- [ ] Use strong MongoDB credentials
- [ ] Enable IP whitelist on MongoDB Atlas
- [ ] Set `NODE_ENV=production` on backend
- [ ] Enable HTTPS (automatic with Vercel)
- [ ] Review CORS settings (currently allows localhost and frontend URL)

---

## 📞 Next Steps

1. ✅ Add environment variables to backend on Vercel
2. ✅ Set up MongoDB Atlas cluster
3. ✅ Set up Cloudinary account
4. ✅ Redeploy backend after adding env vars
5. Test the application end-to-end
6. Monitor for errors in Vercel logs

---

**Deployment Date**: May 21, 2026  
**Frontend URL**: https://foodie-frontend-kappa.vercel.app  
**Backend URL**: https://foodie-backend-three.vercel.app
