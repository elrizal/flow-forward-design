# Scroll Animation Components

This project includes two powerful components for scroll-triggered animations and dynamic backgrounds.

## Components

### 1. ScrollReveal

A component that reveals content as the user scrolls down the page with smooth animations.

#### Features

- ✅ Intersection Observer API for performance
- ✅ Customizable delay between elements
- ✅ Multiple animation variants
- ✅ Respects `prefers-reduced-motion`
- ✅ Smooth easing with cubic-bezier

#### Usage

```jsx
import { ScrollReveal } from '@/app/components';

export default function MyPage() {
  return (
    <>
      {/* Basic usage */}
      <ScrollReveal>
        <section>
          <h2>This fades in and slides up</h2>
        </section>
      </ScrollReveal>

      {/* With delay */}
      <ScrollReveal delay={200}>
        <div className="card">
          Appears 200ms after trigger
        </div>
      </ScrollReveal>

      {/* With custom class */}
      <ScrollReveal className="scroll-reveal-left">
        <div>Slides in from left</div>
      </ScrollReveal>
    </>
  );
}
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | node | required | Content to reveal |
| `delay` | number | `0` | Delay in milliseconds |
| `className` | string | `''` | Additional CSS classes |

#### Animation Variants

Add these classes to customize the reveal direction:

```jsx
{/* Default: Slide up from bottom */}
<ScrollReveal>
  <div>Content</div>
</ScrollReveal>

{/* Slide from left */}
<ScrollReveal className="scroll-reveal-left">
  <div>Content</div>
</ScrollReveal>

{/* Slide from right */}
<ScrollReveal className="scroll-reveal-right">
  <div>Content</div>
</ScrollReveal>

{/* Scale from center */}
<ScrollReveal className="scroll-reveal-scale">
  <div>Content</div>
</ScrollReveal>
```

#### Staggered Animations

Create cascading animations with delays:

```jsx
<ScrollReveal delay={0}>
  <div className="card">First</div>
</ScrollReveal>

<ScrollReveal delay={100}>
  <div className="card">Second</div>
</ScrollReveal>

<ScrollReveal delay={200}>
  <div className="card">Third</div>
</ScrollReveal>
```

### 2. CircleBackground

An animated SVG background with floating circles that transition colors as the user scrolls through sections.

#### Features

- ✅ Smooth color transitions between sections
- ✅ Multiple animated SVG circles
- ✅ Floating orbs with blur effects
- ✅ Scroll-reactive positioning
- ✅ Fixed background (doesn't scroll with content)
- ✅ Performance optimized with CSS transforms

#### Usage

```jsx
import { CircleBackground } from '@/app/components';

export default function MyPage() {
  return (
    <>
      {/* Add once at top level */}
      <CircleBackground />

      {/* Mark sections with data-section attribute */}
      <div data-section="0">
        <h1>Section 1</h1>
      </div>

      <div data-section="1">
        <h1>Section 2</h1>
      </div>

      <div data-section="2">
        <h1>Section 3</h1>
      </div>
    </>
  );
}
```

#### How It Works

1. **Sections Detection**: Watches for `[data-section]` elements
2. **Scroll Tracking**: Monitors scroll position and progress
3. **Color Transitions**: Changes circle colors based on active section
4. **Dynamic Movement**: Circles move based on scroll progress

#### Color Palette

The background cycles through these color combinations:

```javascript
[
  { bg: '#1a2332', circle: '#8b2635' },  // Dark blue / Burgundy
  { bg: '#2a3442', circle: '#d4af37' },  // Dark blue light / Gold
  { bg: '#1a2332', circle: '#a53545' },  // Dark blue / Burgundy light
  { bg: '#2a3442', circle: '#f0cb5c' },  // Dark blue light / Gold light
]
```

#### Customization

Edit `CircleBackground.js` to customize colors:

```javascript
const colors = [
  { bg: '#your-bg-color', circle: '#your-circle-color' },
  { bg: '#another-bg', circle: '#another-circle' },
  // Add more sections...
];
```

## Implementation Example

### Complete Page Setup

```jsx
'use client';

import { ScrollReveal, CircleBackground } from '@/app/components';

