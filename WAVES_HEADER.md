# Waves Header Component

A full-screen animated header component featuring animated wave patterns and a bouncing arrow indicator. Perfect for portfolio landing pages and creative showcases.

## Features

- **Full-Screen Display**: Takes up 100vw × 100vh
- **Animated Wave Effect**: SVG filter-based wave animation using turbulence
- **Responsive Grid**: 3×3 grid that scales on different devices
- **Animated Arrow**: Bouncing arrow indicator pointing downward
- **Smooth Scroll**: Click anywhere to scroll to content below
- **Text Overlay**: Customizable title and subtitle
- **Mobile Optimized**: Scales gracefully on all screen sizes

## Usage

### Basic Implementation

```jsx
import { WavesHeader } from '@/app/components';

export default function Page() {
  return (
    <WavesHeader
      title="Your Name"
      subtitle="Creative Portfolio"
    />
  );
}
```

### With Scroll Functionality

```jsx
'use client';

import { WavesHeader } from '@/app/components';

export default function Page() {
  const scrollToContent = () => {
    const content = document.getElementById('content');
    if (content) {
      content.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div onClick={scrollToContent}>
        <WavesHeader
          title="Flow Forward Design"
          subtitle="Creative Portfolio & Design Showcase"
        />
      </div>

      <div id="content">
        {/* Your content here */}
      </div>
    </>
  );
}
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `title` | string | No | undefined | Main heading text |
| `subtitle` | string | No | undefined | Subtitle text below heading |

## Styling

All styles are defined in `app/globals.css` under the `.waves-*` class names.

### Main Classes

- `.waves-header` - Full-screen container
- `.waves-wrap` - Grid container for wave tiles
- `.waves-inner` - Individual wave tile
- `.waves-filtered` - Filter wrapper for animation
- `.waves-frame` - Primary gradient pattern
- `.waves-clouds` - Secondary overlay pattern
- `.waves-content` - Text overlay container
- `.waves-arrow` - Animated arrow indicator

### Responsive Breakpoints

```css
/* Desktop: 900×900 grid */
.waves-wrap {
  width: 900px;
  height: 900px;
  grid-template-columns: repeat(3, 180px);
  grid-template-rows: repeat(3, 180px);
}

/* Tablet: 600×600 grid */
@media (max-width: 992px) {
  .waves-wrap {
    width: 600px;
    height: 600px;
    grid-template-columns: repeat(3, 120px);
    grid-template-rows: repeat(3, 120px);
  }
}

/* Mobile: 300×300 grid */
@media (max-width: 576px) {
  .waves-wrap {
    width: 300px;
    height: 300px;
    grid-template-columns: repeat(3, 60px);
    grid-template-rows: repeat(3, 60px);
  }
}
```

## Customization

### Change Colors

Edit the gradient colors in `app/globals.css`:

```css
.waves-frame {
  background: repeating-linear-gradient(
    -12deg,
    #c0cdd7 0px,      /* Light blue-gray */
    #e8140f 150px,    /* Red */
    #c7bea5 200px,    /* Beige */
    #5c51fd 400px,    /* Purple */
    #05419f 500px,    /* Dark blue */
    /* ... more colors */
  );
}
```

Replace these hex colors with your brand colors.

### Change Background

Modify the radial gradient:

```css
.waves-header {
  background: radial-gradient(circle at center, #fff 700px, #c0cdd7);
  /* Or solid color: */
  background: #000;
}
```

### Customize Text Style

```css
.waves-title {
  font-size: 4rem;
  font-weight: bold;
  color: white;
  /* Add your custom styles */
  font-family: 'Your Font', sans-serif;
  letter-spacing: 2px;
}

.waves-subtitle {
  font-size: 1.5rem;
  opacity: 0.9;
  /* Add your custom styles */
}
```

### Adjust Animation Speed

Change the animation speed in `WavesHeader.js`:

```jsx
function freqAnimation() {
  let bfx = 0.005;
  let bfy = 0.07;
  frames += 2;  // Change this value (higher = faster)
  // ...
}
```

### Modify Arrow Animation

Edit the bounce animation in `globals.css`:

```css
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  40% {
    transform: translateX(-50%) translateY(-10px); /* Bounce height */
  }
  60% {
    transform: translateX(-50%) translateY(-5px);
  }
}

