# Flow Forward Design

A Next.js boilerplate application with custom flexbox-based CSS utilities and Bootstrap-like naming conventions, ready for quick front-end deployment via GitHub.

## Features

- **Next.js 15** with App Router
- **JavaScript** (no TypeScript)
- **Custom CSS Utility Classes** - Bootstrap-like naming conventions
- **Flexbox-First** - Complete flexbox utility system
- **Responsive Design** - Mobile-first with breakpoints (sm, md, lg, xl)
- **No Framework Dependencies** - Pure CSS utilities
- **Animated Waves Header** - Full-screen header with SVG wave animation
- **Interactive Gallery Component** - 4-column responsive gallery with modals
- **E-commerce Ready** - Built-in shop link integration (Etsy, Threadless)
- **GitHub Deployment Ready** - Optimized for Vercel, Netlify, and other platforms

## Getting Started

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Build

```bash
npm run build
npm start
```

## CSS Utility Classes

### Flexbox Utilities

#### Display
- `.d-flex` - Display flex
- `.d-inline-flex` - Display inline-flex
- `.d-block`, `.d-inline-block`, `.d-none`

#### Flex Direction
- `.flex-row`, `.flex-row-reverse`
- `.flex-column`, `.flex-column-reverse`

#### Flex Wrap
- `.flex-wrap`, `.flex-nowrap`, `.flex-wrap-reverse`

#### Justify Content
- `.justify-content-start`
- `.justify-content-end`
- `.justify-content-center`
- `.justify-content-between`
- `.justify-content-around`
- `.justify-content-evenly`

#### Align Items
- `.align-items-start`
- `.align-items-end`
- `.align-items-center`
- `.align-items-baseline`
- `.align-items-stretch`

#### Align Self
- `.align-self-start`, `.align-self-end`, `.align-self-center`
- `.align-self-baseline`, `.align-self-stretch`

#### Flex Grow/Shrink
- `.flex-grow-0`, `.flex-grow-1`
- `.flex-shrink-0`, `.flex-shrink-1`
- `.flex-fill`

#### Gap
- `.gap-0` through `.gap-5` (0, 0.25rem, 0.5rem, 1rem, 1.5rem, 3rem)

### Spacing

#### Margin
- `.m-{0-5}` - All sides
- `.mt-{0-5}`, `.mb-{0-5}`, `.ml-{0-5}`, `.mr-{0-5}` - Individual sides
- `.mx-{0-5}`, `.my-{0-5}` - Horizontal/Vertical
- `.m-auto`, `.mt-auto`, `.mb-auto`, etc.

#### Padding
- `.p-{0-5}` - All sides
- `.pt-{0-5}`, `.pb-{0-5}`, `.pl-{0-5}`, `.pr-{0-5}` - Individual sides
- `.px-{0-5}`, `.py-{0-5}` - Horizontal/Vertical

### Sizing

- `.w-25`, `.w-50`, `.w-75`, `.w-100`, `.w-auto`
- `.h-25`, `.h-50`, `.h-75`, `.h-100`, `.h-auto`
- `.vw-100`, `.vh-100`

### Colors

#### Text Colors
- `.text-primary`, `.text-secondary`, `.text-success`
- `.text-danger`, `.text-warning`, `.text-info`
- `.text-light`, `.text-dark`, `.text-white`, `.text-muted`

#### Background Colors
- `.bg-primary`, `.bg-secondary`, `.bg-success`
- `.bg-danger`, `.bg-warning`, `.bg-info`
- `.bg-light`, `.bg-dark`, `.bg-white`

### Typography

- `.text-left`, `.text-center`, `.text-right`, `.text-justify`
- `.text-uppercase`, `.text-lowercase`, `.text-capitalize`
- `.font-weight-light`, `.font-weight-normal`, `.font-weight-bold`, `.font-weight-bolder`

### Borders

