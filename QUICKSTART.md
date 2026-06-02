# Quick Start Guide

Get your Flow Forward Design application up and running in minutes!

## 🚀 Instant Setup

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
# Visit http://localhost:3000
```

That's it! Your application is now running locally.

## 📸 Customize the Gallery

The homepage features a 4-column gallery. Here's how to add your own products:

### Step 1: Add Your Images

Place your images in the `public/images/` directory:

```
public/
  images/
    product-1.jpg
    product-2.jpg
    product-3.jpg
```

### Step 2: Update Gallery Items

Edit `app/page.js` and update the `galleryItems` array:

```jsx
const galleryItems = [
  {
    title: "Your Product Name",
    image: "/images/product-1.jpg",  // Local image path
    description: "A detailed description of your product...",
    etsyLink: "https://www.etsy.com/shop/yourshop/listing/123",
    threadlessLink: "https://www.threadless.com/@yourshop/design/123"
  },
  // Add more items...
];
```

### Step 3: Test It

Refresh your browser - your gallery now displays your products!

## 🎨 Quick Styling Changes

### Change Primary Color

Edit `app/globals.css`:

```css
.bg-primary {
  background-color: #your-color; /* Change this */
}

.text-primary {
  color: #your-color; /* And this */
}

.btn-primary {
  background-color: #your-color; /* And this */
  border-color: #your-color;
}
```

### Update Site Title

Edit `app/layout.js`:

```jsx
export const metadata = {
  title: "Your Site Name",
  description: "Your site description",
};
```

### Change Header Text

Edit `app/page.js`:

```jsx
<header className="text-center mb-5">
  <h1 className="mb-3">Your Site Name</h1>
  <p className="text-muted">
    Your tagline here
  </p>
</header>
```

## 🌐 Deploy to Production

### Option 1: Vercel (Easiest - 2 minutes)

1. Push your code to GitHub:
```bash
git add .
git commit -m "My custom shop"
git push origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"

Done! Your site is live with a URL like `your-site.vercel.app`

### Option 2: Netlify

1. Push to GitHub (same as above)
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect GitHub and select your repo
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `out`
6. Click "Deploy site"

### Option 3: GitHub Pages

Already configured! Just:

1. Push to GitHub
2. Go to Settings → Pages
3. Source: "GitHub Actions"
4. Your site deploys automatically

## 📝 Common Customizations

### Add More Gallery Items

Just add more objects to the `galleryItems` array in `app/page.js`:

```jsx
const galleryItems = [
  { /* item 1 */ },
  { /* item 2 */ },
  { /* item 3 */ },
  { /* item 4 */ },
  { /* Add as many as you want */ },
];
```

### Change Gallery Layout

Want 3 columns instead of 4? Edit `app/globals.css`:

```css
@media (min-width: 768px) {
  .gallery {
    grid-template-columns: repeat(3, 1fr); /* Change 4 to 3 */
  }
}
```

### Add More Shop Links

Edit `app/components/Gallery.js` and add another link section:

```jsx
<div>
  <h4 className="mb-2">Shop on Redbubble</h4>
  <a
    href={selectedItem.redbubbleLink}
    target="_blank"
    rel="noopener noreferrer"
    className="link-primary"
  >
    View on Redbubble →
  </a>
</div>
```

Don't forget to add `redbubbleLink` to your gallery items!

### Remove Example Content

Want to start fresh? Edit `app/page.js`:

```jsx
export default function Home() {
  return (
    <div className="container py-5">
      <header className="text-center mb-5">
        <h1 className="mb-3">Your Site</h1>
        <p className="text-muted">Your description</p>
      </header>

      <section className="mb-5">
        <h2 className="text-center mb-4">Gallery</h2>
        <Gallery items={galleryItems} />
      </section>
    </div>
  );
}
```

This removes all the demo content and keeps just the gallery.

## 🔧 Troubleshooting

### Dev server won't start

```bash
# Clear cache and reinstall
rm -rf .next node_modules
npm install
npm run dev
```

### Images not showing

- Check image path is correct: `/images/your-image.jpg`
- Verify image file exists in `public/images/`
- Check browser console for 404 errors

### Gallery not clickable

Make sure `'use client';` is at the top of `app/page.js`:

```jsx
'use client';

import { Gallery } from './components';
// rest of file...
```

### Build fails

```bash
# Check for syntax errors
npm run build

# If you see errors, fix them and try again
```

## 📚 Next Steps

- **Learn the components**: Read [COMPONENTS.md](./COMPONENTS.md)
- **Understand the gallery**: Check [GALLERY.md](./GALLERY.md)
- **Deploy your site**: See [DEPLOYMENT.md](./DEPLOYMENT.md)
- **Explore utilities**: Review [README.md](./README.md)

## 💡 Pro Tips

1. **Use high-quality images**: Aim for at least 800x800px
2. **Optimize before uploading**: Use tools like TinyPNG
3. **Write good descriptions**: Help customers understand your products
4. **Test on mobile**: Most users will view on phones
5. **Update shop links**: Make sure they point to your actual products

## 🆘 Need Help?

- Check documentation files for detailed guides
- Review example code in `app/page.js`
- Inspect component code in `app/components/`
- Test in browser dev tools (F12)

## 🎉 You're Ready!

You now have:
- ✅ A running development environment
- ✅ An interactive product gallery
- ✅ Direct shop integration
- ✅ Responsive mobile design
- ✅ Easy deployment options

Start customizing and make it yours!
