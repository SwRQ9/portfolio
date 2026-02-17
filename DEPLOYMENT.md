# Deployment Guide

## Quick Deployment to Vercel

### Method 1: Vercel CLI (Recommended for Beginners)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow prompts** and confirm settings

### Method 2: GitHub Integration (Recommended)

1. **Push code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to https://vercel.com/dashboard
   - Click "Import Project"
   - Select "Import Git Repository"
   - Paste your GitHub repo URL
   - Click "Import"

3. **Configure & Deploy**
   - Framework: Next.js (auto-detected)
   - Environment: Leave defaults
   - Click "Deploy"

4. **Wait for deployment** (~3-5 minutes)

### Method 3: Drag & Drop (Not Recommended for Production)

1. Visit https://vercel.com/import
2. Drag and drop your project folder
3. Wait for deployment

## Environment Variables

### Local Development

1. Create `.env.local`:
   ```bash
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   NEXT_PUBLIC_CONTACT_EMAIL=contact@example.com
   ```

2. Restart dev server: `npm run dev`

### Production (Vercel)

1. Go to Vercel Project Settings
2. Navigate to "Environment Variables"
3. Add each variable:
   ```
   NEXT_PUBLIC_SITE_URL = https://yourdomain.vercel.app
   NEXT_PUBLIC_CONTACT_EMAIL = contact@example.com
   ```
4. Redeploy after adding variables

## Custom Domain Setup

1. **Buy Domain**
   - Namecheap, GoDaddy, Google Domains, etc.

2. **Connect to Vercel**
   - Vercel Dashboard → Settings → Domains
   - Click "Add" and enter your domain
   - Choose one of the connection methods

3. **Update DNS** (if not using Vercel Nameservers)
   - Go to your domain registrar's DNS settings
   - Add the records Vercel provides
   - Wait 24-48 hours for propagation

4. **Verify SSL**
   - Wait for auto SSL certificate (1-2 minutes)
   - Test: https://yourdomain.com

## Optimization Tips

### Image Optimization
- Use Next.js Image component for all images
- Provide `alt` text for accessibility
- Specify `width` and `height` for best performance

### Caching Strategy
- Static pages auto-cached by Vercel
- ISR (Incremental Static Regeneration) for updated content
- Configure cache headers in `next.config.ts`

### Monitoring Performance
- Use Vercel Analytics (free)
- Check Web Vitals in Vercel Dashboard
- Test with Lighthouse: Ctrl+Shift+J → Lighthouse

## Continuous Deployment

Your portfolio auto-deploys when you push to GitHub:

```bash
# Make changes
git add .
git commit -m "Update portfolio content"
git push origin main
```

Vercel automatically builds and deploys!

## Troubleshooting

### Build Fails
**Error**: "Build failed"
- Check build logs in Vercel Dashboard
- Ensure all dependencies are listed in package.json
- Verify TypeScript types: `npm run type-check`

### Deployment Takes Too Long
**Error**: "Deployment timeout"
- Check for large images or dependencies
- Optimize bundle size: `npm run build`
- Remove unused packages

### Environment Variables Not Working
**Error**: "Undefined variable"
- Confirm variable is added in Vercel settings
- Prefix client variables with `NEXT_PUBLIC_`
- Redeploy after adding variables
- Clear browser cache

### CORS Issues
**Error**: "CORS error when fetching..."
- Add proper CORS headers in `next.config.ts`
- Use API routes instead of direct external calls
- Configure middleware for proxy requests

## Rollback Deployment

1. Go to Vercel Dashboard
2. Click project name
3. Go to "Deployments"
4. Find previous working version
5. Click "..." → "Promote to Production"

## Monitoring & Analytics

### Enable Vercel Analytics
1. Vercel Dashboard → Settings → Analytics
2. Enable "Web Analytics"
3. Add Vercel Snippet (auto-added)

### View Performance Metrics
1. Dashboard → "Analytics"
2. Check:
   - Page views
   - Top pages
   - Response times
   - Error rate

## Security Checklist

- ✅ Remove sensitive data from code
- ✅ Use environment variables for secrets
- ✅ Enable HTTPS (automatic)
- ✅ Set security headers in `next.config.ts`
- ✅ Keep dependencies updated: `npm outdated`
- ✅ Enable Vercel Security Headers

## Update Dependencies

```bash
# Check for updates
npm outdated

# Update all packages
npm update

# Update specific package
npm install package-name@latest

# Update major versions (breaking changes)
npm install next@latest
```

## Maintenance

### Weekly
- Check Vercel Dashboard for errors
- Monitor performance metrics

### Monthly
- Run `npm outdated` to check for updates
- Review analytics and user feedback
- Update dependencies if patches available

### Quarterly
- Test all features and links
- Update project description
- Review security settings

## Support & Resources

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Vercel Community**: https://github.com/vercel/vercel/discussions
- **Support**: https://vercel.com/support

---

Your portfolio is now production-ready! 🚀