- `.border`, `.border-0`
- `.border-top`, `.border-bottom`, `.border-left`, `.border-right`
- `.rounded`, `.rounded-sm`, `.rounded-lg`, `.rounded-circle`, `.rounded-pill`, `.rounded-0`

### Shadows

- `.shadow-sm`, `.shadow`, `.shadow-lg`, `.shadow-none`

### Position

- `.position-static`, `.position-relative`, `.position-absolute`
- `.position-fixed`, `.position-sticky`

### Components

#### Buttons
- `.btn` - Base button class
- `.btn-primary`, `.btn-secondary`, `.btn-success`, `.btn-danger`, `.btn-warning`, `.btn-info`, `.btn-light`, `.btn-dark`
- `.btn-sm`, `.btn-lg`, `.btn-block`

#### Cards
- `.card` - Card container
- `.card-body`, `.card-header`, `.card-footer`
- `.card-title`, `.card-text`

#### Container
- `.container` - Responsive fixed-width container
- `.container-fluid` - Full-width container

#### Gallery & Modal
- `.gallery` - Responsive grid gallery (2 cols mobile, 4 cols desktop)
- `.gallery-item` - Individual gallery item with hover effects
- `.modal-overlay` - Full-screen modal backdrop
- `.modal-content` - Modal container
- See [GALLERY.md](./GALLERY.md) for detailed documentation

## Responsive Design

All breakpoints follow mobile-first approach:

- **sm**: 576px and up
- **md**: 768px and up
- **lg**: 992px and up
- **xl**: 1200px and up

### Responsive Classes

Most utilities have responsive variants:

```html
<!-- Hidden on mobile, visible on tablet+ -->
<div class="d-none d-md-block">...</div>

<!-- Stacks on mobile, horizontal on desktop -->
<div class="d-flex flex-column flex-lg-row">...</div>

<!-- Center on mobile, left-aligned on tablet+ -->
<div class="text-center text-md-left">...</div>
```

Available responsive prefixes:
- `.d-{sm|md|lg|xl}-{value}` - Display
- `.flex-{sm|md|lg|xl}-{value}` - Flex direction
- `.justify-content-{sm|md|lg|xl}-{value}` - Justify content
- `.text-{sm|md|lg|xl}-{value}` - Text alignment

## Deployment

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will auto-detect Next.js and deploy

### Deploy to Netlify

1. Push your code to GitHub
2. Connect your repository in Netlify
3. Build command: `npm run build`
4. Publish directory: `.next`

### Environment Variables

Create a `.env.local` file for local development:

```bash
# Add your environment variables here
NEXT_PUBLIC_API_URL=https://api.example.com
```

## Project Structure

```
flow-forward-design/
├── app/
│   ├── components/       # Reusable React components
│   │   ├── Button.js
│   │   ├── Card.js
│   │   ├── Gallery.js    # Interactive gallery with modals
│   │   ├── Grid.js
│   │   ├── Hero.js
│   │   ├── Modal.js      # Modal component
│   │   ├── Navbar.js
│   │   ├── WavesHeader.js # Animated waves header
│   │   └── index.js
│   ├── globals.css       # All utility classes
│   ├── layout.js         # Root layout
│   └── page.js           # Home page with gallery demo
├── public/               # Static assets
│   └── images/          # Place your images here
├── .github/workflows/    # GitHub Actions for deployment
├── COMPONENTS.md         # Component documentation
├── DEPLOYMENT.md         # Deployment guide
├── GALLERY.md           # Gallery component guide
├── WAVES_HEADER.md      # Waves header component guide
├── package.json
└── README.md
```

## Customization

### Adding New Utility Classes

Edit `app/globals.css` to add custom utilities:

```css
/* Custom utilities */
.my-custom-class {
  /* your styles */
}
```

### Modifying Colors

Update color values in `globals.css`:

```css
.bg-primary {
  background-color: #your-color;
}
```

### Adjusting Breakpoints

Modify breakpoint values in the media queries:

```css
@media (min-width: 768px) {
  /* md breakpoint */
}
```

## License

MIT

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [CSS Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
