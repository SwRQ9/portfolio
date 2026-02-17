# Development Guide

## Project Overview

This is a **Next.js 14+ portfolio** built with **TypeScript**, **Tailwind CSS**, and **Framer Motion**. The project is structured for easy customization and scalability.

## File Organization

### Core Files
- `src/app/layout.tsx` - Root layout with Providers
- `src/app/page.tsx` - Main page (imports all sections)
- `src/app/globals.css` - Global styles and animations

### Components Organization

#### Layout Components (`src/components/layout/`)
- **header.tsx** - Sticky navigation with theme toggle
- **footer.tsx** - Footer with social links
- **providers.tsx** - next-themes provider setup

#### Section Components (`src/components/sections/`)
- **hero.tsx** - Hero section with CTAs
- **credibility-strip.tsx** - Experience showcase
- **projects.tsx** - Projects grid with modals
- **services.tsx** - Services listing
- **skills.tsx** - Skills by category
- **about.tsx** - About section
- **contact.tsx** - Contact form and info

#### UI Components (`src/components/ui/`)
- **theme-toggle.tsx** - Dark mode toggle button

### Data Layer
- `src/data/portfolio.ts` - All portfolio content
- `src/types/index.ts` - TypeScript type definitions

## Customization Guide

### 1. Update Content

**Edit `src/data/portfolio.ts`:**

```typescript
// Update projects
export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Your Project Title',
    description: 'Short description',
    // ... more fields
  }
];

// Update skills
export const skills: Skill[] = [
  {
    category: 'Frontend',
    skills: ['Skill1', 'Skill2']
  }
];

// Update services
export const services = [
  {
    title: 'Service Name',
    description: 'Service description'
  }
];
```

### 2. Update Personal Info

**Header & Footer (`src/components/layout/header.tsx` & `footer.tsx`):**
- Update GitHub/LinkedIn URLs
- Change email address
- Modify social links

**Layout (`src/app/layout.tsx`):**
```typescript
export const metadata: Metadata = {
  title: 'Your Name - Your Title',
  description: 'Your description',
};
```

### 3. Modify Colors & Styling

**Tailwind Config (`tailwind.config.ts`):**
```typescript
theme: {
  extend: {
    colors: {
      // Add custom colors
      primary: '#your-color'
    },
    // Add custom utilities
  }
}
```

**Global Styles (`src/app/globals.css`):**
- Add custom animations
- Modify color schemes
- Add utility classes

### 4. Update Components

Each section is independent and can be modified:

```typescript
// Edit component styling
export function HeroSection() {
  return (
    <section className="...">
      {/* Your content */}
    </section>
  );
}
```

### 5. Add New Sections

1. Create new component in `src/components/sections/`
2. Add content and styling
3. Import in `src/app/page.tsx`
4. Add to layout

Example:
```typescript
// src/components/sections/testimonials.tsx
export function TestimonialsSection() {
  return (
    <section id="testimonials">
      {/* Your testimonials */}
    </section>
  );
}

// src/app/page.tsx
import { TestimonialsSection } from "@/components/sections/testimonials";

export default function Home() {
  return (
    <>
      {/* ... other sections ... */}
      <TestimonialsSection />
    </>
  );
}
```

## Development Workflow

### Starting Development
```bash
npm run dev
```
- Opens on http://localhost:3000
- Hot reload on file changes
- Browser DevTools ready

### Building for Production
```bash
npm run build
npm start
```

### Type Checking
```bash
npm run type-check
```

### Linting
```bash
npm run lint
```

## Component Architecture

### Sections Pattern
Each section follows this pattern:

```typescript
'use client'; // Client component for interactivity

import { motion } from 'framer-motion';

export function SectionName() {
  return (
    <section id="section-id" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Content */}
        </motion.div>
      </div>
    </section>
  );
}
```

### Animation Patterns

**Fade In on Scroll:**
```typescript
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  {/* Content */}
</motion.div>
```

