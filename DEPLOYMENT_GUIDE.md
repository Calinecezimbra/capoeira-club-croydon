# Deployment Guide - Capoeira Club Croydon

## Why Netlify Fails

Your app has these components that **Netlify cannot support**:
- Express.js backend server
- tRPC API endpoints
- MySQL database connections (Drizzle ORM)
- Server-side authentication
- Email sending (Gmail integration)
- Long-running server processes

**Netlify is for static sites or serverless functions only.** Your app needs a full Node.js server running continuously.

### Common Netlify Error Messages:
- "Build failed" - Because it tries to build server code
- "Function bundling failed" - Express doesn't work in Netlify Functions
- "Database connection timeout" - No persistent connections allowed
- "Port binding error" - Netlify doesn't support Express servers

---

## ✅ Recommended: Deploy to Render (Free Tier)

**Best option for your full-stack app.** Free tier includes PostgreSQL database.

### Step-by-Step Render Deployment

#### 1. Prepare Your Repository
```bash
# Make sure your code is in a Git repository
git init
git add .
git commit -m "Initial commit"

# Push to GitHub (create a repo first on GitHub)
git remote add origin https://github.com/yourusername/capoeira-club-croydon.git
git push -u origin main
```

#### 2. Create Render Account
- Go to [render.com](https://render.com)
- Sign up with GitHub (it's free)

#### 3. Create MySQL Database
1. Click "New +" → "MySQL"
2. Name: `capoeira-club-db`
3. Choose **Free tier**
4. Click "Create Database"
5. **Copy the Internal Database URL** (starts with `mysql://`)

#### 4. Create Web Service
1. Click "New +" → "Web Service"
2. Connect your GitHub repository
3. Configure:
   - **Name:** `capoeira-club-croydon`
   - **Region:** Choose closest to your users
   - **Branch:** `main`
   - **Root Directory:** `capoeira-club-croydon` (if your code is in a subfolder)
   - **Runtime:** `Node`
   - **Build Command:** `pnpm install && pnpm run build`
   - **Start Command:** `pnpm start`
   - **Plan:** Free

#### 5. Add Environment Variables
In the "Environment" section, add:
```
NODE_ENV=production
DATABASE_URL=[paste your MySQL Internal Database URL from step 3]
JWT_SECRET=[generate a random 32+ character string]
PORT=10000
GMAIL_USER=[your Gmail if you want email notifications]
GMAIL_APP_PASSWORD=[Gmail app password]
VITE_APP_ID=[if required by your app]
OAUTH_SERVER_URL=[if using OAuth]
OWNER_OPEN_ID=[if required]
BUILT_IN_FORGE_API_URL=[if using AI features]
BUILT_IN_FORGE_API_KEY=[if using AI features]
```

#### 6. Deploy
- Click "Create Web Service"
- Wait 5-10 minutes for first deployment
- Your app will be live at `https://capoeira-club-croydon.onrender.com`

#### 7. Run Database Migrations
After first deployment:
1. Go to your web service in Render
2. Click "Shell" tab
3. Run: `pnpm run db:push`

#### 8. Set Up Auto-Deploy
- Already configured! Every push to `main` branch auto-deploys

---

## ✅ Alternative: Deploy to Railway

**Also great for full-stack apps.** Similar to Render but different pricing.

### Step-by-Step Railway Deployment

#### 1. Prepare Repository (same as Render)
```bash
git init
git add .
git commit -m "Initial commit"
git push -u origin main
```

#### 2. Create Railway Account
- Go to [railway.app](https://railway.app)
- Sign up with GitHub (free trial: $5 credit)

#### 3. Create New Project
1. Click "New Project"
2. Select "Deploy from GitHub repo"
3. Choose your `capoeira-club-croydon` repository

#### 4. Add MySQL Database
1. Click "New" → "Database" → "Add MySQL"
2. Railway auto-creates the database
3. The `DATABASE_URL` is automatically added to your environment

#### 5. Configure Web Service
1. Select your service
2. Go to "Settings" tab
3. Set:
   - **Build Command:** `pnpm install && pnpm run build`
   - **Start Command:** `pnpm start`
   - **Root Directory:** `capoeira-club-croydon` (if in subfolder)

#### 6. Add Environment Variables
Click "Variables" tab and add:
```
NODE_ENV=production
JWT_SECRET=[generate random string]
GMAIL_USER=[your Gmail]
GMAIL_APP_PASSWORD=[Gmail app password]
VITE_APP_ID=[if required]
OAUTH_SERVER_URL=[if required]
OWNER_OPEN_ID=[if required]
BUILT_IN_FORGE_API_URL=[if required]
BUILT_IN_FORGE_API_KEY=[if required]
```

#### 7. Generate Domain
1. Go to "Settings" → "Networking"
2. Click "Generate Domain"
3. Your app will be at `https://your-app-name.up.railway.app`

#### 8. Run Migrations
1. Click "View Logs" to see deployment progress
2. Once deployed, go to your project settings
3. Use Railway CLI or run migrations through their shell

---

## 🔧 Pre-Deployment Checklist

### 1. Update package.json
Make sure you have the correct start script:
```json
"scripts": {
  "start": "NODE_ENV=production node dist/index.js"
}
```

### 2. Verify Build Output
Test locally:
```bash
pnpm run build
pnpm start
# Visit http://localhost:3000
```

### 3. Database Considerations
- Your app uses MySQL (Drizzle with mysql2)
- Both Render and Railway offer MySQL databases
- **Render:** Free MySQL with limited storage
- **Railway:** MySQL available (costs after $5 credit)

### 4. Environment Variables Required
**Minimum for deployment:**
- `NODE_ENV=production`
- `DATABASE_URL` (provided by hosting)
- `JWT_SECRET` (generate: `openssl rand -base64 32`)

**Optional (for features):**
- `GMAIL_USER` + `GMAIL_APP_PASSWORD` (email notifications)
- Other API keys as needed

---

## 🚨 If You Still Want Netlify

To deploy on Netlify, you must **completely refactor** your app:

### Required Changes:
1. **Remove Express server** - Convert to static site
2. **Convert tRPC to Netlify Functions** - Rewrite all API endpoints
3. **Use external database** - PlanetScale, Neon, or Supabase
4. **Rewrite authentication** - Use Netlify Identity or Auth0
5. **Email via SendGrid API** - Change from Gmail SMTP

### This would take 10-20 hours of work minimum.

**Not recommended** - Use Render or Railway instead.

---

## 📊 Platform Comparison

| Feature | Render | Railway | Netlify |
|---------|--------|---------|---------|
| **Full-stack Node.js** | ✅ Yes | ✅ Yes | ❌ No |
| **Express servers** | ✅ Yes | ✅ Yes | ❌ No |
| **MySQL database** | ✅ Free | ✅ Paid | ❌ No |
| **Free tier** | ✅ Yes | $5 credit | ✅ Yes (static only) |
| **Setup time** | 10 mins | 10 mins | 20+ hours refactor |
| **Auto-deploy** | ✅ Yes | ✅ Yes | ✅ Yes |
| **Custom domains** | ✅ Yes | ✅ Yes | ✅ Yes |
| **SSL** | ✅ Free | ✅ Free | ✅ Free |

---

## 🆘 Troubleshooting

### Build Fails
- Check Node version (needs 20+)
- Verify `pnpm` is being used
- Check build logs for specific errors

### Database Connection Fails
- Verify `DATABASE_URL` is set correctly
- Check database is running and accessible
- Run migrations: `pnpm run db:push`

### App Crashes After Deploy
- Check logs in platform dashboard
- Verify all environment variables are set
- Ensure `PORT` environment variable is used (Render requires port 10000)

### Need Help?
1. Check deployment logs in your platform dashboard
2. Common issues are usually missing environment variables
3. Make sure database migrations ran successfully

---

## 🎉 Post-Deployment

### 1. Test Your Site
- Visit your deployed URL
- Test all pages and forms
- Check image loading
- Test contact form submission

### 2. Connect Custom Domain (Optional)
Both Render and Railway support custom domains:
1. Go to settings in your platform
2. Add custom domain
3. Update DNS records as instructed
4. SSL auto-configured

### 3. Monitor Performance
- Check dashboard for usage stats
- Set up error monitoring (optional)
- Monitor database size (Render free tier has limits)

### 4. Set Up Backups
- Render: Manual database backups available
- Railway: Automated backups available
- Consider periodic exports of critical data

---

## 💰 Cost Estimates

### Render Free Tier
- Web Service: Free (sleeps after 15min inactivity)
- MySQL: Free (limited to 1GB)
- **Total: $0/month**

### Railway
- $5 free credit initially
- ~$5-10/month after credit runs out
- Pay for what you use

### Netlify (Not Applicable)
- Free for static sites
- Cannot deploy your full-stack app without major refactoring
