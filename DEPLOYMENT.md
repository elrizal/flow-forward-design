# Deployment Guide

This guide covers deploying your Next.js application to various platforms via GitHub.

## Prerequisites

- Git repository on GitHub
- Node.js 18+ installed locally
- Application builds successfully (`npm run build`)

## Deploy to Vercel (Recommended)

Vercel is the fastest and easiest way to deploy Next.js applications.

### Automatic Deployment

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will automatically detect Next.js settings
   - Click "Deploy"

3. **Automatic Deployments**
   - Every push to `main` triggers a production deployment
   - Pull requests create preview deployments automatically

### Custom Domain

1. Go to your project settings on Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions

## Deploy to Netlify

### Method 1: Netlify Git Integration

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub account
   - Select your repository

3. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `out`
   - Click "Deploy site"

### Method 2: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize
netlify init

# Deploy
netlify deploy --prod
```

## Deploy to GitHub Pages

The repository includes a GitHub Actions workflow for automatic deployment to GitHub Pages.

### Setup

1. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: GitHub Actions

2. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

3. **Automatic Deployment**
   - The workflow in `.github/workflows/deploy.yml` will run automatically
   - Your site will be available at `https://username.github.io/repository-name`

### Custom Domain for GitHub Pages

1. Add a `CNAME` file to the `public` directory:
   ```
   yourdomain.com
   ```

2. Configure DNS records:
   - Type: `A` or `CNAME`
   - Point to GitHub Pages IP addresses or `username.github.io`

3. Enable HTTPS in repository settings

## Deploy to Railway

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Create Railway Project**
   - Go to [railway.app](https://railway.app)
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repository

3. **Configure**
   - Railway will auto-detect Next.js
   - No additional configuration needed
   - Click "Deploy"

## Deploy to Render

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Create Web Service**
   - Go to [render.com](https://render.com)
   - Click "New +" → "Web Service"
   - Connect your GitHub repository

3. **Configure**
   - Build Command: `npm install && npm run build`
   - Start Command: `npm start`
   - Click "Create Web Service"

## Environment Variables

### Setting Environment Variables

#### Vercel
```bash
# Via CLI
vercel env add NEXT_PUBLIC_API_URL production

# Or in dashboard:
# Project Settings → Environment Variables
```

#### Netlify
```bash
# Via CLI
netlify env:set NEXT_PUBLIC_API_URL "https://api.example.com"

# Or in dashboard:
# Site Settings → Environment Variables
```

#### GitHub Actions
Add secrets in: Repository Settings → Secrets and variables → Actions

```yaml
# In your workflow file
env:
  NEXT_PUBLIC_API_URL: ${{ secrets.NEXT_PUBLIC_API_URL }}
```

### Required Variables

Create a `.env.local` file locally (not committed):
```bash
NEXT_PUBLIC_API_URL=https://api.example.com
```

See `.env.example` for the template.

## Build Optimization

### Reduce Build Size

1. **Analyze Bundle**
   ```bash
   npm install @next/bundle-analyzer

   # Update next.config.js
   const withBundleAnalyzer = require('@next/bundle-analyzer')({
     enabled: process.env.ANALYZE === 'true',
   })

   module.exports = withBundleAnalyzer(nextConfig)

   # Run analysis
   ANALYZE=true npm run build
   ```

2. **Remove Unused CSS**
   - Already done! Pure CSS utilities only

3. **Optimize Images**
   - Use Next.js `Image` component
   - Configure `next.config.js` image domains

### Performance Tips

- Enable static export (`output: 'export'` in next.config.js) ✅ Already configured
- Use `loading="lazy"` for images
- Minimize JavaScript bundle size
- Enable compression on your hosting platform

## Continuous Deployment

### Vercel (Automatic)
- Production: pushes to `main`
- Preview: any pull request
- No configuration needed

### Netlify (Automatic)
- Production: pushes to `main`
- Deploy previews: pull requests
- Configure in `netlify.toml` if needed

### GitHub Actions (Automatic)
- Configured in `.github/workflows/deploy.yml`
- Runs on push to `main`
- Can add PR preview workflow

## Troubleshooting

### Build Fails

1. **Check Node Version**
   ```bash
   node --version  # Should be 18+
   ```

2. **Clear Cache**
   ```bash
   rm -rf .next node_modules
   npm install
   npm run build
   ```

3. **Check Build Logs**
   - Vercel: Deployments → View logs
   - Netlify: Deploys → View logs
   - GitHub Actions: Actions tab → Failed workflow

### Environment Variables Not Working

- Ensure variables start with `NEXT_PUBLIC_` for client-side access
- Rebuild after adding/changing variables
- Check variable names match exactly (case-sensitive)

### Static Export Issues

- Don't use `getServerSideProps` (use `generateStaticParams` instead)
- Don't use dynamic API routes
- Don't use `next/image` optimization (use `unoptimized: true`) ✅ Already configured

### Custom Domain Not Working

1. Check DNS propagation (can take 24-48 hours)
2. Verify CNAME/A records are correct
3. Enable SSL/HTTPS
4. Clear browser cache

## Rollback Deployments

### Vercel
- Go to Deployments
- Find previous successful deployment
- Click "Promote to Production"

### Netlify
- Go to Deploys
- Find previous deploy
- Click "Publish deploy"

### GitHub Pages
```bash
git revert HEAD
git push origin main
```

## Monitoring

### Vercel Analytics
- Free analytics included
- Enable in Project Settings → Analytics

### Netlify Analytics
- Paid feature
- Enable in Site Settings → Analytics

### Custom Analytics
Add to `app/layout.js`:
```jsx
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script src="https://analytics.example.com/script.js" />
      </body>
    </html>
  );
}
```

## Support

- **Vercel**: [vercel.com/support](https://vercel.com/support)
- **Netlify**: [netlify.com/support](https://netlify.com/support)
- **Next.js**: [nextjs.org/docs](https://nextjs.org/docs)
- **GitHub Pages**: [docs.github.com/pages](https://docs.github.com/pages)