export default function Portfolio() {
  return (
    <>
      {/* Fixed animated background */}
      <CircleBackground />

      {/* Hero section */}
      <section data-section="0" className="vh-100">
        <h1>Welcome</h1>
      </section>

      {/* Gallery section with reveal */}
      <section data-section="1" className="container py-5">
        <ScrollReveal>
          <h2>My Work</h2>
          <div className="gallery">
            {/* Gallery items */}
          </div>
        </ScrollReveal>
      </section>

      {/* Cards with staggered reveal */}
      <section data-section="2" className="container py-5">
        <ScrollReveal delay={0}>
          <div className="card">Card 1</div>
        </ScrollReveal>
        
        <ScrollReveal delay={150}>
          <div className="card">Card 2</div>
        </ScrollReveal>
        
        <ScrollReveal delay={300}>
          <div className="card">Card 3</div>
        </ScrollReveal>
      </section>

      {/* About section */}
      <section data-section="3" className="container py-5">
        <ScrollReveal className="scroll-reveal-left">
          <h2>About Me</h2>
          <p>Content...</p>
        </ScrollReveal>
      </section>
    </>
  );
}
```

## CSS Customization

### Adjusting Animation Speed

Edit `theme.css`:

```css
.scroll-reveal {
  transition: opacity 1.2s ease,    /* Slower fade */
              transform 1.2s ease;  /* Slower slide */
}
```

### Changing Animation Distance

```css
.scroll-reveal {
  transform: translateY(100px);  /* Slide from further down */
}
```

### Custom Easing

```css
.scroll-reveal {
  transition: opacity 0.8s cubic-bezier(0.34, 1.56, 0.64, 1),  /* Bounce */
              transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

### Adjusting Circle Sizes

Edit `CircleBackground.js`:

```jsx
{/* Make circles larger */}
<circle
  cx="50"
  cy={100 + scrollProgress * -50}
  r="80"  {/* Changed from 60 */}
  fill="url(#circleGradient1)"
/>
```

### Changing Orb Blur

Edit `theme.css`:

```css
.orb {
  filter: blur(100px);  /* More blur (default: 60px) */
}
```

## Performance Tips

### 1. Intersection Observer Threshold

Adjust when animations trigger:

```javascript
const observer = new IntersectionObserver(
  (entries) => { /* ... */ },
  {
    threshold: 0.2,  // Trigger when 20% visible (default: 0.1)
    rootMargin: '0px 0px -50px 0px'  // Trigger 50px before bottom
  }
);
```

### 2. Reduce Motion Preference

Animations automatically respect user preferences:

```css
@media (prefers-reduced-motion: reduce) {
  .scroll-reveal {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
```

### 3. Limit Number of Circles

For better performance on mobile, reduce circles:

```jsx
{/* Remove or comment out circles in CircleBackground.js */}
<circle  /* Small circle - can be removed */
  cx={20 + scrollProgress * 30}
  cy={60 - scrollProgress * 30}
  r="25"
  // ...
/>
```

## Browser Support

- ✅ Chrome/Edge 88+ (Intersection Observer)
- ✅ Firefox 78+
- ✅ Safari 14+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

**Polyfill needed for older browsers:**
```bash
npm install intersection-observer
```

```javascript
// In layout.js or page.js
if (typeof window !== 'undefined') {
  require('intersection-observer');
}
```

## Accessibility

### Screen Readers

Content is accessible regardless of animation state.

### Keyboard Navigation

Focus states work normally - animations don't interfere.

### Reduced Motion

Respects `prefers-reduced-motion: reduce` system setting.

## Troubleshooting

### Animations Not Triggering

1. **Check data-section attributes** are present
2. **Verify ScrollReveal wraps content** properly
3. **Inspect console** for JavaScript errors
4. **Check z-index** - ensure content is above background

### Background Not Changing

1. **Ensure CircleBackground is rendered** once at top level
2. **Verify data-section attributes** are sequential (0, 1, 2...)
3. **Check element positioning** - sections must scroll into view

### Jerky Animations

1. **Use transform instead of position** for movements
2. **Enable GPU acceleration**: `transform: translateZ(0);`
3. **Reduce number of orbs** on mobile
4. **Simplify SVG gradients**

### Performance Issues

1. **Limit animated elements** on mobile
2. **Use will-change sparingly**:
   ```css
   .scroll-reveal.is-visible {
     will-change: transform, opacity;
   }
   ```
3. **Debounce scroll events** if needed
4. **Use CSS transforms** over position/width/height

## Advanced Usage

### Custom Trigger Points

Modify intersection observer settings:

```javascript
{
  threshold: 0.5,  // Trigger when 50% visible
  rootMargin: '0px 0px -200px 0px'  // Trigger 200px earlier
}
```

### Combining with Other Animations

```jsx
<ScrollReveal className="scroll-reveal-scale">
  <div className="card">
    {/* Card has both scroll reveal AND hover effects */}
  </div>
</ScrollReveal>
```

### Sequential Sections

```jsx
<ScrollReveal delay={0}>
  <div data-section="0">First section</div>
</ScrollReveal>

<ScrollReveal delay={300}>
  <div data-section="1">Second section</div>
</ScrollReveal>

<ScrollReveal delay={600}>
  <div data-section="2">Third section</div>
</ScrollReveal>
```

## Examples

### Landing Page

```jsx
<CircleBackground />

<div data-section="0" className="vh-100 d-flex align-items-center justify-content-center">
  <ScrollReveal>
    <h1 className="text-center">Welcome</h1>
  </ScrollReveal>
</div>

<div data-section="1" className="container py-5">
  <ScrollReveal delay={100}>
    <h2>About</h2>
  </ScrollReveal>
  <ScrollReveal delay={200} className="scroll-reveal-left">
    <p>Description...</p>
  </ScrollReveal>
</div>
```

### Portfolio Grid

```jsx
<div data-section="1">
  <ScrollReveal>
    <h2>Projects</h2>
  </ScrollReveal>
  
  <div className="d-flex flex-wrap gap-3">
    {projects.map((project, i) => (
      <ScrollReveal key={i} delay={i * 100}>
        <div className="card">{project.title}</div>
      </ScrollReveal>
    ))}
  </div>
</div>
```

### Multi-Section Page

```jsx
<CircleBackground />

{sections.map((section, i) => (
  <div key={i} data-section={i} className="py-5">
    <ScrollReveal delay={i * 50}>
      <h2>{section.title}</h2>
      <p>{section.content}</p>
    </ScrollReveal>
  </div>
))}
```

## Best Practices

1. **Use data-section sequentially** (0, 1, 2, 3...)
2. **Add CircleBackground once** at the root level
3. **Don't nest ScrollReveal** components
4. **Stagger delays** for better visual flow (100-300ms increments)
5. **Test on actual devices** - animations may feel different
6. **Keep delay values reasonable** (< 1000ms)
7. **Use semantic HTML** within ScrollReveal
8. **Test with reduced motion** enabled

## Resources

- [Intersection Observer MDN](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [Easing Functions](https://easings.net/)
- [SVG Animations](https://css-tricks.com/guide-svg-animations-smil/)
- [Reduced Motion Query](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)
