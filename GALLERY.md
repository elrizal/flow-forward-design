# Gallery Component Documentation

The Gallery component provides an interactive, responsive image gallery with modal popups featuring product details and shop links.

## Features

- **Responsive Grid**: 4 columns on desktop, 2 columns on mobile
- **Hover Effects**: Smooth overlay animation with title and CTA button
- **Modal Popups**: Click to view detailed information
- **Two-Column Modal Layout**: Image on left, details on right
- **Shop Links**: Direct links to Etsy and Threadless
- **Keyboard Support**: ESC key to close modal
- **Click-Outside**: Click overlay to close modal
- **Mobile Optimized**: Stacks vertically on smaller screens

## Usage

### Basic Implementation

```jsx
import { Gallery } from '@/app/components';

const galleryItems = [
  {
    title: "Product Name",
    image: "https://example.com/image.jpg",
    description: "Detailed product description...",
    etsyLink: "https://www.etsy.com/shop/yourshop",
    threadlessLink: "https://www.threadless.com/@yourshop"
  },
  // More items...
];

export default function Page() {
  return (
    <div className="container py-5">
      <h2>My Gallery</h2>
      <Gallery items={galleryItems} />
    </div>
  );
}
```

### Gallery Item Properties

Each item in the `items` array should have:

| Property | Type | Description |
|----------|------|-------------|
| `title` | string | Product/artwork title |
| `image` | string | Image URL (absolute or relative) |
| `description` | string | Detailed description shown in modal |
| `etsyLink` | string | URL to Etsy shop/product |
| `threadlessLink` | string | URL to Threadless shop/product |

## Component Structure

### Gallery Component

**Location**: `app/components/Gallery.js`

The main gallery component handles:
- Grid layout rendering
- Modal state management
- Item selection

```jsx
<Gallery items={galleryItems} />
```

### Modal Component

**Location**: `app/components/Modal.js`

Reusable modal component with:
- Overlay backdrop
- Close button
- ESC key handler
- Click-outside handler
- Body scroll lock when open

```jsx
<Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
  <div>Modal content</div>
</Modal>
```

## Styling

All gallery and modal styles are defined in `app/globals.css`:

### Gallery Classes

- `.gallery` - Grid container (2 cols mobile, 4 cols desktop)
- `.gallery-item` - Individual gallery item with aspect ratio
- `.gallery-image` - Image with object-fit cover
- `.gallery-overlay` - Hover overlay with gradient
- `.gallery-title` - Title text in overlay

### Modal Classes

- `.modal-overlay` - Full-screen backdrop
- `.modal-content` - Modal container
- `.modal-close` - Close button (X)
- `.modal-body` - Content area with padding

## Customization

### Change Grid Layout

Edit the `.gallery` class in `globals.css`:

```css
.gallery {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Mobile */
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .gallery {
    grid-template-columns: repeat(3, 1fr); /* Tablet - change to 3 columns */
  }
}

@media (min-width: 992px) {
  .gallery {
    grid-template-columns: repeat(4, 1fr); /* Desktop */
  }
}
```

### Customize Hover Effect

Modify `.gallery-overlay` in `globals.css`:

```css
.gallery-overlay {
  /* Change slide direction */
  transform: translateY(100%); /* From bottom */
  /* Or: transform: translateX(-100%); for slide from left */
  
  /* Change background */
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  
  /* Adjust transition speed */
  transition: transform 0.3s ease;
}
```

### Add Additional Shop Links

Update the `Gallery.js` modal content:

```jsx
<div className="d-flex flex-column gap-3">
  <div>
    <h4 className="mb-2">Shop on Etsy</h4>
    <a href={selectedItem.etsyLink} target="_blank" rel="noopener noreferrer" className="link-primary">
      View on Etsy →
    </a>
  </div>

  <div>
    <h4 className="mb-2">Shop on Threadless</h4>
    <a href={selectedItem.threadlessLink} target="_blank" rel="noopener noreferrer" className="link-primary">
      View on Threadless →
    </a>
  </div>

  {/* Add new shop link */}
  <div>
    <h4 className="mb-2">Shop on Redbubble</h4>
    <a href={selectedItem.redbubbleLink} target="_blank" rel="noopener noreferrer" className="link-primary">
      View on Redbubble →
    </a>
  </div>
</div>
```