**Slide In on Scroll:**
```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.1 }}
  viewport={{ once: true }}
>
  {/* Content */}
</motion.div>
```

## Responsive Design

### Tailwind Breakpoints
- `sm` - 640px
- `md` - 768px
- `lg` - 1024px
- `xl` - 1280px
- `2xl` - 1536px

### Mobile-First Approach
```typescript
className="
  text-sm md:text-base lg:text-lg    // Font sizes
  px-4 sm:px-6 lg:px-8               // Padding
  grid grid-cols-1 md:grid-cols-2    // Layout
"
```

## Dark Mode

### How It Works
- Uses `next-themes` for theme management
- `class` strategy (uses `dark` class on `<html>`)
- Default theme: dark
- Automatic system detection disabled

### Adding Dark Mode Styles
```typescript
className="
  bg-white dark:bg-gray-950
  text-gray-900 dark:text-white
  border-gray-200 dark:border-gray-800
"
```

## Performance Tips

### 1. Image Optimization
```typescript
import Image from 'next/image';

<Image
  src="/image.jpg"
  alt="Description"
  width={1200}
  height={600}
  priority={false}
/>
```

### 2. Code Splitting
- Dynamic imports for heavy components
```typescript
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'));
```

### 3. Memoization
```typescript
import { memo } from 'react';

const MemoizedComponent = memo(function Component() {
  return <div>Content</div>;
});
```

### 4. Remove Unused Dependencies
```bash
npm audit
npm prune
```

## Testing

### Manual Testing Checklist
- [ ] All links work
- [ ] Forms submit properly
- [ ] Animations smooth on all devices
- [ ] Dark mode toggles correctly
- [ ] Mobile responsive
- [ ] All images load

### Browser Testing
- Chrome/Chromium
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## Debugging

### Console Errors
```bash
# Check browser console for errors (F12)
# Look for red errors and warnings
```

### React DevTools
1. Install React Developer Tools extension
2. Open DevTools (F12)
3. Go to "Components" tab
4. Inspect component hierarchy

### Network Tab
1. Open DevTools (F12)
2. Go to "Network" tab
3. Check for failed requests
4. Monitor file sizes and load times

## Common Issues & Solutions

### Hydration Mismatch
**Problem**: Component renders differently on server vs client
```typescript
// Solution: Use useEffect to sync
'use client';
import { useEffect, useState } from 'react';

export function Component() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return <div>{/* Hydrated content */}</div>;
}
```

### Styling Issues
- Verify Tailwind class names
- Check dark mode class on `<html>`
- Clear `.next` and rebuild: `npm run build`

### Build Errors
- Check TypeScript: `npm run type-check`
- Clear cache: `rm -rf .next node_modules && npm install`
- Review error messages in build output

## Git Workflow

### Setup
```bash
git config user.name "Your Name"
git config user.email "your@email.com"
```

### Daily Workflow
```bash
# Create branch
git checkout -b feature/description

# Make changes and commit
git add .
git commit -m "Meaningful message"

# Push to remote
git push origin feature/description

# Create Pull Request (if using GitHub)
```

## Deployment Checklist

Before deploying:
- [ ] Run `npm run build` locally
- [ ] Run `npm run type-check` for TypeScript errors
- [ ] Run `npm run lint` for code quality
- [ ] Test on mobile devices
- [ ] Test dark mode
- [ ] Test all links and forms
- [ ] Update environment variables
- [ ] Review SEO metadata

## Resources

### Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [TypeScript](https://www.typescriptlang.org/docs/)

### Tools
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [React Developer Tools](https://react-devtools-tutorial.vercel.app/)

### Learning Resources
- [Next.js Tutorial](https://nextjs.org/learn)
- [Tailwind CSS Tutorial](https://tailwindcss.com/docs/installation)
- [React Fundamentals](https://react.dev)

---

Happy developing! 🚀
