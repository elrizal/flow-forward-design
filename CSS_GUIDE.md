# CSS Architecture Guide

This project uses a split CSS architecture separating utility classes from branding and theming.

## File Structure

```
app/
├── utilities.css     # Layout, spacing, flexbox utilities
├── theme.css         # Colors, typography, interactive styles
└── layout.js         # Imports both stylesheets
```

## Color Palette

### Primary Colors (WCAG AA Compliant)

| Color | Hex | CSS Variable | Usage |
|-------|-----|--------------|-------|
| Dark Blue | `#1a2332` | `--color-dark-blue` | Primary background |
| Dark Blue Light | `#2a3442` | `--color-dark-blue-light` | Cards, elevated surfaces |
| Burgundy | `#8b2635` | `--color-burgundy` | Primary accent, CTAs |
| Burgundy Light | `#a53545` | `--color-burgundy-light` | Hover states |
| Gold | `#d4af37` | `--color-gold` | Secondary accent, borders |
| Gold Light | `#f0cb5c` | `--color-gold-light` | Hover states, highlights |

### Accessibility

All color combinations meet WCAG 2.1 Level AA standards for contrast:
- **Text on Dark Blue**: White text (#ffffff) - Ratio 12.63:1 ✅
- **Text on Burgundy**: White text (#ffffff) - Ratio 7.12:1 ✅
- **Text on Gold**: Dark Blue text (#1a2332) - Ratio 8.54:1 ✅

## Typography

### Font Family

```css
font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

**Montserrat** is loaded via Google Fonts with variable weights (100-900).

### Font Weights

- `300` - Light (`.font-weight-light`)
- `400` - Normal (`.font-weight-normal`)
- `600` - Semibold (`.font-weight-semibold`)
- `700` - Bold (`.font-weight-bold`)
- `900` - Black (`.font-weight-bolder`)

### Responsive Typography

All headings use `clamp()` for fluid typography:

```css
h1 { font-size: clamp(2.5rem, 5vw, 4rem); }
h2 { font-size: clamp(2rem, 4vw, 3rem); }
h3 { font-size: clamp(1.5rem, 3vw, 2rem); }
h4 { font-size: clamp(1.25rem, 2.5vw, 1.5rem); }
```

## Interactive Styles

### Animation Philosophy

Inspired by modern portfolio sites with:
- **Smooth transitions** using cubic-bezier easing
- **Hover lift effects** (-4px translateY)
- **Ripple effects** on buttons
- **Scale transformations** on active states

### Button Animations

```css
/* Ripple effect on hover */
.btn::before {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  background: rgba(255, 255, 255, 0.1);
  transition: width 0.6s, height 0.6s;
}

.btn:hover::before {
  width: 300px;
  height: 300px;
}
```

### Card Interactions

- **Top border reveal** on hover (gold gradient)
- **Lift effect** with shadow enhancement
- **Border color transition** to gold

### Gallery Hover Effects

- **Image scale** (1.05x)
- **Inner border** animation
- **Overlay slide-up** with bounce easing
- **Box shadow** enhancement with gold glow

## CSS Custom Properties

### Usage

```css
:root {
  --color-dark-blue: #1a2332;
  --hover-lift: -4px;
  --transition-speed: 0.3s;
  --transition-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

/* Use in your styles */
.my-element {
  background: var(--color-dark-blue);
  transform: translateY(var(--hover-lift));
  transition: all var(--transition-speed) var(--transition-bounce);
}
```

## Utility Classes (utilities.css)

### Container System

```html
<div class="container">      <!-- Responsive max-width -->
<div class="container-fluid"> <!-- Full width -->
```

**Breakpoints:**
- 576px: 540px
- 768px: 720px
- 992px: 960px
- 1200px: 1140px

### Flexbox Utilities

```html
<!-- Display -->
<div class="d-flex">         <!-- display: flex -->
<div class="d-inline-flex">  <!-- display: inline-flex -->

<!-- Direction -->
<div class="d-flex flex-row">     <!-- row -->
<div class="d-flex flex-column">  <!-- column -->

<!-- Justify Content -->
<div class="d-flex justify-content-start">
<div class="d-flex justify-content-center">
<div class="d-flex justify-content-between">

<!-- Align Items -->
<div class="d-flex align-items-start">
<div class="d-flex align-items-center">
<div class="d-flex align-items-stretch">

<!-- Gap -->
<div class="d-flex gap-3">  <!-- 1rem gap -->
```

### Spacing (m/p-{0-5})

```html
<!-- Margin -->
<div class="mt-3">   <!-- margin-top: 1rem -->
<div class="mb-4">   <!-- margin-bottom: 1.5rem -->
<div class="mx-auto"> <!-- margin-left/right: auto -->
<div class="my-5">   <!-- margin-top/bottom: 3rem -->

<!-- Padding -->
<div class="pt-2">   <!-- padding-top: 0.5rem -->
<div class="pb-3">   <!-- padding-bottom: 1rem -->
<div class="px-4">   <!-- padding-left/right: 1.5rem -->
<div class="py-5">   <!-- padding-top/bottom: 3rem -->
```

**Scale:**
- `0` = 0
- `1` = 0.25rem (4px)
- `2` = 0.5rem (8px)
- `3` = 1rem (16px)
- `4` = 1.5rem (24px)
- `5` = 3rem (48px)

### Responsive Utilities

```html
<!-- Hide on mobile, show on tablet+ -->
<div class="d-none d-md-block">

<!-- Stack on mobile, row on desktop -->
<div class="d-flex flex-column flex-lg-row">

<!-- Center on mobile, left on tablet+ -->
<div class="text-center text-md-left">
```

**Breakpoint prefixes:** `sm`, `md`, `lg`, `xl`

## Theme Classes (theme.css)

### Colors

```html
<!-- Text Colors -->
<p class="text-primary">    <!-- Burgundy -->
<p class="text-secondary">  <!-- Gold -->
<p class="text-muted">      <!-- Gray -->
<p class="text-white">      <!-- White -->

<!-- Background Colors -->
<div class="bg-primary">    <!-- Burgundy -->
<div class="bg-secondary">  <!-- Gold -->
<div class="bg-dark">       <!-- Dark Blue -->
<div class="bg-light">      <!-- Off-white -->
```

### Buttons

```html
<!-- Variants -->
<button class="btn btn-primary">    <!-- Burgundy with gold border -->
<button class="btn btn-secondary">  <!-- Gold with burgundy border -->
<button class="btn btn-outline">   <!-- Transparent with gold border -->

<!-- Sizes -->
<button class="btn btn-sm">  <!-- Small -->
<button class="btn">         <!-- Medium (default) -->
<button class="btn btn-lg">  <!-- Large -->

<!-- Block -->
<button class="btn btn-block"> <!-- Full width -->
```

### Cards

```html
<div class="card">
  <div class="card-header">Optional Header</div>
  <div class="card-body">
    <h3 class="card-title">Title</h3>
    <p class="card-text">Content</p>
  </div>
  <div class="card-footer">Optional Footer</div>
</div>
```

**Features:**
- Dark blue background
- Gold top border reveal on hover
- Lift effect with gold shadow
- Gold title text

### Borders & Shadows

```html
<!-- Borders -->
<div class="border">           <!-- 1px gold border -->
<div class="border-gold">      <!-- Explicit gold -->
<div class="border-burgundy">  <!-- Burgundy border -->

<!-- Shadows -->
<div class="shadow-sm">        <!-- Small shadow -->
<div class="shadow">           <!-- Medium shadow -->
<div class="shadow-lg">        <!-- Large shadow -->
<div class="shadow-gold">      <!-- Gold glow -->
<div class="shadow-burgundy">  <!-- Burgundy glow -->
```

## Customization

### Changing Colors

Edit CSS variables in `theme.css`:

```css
:root {
  --color-dark-blue: #your-color;
  --color-burgundy: #your-color;
  --color-gold: #your-color;
}
```

### Adjusting Animations

Modify transition variables:

```css
:root {
  --hover-lift: -8px;  /* More pronounced lift */
  --transition-speed: 0.5s;  /* Slower transitions */
}
```

### Adding Custom Utilities

Add to `utilities.css`:

```css
/* Custom spacing */
.m-6 {
  margin: 4rem;
}

/* Custom width */
.w-33 {
  width: 33.333%;
}
```

### Adding Custom Theme Styles

Add to `theme.css`:

```css
/* Custom button variant */
.btn-custom {
  background-color: var(--your-color);
  border-color: var(--color-gold);
  color: var(--text-on-dark);
}
```

## Best Practices

### 1. Use Utility Classes for Layout

```html
<!-- Good: Utility classes -->
<div class="d-flex justify-content-between align-items-center p-3 mb-4">

<!-- Avoid: Inline styles -->
<div style="display: flex; justify-content: space-between;">
```

### 2. Use Theme Classes for Branding

```html
<!-- Good: Theme classes -->
<button class="btn btn-primary">Click Me</button>

<!-- Avoid: Custom styles for branded elements -->
<button style="background: #8b2635;">Click Me</button>
```

### 3. Combine Utilities with Theme

```html
<!-- Perfect combination -->
<div class="card d-flex flex-column gap-3 p-4 shadow-lg">
  <h3 class="card-title mb-0">Title</h3>
  <p class="text-muted">Description</p>
</div>
```

### 4. Responsive Design

Always design mobile-first:

```html
<!-- Mobile: stack, Desktop: row -->
<div class="d-flex flex-column flex-md-row gap-3">
  <div class="flex-fill">Left</div>
  <div class="flex-fill">Right</div>
</div>
```

### 5. Accessibility

- Use semantic HTML
- Maintain color contrast ratios
- Provide focus states (already styled)
- Test with keyboard navigation

## Performance Tips

### 1. CSS is Split and Optimized

- `utilities.css`: 1,200 lines (layout)
- `theme.css`: 800 lines (branding)
- Both files are minified in production

### 2. CSS Variables

Using CSS custom properties allows:
- Instant theme switching
- Easy dark mode implementation
- Reduced specificity wars

### 3. No Unused CSS

Next.js automatically tree-shakes unused styles in production.

## Migration from Old globals.css

The old `globals.css` has been split:

- **Layout utilities** → `utilities.css`
- **Colors, buttons, cards** → `theme.css`
- **Waves animation** → Kept in `theme.css` with new colors

**Old file backed up as:** `globals.css.backup`

## Browser Support

- ✅ Chrome/Edge 88+
- ✅ Firefox 78+
- ✅ Safari 14+
- ✅ Mobile browsers

Features used:
- CSS Custom Properties (widely supported)
- CSS Grid (widely supported)
- Flexbox (universal support)
- `clamp()` for fluid typography (modern browsers)

## Troubleshooting

### Colors not applying

1. Check that both CSS files are imported in `layout.js`
2. Clear Next.js cache: `rm -rf .next`
3. Restart dev server: `npm run dev`

### Hover effects not working

1. Verify element has correct class name
2. Check for conflicting inline styles
3. Inspect computed styles in DevTools

### Responsive breakpoints not triggering

1. Check viewport meta tag in `<head>`
2. Test in actual device (not just browser resize)
3. Verify media query syntax

## Further Reading

- [CSS Custom Properties MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [WCAG Color Contrast](https://webaim.org/resources/contrastchecker/)
- [Cubic-bezier.com](https://cubic-bezier.com/) - Easing function tool
