# 🔐 QUICK START: Add Environment Variables to Vercel

## Step-by-Step Instructions

### 1. Go to Your Backend Project Settings
Visit: https://vercel.com/sheetal-lodhis-projects/foodie-backend/settings/environment-variables

### 2. Click "Add New" for each variable below

Copy and paste each variable name and value:

---

### Variable 1: MONGODB_URI
**Name:** MONGODB_URI  
**Value:** mongodb+srv://foodie_doodie:password12345@foodiedoodie.mbkqr.mongodb.net/?appName=foodiedoodie  
**Environments:** ✅ Production, ✅ Preview, ❌ Development (leave unchecked)

---

### Variable 2: JWT_SECRET
**Name:** JWT_SECRET  
**Value:** QDVIqndw40Pm97Z1HkoFhE2TLxliMG3C  
**Environments:** ✅ Production, ✅ Preview, ❌ Development

---

### Variable 3: CLOUDINARY_NAME
**Name:** CLOUDINARY_NAME  
**Value:** dcqbg09tb  
**Environments:** ✅ Production, ✅ Preview, ✅ Development

---

### Variable 4: CLOUDINARY_API_KEY
**Name:** CLOUDINARY_API_KEY  
**Value:** 677922933217944  
**Environments:** ✅ Production, ✅ Preview, ✅ Development

---

### Variable 5: CLOUDINARY_API_SECRET
**Name:** CLOUDINARY_API_SECRET  
**Value:** hV_HjdLEc5ZbSj4gqp1o2-2DYpI  
**Environments:** ✅ Production, ✅ Preview, ❌ Development

---

### Variable 6: FRONTEND_URL
**Name:** FRONTEND_URL  
**Value:** https://foodie-frontend-kappa.vercel.app  
**Environments:** ✅ Production, ✅ Preview, ✅ Development

---

### Variable 7: NODE_ENV
**Name:** NODE_ENV  
**Value:** production  
**Environments:** ✅ Production, ❌ Preview, ❌ Development

---

### Variable 8: PORT
**Name:** PORT  
**Value:** 5000  
**Environments:** ✅ Production, ✅ Preview, ✅ Development

---

### Variable 9: JWT_EXPIRE
**Name:** JWT_EXPIRE  
**Value:** 7d  
**Environments:** ✅ Production, ✅ Preview, ✅ Development

---

## After Adding Variables:

1. Click **Save** on each variable
2. Go to the **Deployments** tab
3. Click the **... (three dots)** on the latest deployment
4. Select **Redeploy** to apply the new environment variables

---

## ✅ Verification

After redeploying, test your backend:
```bash
curl https://foodie-backend-three.vercel.app/ping
```

Should return: `"pong"`

If you get an error, check the logs in Vercel dashboard.
