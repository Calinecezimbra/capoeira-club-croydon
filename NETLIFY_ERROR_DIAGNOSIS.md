# Netlify Deployment Error Diagnosis

## Common Netlify Errors for Your App

### ❌ Error 1: "Build command failed"
**What you see:**
```
Failed during stage 'building site': Build script returned non-zero exit code: 1
```

**Why it happens:**
- Netlify tries to run `pnpm run build` which includes building your server code
- The server build requires Node.js modules that don't work in serverless
- Dependencies like `express`, `drizzle-orm`, `mysql2` fail in Netlify's environment

**Evidence in your build:**
Your build command in package.json:
```json
"build": "vite build && esbuild server/_core/index.ts ..."
```
The second part (esbuild server) is incompatible with Netlify.

---

### ❌ Error 2: "Function bundling failed"
**What you see:**
```
Error: Could not resolve "express"
Error: Could not resolve "mysql2"
```

**Why it happens:**
- Netlify tries to bundle your server code as a serverless function
- Express.js and MySQL connections don't work in serverless functions
- Netlify Functions have a 10-second timeout limit
- Your app needs a persistent server connection

---

### ❌ Error 3: "Deploy succeeded but site doesn't work"
**What you see:**
- Build completes successfully (only frontend built)
- Pages show "404 Not Found" for API calls
- Forms don't submit
- No data loads

**Why it happens:**
- Only the React frontend deployed
- All `/api/trpc/*` endpoints are missing
- No database connection exists
- No backend server is running

**How to verify:**
Open browser console and see errors like:
```
Failed to fetch: /api/trpc/...
Network error
```

---

### ❌ Error 4: "DATABASE_URL is not defined"
**What you see:**
```
Error: DATABASE_URL is required to run drizzle commands
```

**Why it happens:**
- Your Drizzle config requires `DATABASE_URL`
- Netlify has no built-in MySQL database
- Even if you set the variable, connections won't work without persistent server

---

### ❌ Error 5: "Cannot find module 'server/index.ts'"
**What you see:**
```
Module not found: Error: Can't resolve './server'
```

**Why it happens:**
- Netlify is trying to serve a static site
- It's looking for files that should be on a Node.js server
- The Express server code is not meant for static hosting

---

## 🔍 How to Check Your Netlify Deploy Logs

1. Go to [app.netlify.com](https://app.netlify.com)
2. Click on your site
3. Click "Deploys" tab
4. Click on the latest deploy
5. Look for error messages in the log

### What to Look For:

**Build Phase Errors:**
```
npm ERR! or pnpm ERR!
Module not found
Cannot resolve
Build failed
```

**Deploy Phase Errors:**
```
Deploy succeeded (but site broken)
404 errors in browser
API endpoint not found
```

---

## ✅ Quick Test: What Works on Netlify

Create this test to see what actually deploys:

### Test 1: Frontend Only
1. Change build command in Netlify to: `cd capoeira-club-croydon && pnpm install && pnpm run build:client`
2. Set publish directory to: `capoeira-club-croydon/dist/public`
3. Deploy

**Result:** Frontend will work, but no forms, no data, no API calls work.

---

## 📋 Checklist: Does Your App Work on Netlify?

- [ ] **Static files only?** → ❌ No, you have Express server
- [ ] **No database?** → ❌ No, you use MySQL with Drizzle
- [ ] **No persistent connections?** → ❌ No, you need database connections
- [ ] **All API calls can be serverless functions?** → ❌ No, tRPC requires different architecture
- [ ] **No server-side rendering?** → ✅ Yes, it's client-side (this part is OK)
- [ ] **No background processes?** → ❌ No, server runs continuously

**Score: 1/6** - Netlify is not suitable for your app.

---

## 🎯 The Real Problem

Your app architecture:
```
┌─────────────────────────────────────────┐
│  Frontend (React + Vite)                │
│  ✅ Can deploy to Netlify               │
└──────────────┬──────────────────────────┘
               │
               │ API Calls via tRPC
               │
┌──────────────▼──────────────────────────┐
│  Backend (Express + tRPC)               │
│  ❌ CANNOT deploy to Netlify           │
│                                          │
│  • Express server                       │
│  • tRPC router                          │
│  • Database connections (MySQL)         │
│  • Authentication                       │
│  • Email sending                        │
│  • File uploads                         │
└─────────────────────────────────────────┘
```

**Netlify supports:** Static sites, client-side React, simple serverless functions

**Your app needs:** Full Node.js server with persistent database connections

---

## 💡 What Netlify Would Tell You

If you contacted Netlify support, they'd say:

> "Your application requires a persistent Node.js server with database connections. Netlify is optimized for JAMstack applications with static front-ends and serverless functions. For your use case, we recommend using a platform like Render, Railway, Heroku, or AWS Elastic Beanstalk that supports full-stack Node.js applications."

---

## 🚀 Immediate Action Steps

### Option A: Use Render (Recommended)
1. Follow the [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) 
2. 10-minute setup
3. Free tier available
4. Works out of the box

### Option B: Use Railway
1. Follow the [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)
2. 10-minute setup
3. $5 free credit
4. Works out of the box

### Option C: Fix for Netlify (Not Recommended)
Would require:
- Removing Express server
- Converting to Netlify Functions (rewrite all API endpoints)
- Using external database service (PlanetScale/Neon)
- Rewriting authentication system
- Estimated time: 15-25 hours of work
- Risk: May still have issues

---

## 📞 Getting Help

If you've already deployed and want to share error logs:

1. Copy the full build log from Netlify
2. Check browser console for runtime errors
3. Share the specific error messages

Common error patterns:
- `Module not found` → Build phase failed
- `Cannot resolve` → Dependencies missing
- `API endpoint 404` → Backend not deployed
- `DATABASE_URL` → Configuration issue (but won't solve root problem)

---

## ✅ Success Criteria

After deploying to Render or Railway, you should see:

✅ All pages load correctly
✅ Images display properly
✅ Registration forms submit successfully
✅ Contact form sends emails
✅ Data loads from database
✅ No console errors
✅ Site stays online 24/7

This is NOT possible on Netlify with your current architecture.