.waves-arrow {
  animation: bounce 2s infinite; /* Change duration (2s) */
}
```

## How It Works

### SVG Filter Animation

The wave effect uses an SVG `feTurbulence` filter that's animated via JavaScript:

1. **Filter Setup**: SVG filter with turbulence and displacement
2. **RequestAnimationFrame**: Smooth 60fps animation loop
3. **Frequency Changes**: BaseFrequency oscillates using sin/cos
4. **Applied to Grid**: Filter applied to 9 tiles with different scales

### Grid Layout

The 3×3 grid creates visual interest:
- Each tile has a different scale transformation
- Even tiles are flipped horizontally
- Every 3rd tile is flipped both horizontally and vertically
- Creates a kaleidoscope-like effect

## Performance

- **Efficient Animation**: Uses `requestAnimationFrame` for smooth 60fps
- **Hardware Accelerated**: SVG filters use GPU when available
- **Cleanup**: Animation stops when component unmounts
- **Mobile Optimized**: Smaller grid on mobile devices reduces load

## Browser Support

- ✅ Chrome/Edge 88+
- ✅ Firefox 78+
- ✅ Safari 14+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

SVG filters are widely supported. Older browsers may show static pattern without animation.

## Examples

### Portfolio Landing

```jsx
'use client';

import { WavesHeader } from '@/app/components';

export default function Portfolio() {
  return (
    <>
      <WavesHeader
        title="Jane Doe"
        subtitle="Designer & Creative Developer"
      />
      
      <section id="work" className="container py-5">
        {/* Portfolio content */}
      </section>
    </>
  );
}
```

### Agency Hero

```jsx
<WavesHeader
  title="Creative Agency"
  subtitle="We Build Digital Experiences"
/>
```

### Personal Brand

```jsx
<WavesHeader
  title="Your Name"
  subtitle="Photographer • Artist • Storyteller"
/>
```

### Minimal (No Text)

```jsx
<WavesHeader />
```

## Accessibility

Current implementation includes:
- ✅ Semantic HTML structure
- ✅ Keyboard navigation (arrow is clickable)
- ✅ Smooth scroll behavior

### Improvements You Can Add

1. **Skip Link**: Add a skip-to-content link
2. **Reduced Motion**: Respect `prefers-reduced-motion`
3. **ARIA Labels**: Add labels to interactive elements

Example reduced motion support:

```css
@media (prefers-reduced-motion: reduce) {
  .waves-arrow {
    animation: none;
  }
}
```

## Troubleshooting

### Animation not working

- Ensure `'use client'` is at the top of the component file
- Check browser console for JavaScript errors
- Verify `requestAnimationFrame` is supported

### Grid looks wrong on mobile

- Check that responsive styles in `globals.css` are loaded
- Test in browser dev tools responsive mode
- Verify viewport meta tag in layout

### Text not visible

- Check text color contrast against background
- Adjust `text-shadow` for better readability
- Consider adding a semi-transparent overlay

### Performance issues

- Reduce grid size on mobile (already implemented)
- Lower animation frame rate by increasing `frames += 2` to `frames += 4`
- Reduce number of gradient stops in `.waves-frame`

## Tips

1. **High Contrast**: Ensure title/subtitle are readable against the animated background
2. **Short Text**: Keep title concise for better visual impact
3. **Test on Device**: Always test animation on actual mobile devices
4. **Loading State**: Consider adding a loading state for slower connections
5. **Print Styles**: Hide or simplify for print stylesheets

## Advanced: Custom Grid Sizes

Want a different grid layout? Modify `WavesHeader.js`:

```jsx
<div className="waves-wrap">
  {[...Array(16)].map((_, i) => (  /* Change 9 to 16 for 4×4 */
    <div key={i} className="waves-inner">
      {/* ... */}
    </div>
  ))}
</div>
```

Then update CSS grid:

```css
.waves-wrap {
  grid-template-columns: repeat(4, 180px);  /* 4 columns */
  grid-template-rows: repeat(4, 180px);      /* 4 rows */
}
```

## Credits

Original wave animation technique adapted from CodePen. Repurposed for React/Next.js with added features:
- Full-screen layout
- Animated scroll indicator
- Responsive grid system
- Text overlay
- Smooth scroll integration
