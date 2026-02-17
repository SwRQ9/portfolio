# Quick Reference

## 🚀 Start Here

### Access Your Portfolio
- **Local:** http://localhost:3000
- **Prod:** https://yourdomain.vercel.app (after deployment)

### Dev Commands
```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm start        # Run production locally
vercel           # Deploy to Vercel
```

## ✏️ Edit Content

### Portfolio Data
**File:** `src/data/portfolio.ts`

```typescript
// Update projects
projects[0].title = "Your Project";
projects[0].links.github = "https://github.com/...";

// Update skills
skills[0].skills = ["Skill1", "Skill2"];

// Update services
services[0].title = "Your Service";
```

### Personal Info
- **Header/Footer:** `src/components/layout/header.tsx`, `footer.tsx`
- **Email:** `src/components/sections/contact.tsx`
- **GitHub:** `src/components/layout/header.tsx` line 30

### Website Settings
- **Title/SEO:** `src/app/layout.tsx`
- **Colors:** `tailwind.config.ts`
- **Animations:** `src/app/globals.css`

## 🎨 Common Customizations

### Change Primary Color
In `tailwind.config.ts`:
```typescript
colors: {
  primary: '#your-color'
}
```

### Update Hero Title
In `src/components/sections/hero.tsx`:
```typescript
<h1>Your Title Here</h1>
```

### Add New Project
In `src/data/portfolio.ts`:
```typescript
{
  id: 'new-project',
  title: 'Project Name',
  description: 'Description',
  // ... rest of fields
}
```

## 📱 Responsive Classes

```
sm:   640px     md:   768px
lg:  1024px    xl:  1280px
```

## 🌓 Dark Mode

Add dark mode styles:
```typescript
className="bg-white dark:bg-gray-950"
```

## 🚀 Deploy Steps

1. Push to GitHub
2. Go to vercel.com/new
3. Import GitHub repo
4. Click Deploy
5. Add custom domain (optional)

## 📞 Important Files

| File | Purpose |
|------|---------|
| `src/data/portfolio.ts` | All content |
| `src/app/page.tsx` | Main page structure |
| `src/components/sections/` | Page sections |
| `tailwind.config.ts` | Styling config |
| `package.json` | Dependencies |
| `next.config.ts` | Build optimization |

## 🔗 Quick Links

- Local Dev: http://localhost:3000
- GitHub: https://github.com/SwRQ9
- Vercel: https://vercel.com
- Next.js: https://nextjs.org/docs
- Tailwind: https://tailwindcss.com

## 💡 Tips

1. Always run `npm run build` before deploying
2. Use `npm run type-check` to catch errors early
3. Test dark mode toggle before deploying
4. Test on mobile before deploying
5. Use descriptive commit messages

## 🆘 Quick Help

**Dark mode not working?**
- Clear cache: Ctrl+Shift+Delete
- Check HTML has `class="dark"`
- Verify `next-themes` provider in layout

**Styles not applying?**
- Restart dev server: Ctrl+C then `npm run dev`
- Check Tailwind class syntax
- Rebuild: `npm run build`

**Build failing?**
- Run `npm run type-check` for TS errors
- Remove node_modules: `rm -rf node_modules package-lock.json`
- Reinstall: `npm install`

---

For detailed guides, see:
- README.md - Main documentation
- DEPLOYMENT.md - Deployment guide
- DEVELOPMENT.md - Dev guide