### Change Image Aspect Ratio

Update `.gallery-item` in `globals.css`:

```css
.gallery-item {
  aspect-ratio: 1; /* Square - default */
  /* Or: aspect-ratio: 4/3; for landscape */
  /* Or: aspect-ratio: 3/4; for portrait */
}
```

## Using Your Own Images

### Option 1: Local Images

Place images in the `public` directory:

```
public/
  images/
    product-1.jpg
    product-2.jpg
```

Reference them in your gallery items:

```jsx
const galleryItems = [
  {
    title: "My Product",
    image: "/images/product-1.jpg", // Relative path
    description: "...",
    etsyLink: "...",
    threadlessLink: "..."
  }
];
```

### Option 2: External URLs

Use full URLs from image hosting services:

```jsx
const galleryItems = [
  {
    title: "My Product",
    image: "https://your-cdn.com/images/product.jpg",
    description: "...",
    etsyLink: "...",
    threadlessLink: "..."
  }
];
```

### Option 3: Next.js Image Optimization

For better performance, use Next.js Image component. Update `Gallery.js`:

```jsx
import Image from 'next/image';

// In the gallery item:
<Image
  src={item.image}
  alt={item.title}
  fill
  className="gallery-image"
  style={{ objectFit: 'cover' }}
/>
```

Note: For static export (`output: 'export'`), you need `unoptimized: true` in `next.config.js` (already configured).

## Example: E-commerce Gallery

```jsx
'use client';

import { Gallery } from '@/app/components';

const products = [
  {
    title: "Vintage Sunset Poster",
    image: "/images/products/sunset-poster.jpg",
    description: "A beautiful vintage-style sunset poster featuring warm colors and retro typography. Available in multiple sizes. Printed on high-quality paper with archival inks.",
    etsyLink: "https://www.etsy.com/listing/12345/sunset-poster",
    threadlessLink: "https://www.threadless.com/product/12345"
  },
  {
    title: "Abstract Wave Art",
    image: "/images/products/wave-art.jpg",
    description: "Modern abstract art inspired by ocean waves. Perfect for coastal homes or modern office spaces. Features calming blue tones.",
    etsyLink: "https://www.etsy.com/listing/67890/wave-art",
    threadlessLink: "https://www.threadless.com/product/67890"
  }
];

export default function ShopPage() {
  return (
    <main>
      <section className="bg-primary text-white py-5">
        <div className="container text-center">
          <h1 className="mb-3">Art Shop</h1>
          <p>Browse our collection of prints and designs</p>
        </div>
      </section>

      <section className="container py-5">
        <Gallery items={products} />
      </section>
    </main>
  );
}
```

## Accessibility

The Gallery component includes:

- ✅ Semantic HTML structure
- ✅ Alt text for images
- ✅ Keyboard navigation (ESC to close)
- ✅ Focus management
- ✅ ARIA labels on close button
- ✅ External link indicators (`rel="noopener noreferrer"`)

### Improvements You Can Add

1. **Focus trap** in modal
2. **ARIA live regions** for screen readers
3. **Focus first element** when modal opens
4. **Return focus** to trigger when modal closes

## Performance Tips

1. **Lazy load images**: Images load as you scroll
2. **Optimize image sizes**: Use appropriate dimensions (500x500 works well)
3. **Use CDN**: Host images on a CDN for faster loading
4. **WebP format**: Use modern image formats for better compression
5. **Placeholder images**: Add blur placeholders during load

## Troubleshooting

### Modal doesn't close

- Ensure `'use client'` directive is at the top of the file using Gallery
- Check that Modal component has the client directive

### Images not showing

- Verify image URLs are correct and accessible
- Check browser console for 404 errors
- Ensure `next.config.js` has `images: { unoptimized: true }` for static export

### Layout breaks on mobile

- Check that parent container has proper responsive classes
- Verify CSS grid breakpoints in `globals.css`
- Test with browser dev tools responsive mode

### Gallery items not clickable

- Ensure Gallery component is client-side (`'use client'`)
- Check that button onClick handlers are properly bound
- Verify no z-index conflicts with other elements

## Browser Support

- ✅ Chrome/Edge 88+
- ✅ Firefox 78+
- ✅ Safari 14+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

CSS Grid and modern flexbox are used, which are widely supported in all modern browsers.
