# Component Documentation

This boilerplate includes reusable React components that leverage the utility classes.

## Components

### WavesHeader

A full-screen animated header with wave patterns and bouncing arrow.

```jsx
import { WavesHeader } from '@/app/components';

<WavesHeader
  title="Your Name"
  subtitle="Your Tagline"
/>
```

**Props:**
- `title` (string) - Main heading text
- `subtitle` (string) - Subtitle text

**Features:**
- Full-screen (100vw × 100vh)
- Animated SVG wave effect
- Responsive 3×3 grid that scales
- Bouncing arrow indicator
- Click to scroll functionality

See [WAVES_HEADER.md](./WAVES_HEADER.md) for detailed documentation.

---

### Navbar

A responsive navigation bar component.

```jsx
import { Navbar } from '@/app/components';

<Navbar
  title="My App"
  links={[
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'GitHub', href: 'https://github.com', external: true }
  ]}
/>
```

**Props:**
- `title` (string) - Brand/app title
- `links` (array) - Array of link objects with `label`, `href`, and optional `external`

---

### Hero

A hero section component for landing pages.

```jsx
import { Hero, Button } from '@/app/components';

<Hero
  title="Welcome to Our App"
  subtitle="Build amazing things with React and Next.js"
>
  <Button variant="primary" size="lg">Get Started</Button>
</Hero>
```

**Props:**
- `title` (string) - Main heading
- `subtitle` (string) - Subheading text
- `children` (node) - Content to render in the hero
- `className` (string) - Additional CSS classes

---

### Card

A flexible card component with optional header and footer.

```jsx
import { Card } from '@/app/components';

<Card
  title="Card Title"
  shadow="lg"
  header={<span>Optional Header</span>}
  footer={<span>Optional Footer</span>}
>
  <p className="card-text">Card content goes here</p>
</Card>
```

**Props:**
- `title` (string) - Card title
- `header` (node) - Optional header content
- `footer` (node) - Optional footer content
- `shadow` (string) - Shadow size: `sm`, `md`, `lg`, or `none`
- `className` (string) - Additional CSS classes
- `children` (node) - Card body content

---

### Button

A button component with variants and sizes.

```jsx
import { Button } from '@/app/components';

<Button
  variant="primary"
  size="lg"
  onClick={() => console.log('Clicked')}
>
  Click Me
</Button>
```

**Props:**
- `variant` (string) - Button color: `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light`, `dark`
- `size` (string) - Button size: `sm`, `md`, `lg`
- `block` (boolean) - Full width button
- `onClick` (function) - Click handler
- `type` (string) - Button type: `button`, `submit`, `reset`
- `className` (string) - Additional CSS classes
- `children` (node) - Button content

---

### Gallery

An interactive, responsive image gallery with modal popups.

```jsx
import { Gallery } from '@/app/components';

const items = [
  {
    title: "Product Name",
    image: "https://example.com/image.jpg",
    description: "Product description...",
    etsyLink: "https://www.etsy.com/shop/yourshop",
    threadlessLink: "https://www.threadless.com/@yourshop"
  },
  // More items...
];

<Gallery items={items} />
```

**Props:**
- `items` (array) - Array of gallery item objects

**Item Properties:**
- `title` (string) - Item title
- `image` (string) - Image URL
- `description` (string) - Detailed description for modal
- `etsyLink` (string) - Etsy shop/product URL
- `threadlessLink` (string) - Threadless shop/product URL

**Features:**
- 4 columns on desktop, 2 on mobile
- Hover overlay with "Learn More" button
- Modal popup with image and shop links
- Keyboard support (ESC to close)
- Click outside to close

See [GALLERY.md](./GALLERY.md) for detailed documentation.

---

### Modal

A reusable modal component with backdrop and close functionality.

```jsx
'use client';

import { useState } from 'react';
import { Modal, Button } from '@/app/components';

export default function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2>Modal Title</h2>
        <p>Modal content goes here...</p>
        <Button onClick={() => setIsOpen(false)}>Close</Button>
      </Modal>
    </>
  );
}
```

**Props:**
- `isOpen` (boolean) - Whether modal is visible
- `onClose` (function) - Function to call when closing
- `children` (node) - Modal content

**Features:**
- Full-screen overlay backdrop
- Close button (X)
- ESC key to close
- Click outside to close
- Body scroll lock when open
- Smooth fade animation

---

### Grid & GridItem

Responsive grid layout components.

```jsx
import { Grid, GridItem, Card } from '@/app/components';

<Grid cols={3} gap={3}>
  <GridItem>
    <Card title="Item 1">Content</Card>
  </GridItem>
  <GridItem>
    <Card title="Item 2">Content</Card>
  </GridItem>
  <GridItem>
    <Card title="Item 3">Content</Card>
  </GridItem>
</Grid>
```

**Grid Props:**
- `cols` (number) - Number of columns: `2`, `3`, `4`
- `gap` (number) - Gap size between items: `0-5`
- `className` (string) - Additional CSS classes
- `children` (node) - Grid items

**GridItem Props:**
- `className` (string) - Additional CSS classes
- `children` (node) - Item content

---

## Usage Examples

### Landing Page Layout

```jsx
import { Navbar, Hero, Grid, GridItem, Card, Button } from '@/app/components';

export default function Home() {
  return (
    <>
      <Navbar
        title="My App"
        links={[
          { label: 'Features', href: '#features' },
          { label: 'Pricing', href: '#pricing' },
          { label: 'Contact', href: '#contact' }
        ]}
      />

      <Hero
        title="Build Amazing Web Apps"
        subtitle="Fast, modern, and responsive"
      >
        <div className="d-flex gap-2 justify-content-center">
          <Button variant="primary" size="lg">Get Started</Button>
          <Button variant="secondary" size="lg">Learn More</Button>
        </div>
      </Hero>

      <section id="features" className="container py-5">
        <h2 className="text-center mb-4">Features</h2>
        <Grid cols={3} gap={3}>
          <GridItem>
            <Card title="Feature 1" shadow="sm">
              <p className="card-text text-muted">Description of feature 1</p>
            </Card>
          </GridItem>
          <GridItem>
            <Card title="Feature 2" shadow="sm">
              <p className="card-text text-muted">Description of feature 2</p>
            </Card>
          </GridItem>
          <GridItem>
            <Card title="Feature 3" shadow="sm">
              <p className="card-text text-muted">Description of feature 3</p>
            </Card>
          </GridItem>
        </Grid>
      </section>
    </>
  );
}
```

### Dashboard Layout

```jsx
import { Navbar, Grid, GridItem, Card } from '@/app/components';

export default function Dashboard() {
  return (
    <>
      <Navbar title="Dashboard" />

      <div className="container-fluid py-4">
        <Grid cols={4} gap={3} className="mb-4">
          <GridItem>
            <Card className="bg-primary text-white">
              <h3 className="m-0">1,234</h3>
              <p className="text-white mb-0">Total Users</p>
            </Card>
          </GridItem>
          <GridItem>
            <Card className="bg-success text-white">
              <h3 className="m-0">567</h3>
              <p className="text-white mb-0">Active Sessions</p>
            </Card>
          </GridItem>
          <GridItem>
            <Card className="bg-warning">
              <h3 className="m-0">89</h3>
              <p className="mb-0">Pending Tasks</p>
            </Card>
          </GridItem>
          <GridItem>
            <Card className="bg-info text-white">
              <h3 className="m-0">12</h3>
              <p className="text-white mb-0">Messages</p>
            </Card>
          </GridItem>
        </Grid>

        <Card title="Recent Activity" shadow="sm">
          <p className="card-text">Dashboard content goes here...</p>
        </Card>
      </div>
    </>
  );
}
```

### Form Layout

```jsx
import { Card, Button } from '@/app/components';

export default function ContactForm() {
  return (
    <div className="container py-5">
      <div className="d-flex justify-content-center">
        <Card
          title="Contact Us"
          className="w-100"
          style={{ maxWidth: '500px' }}
          shadow="lg"
        >
          <form className="d-flex flex-column gap-3">
            <div>
              <label className="d-block mb-1 font-weight-bold">Name</label>
              <input
                type="text"
                className="w-100 p-2 border rounded"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="d-block mb-1 font-weight-bold">Email</label>
              <input
                type="email"
                className="w-100 p-2 border rounded"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="d-block mb-1 font-weight-bold">Message</label>
              <textarea
                className="w-100 p-2 border rounded"
                rows="4"
                placeholder="Your message"
              />
            </div>

            <Button type="submit" variant="primary" block>
              Send Message
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}
```

## Creating Custom Components

You can easily create your own components using the utility classes:

```jsx
// app/components/Alert.js
export default function Alert({ children, variant = 'info', className = '' }) {
  return (
    <div className={`p-3 rounded border bg-${variant} text-white ${className}`}>
      {children}
    </div>
  );
}
```

```jsx
// app/components/Badge.js
export default function Badge({ children, variant = 'primary' }) {
  return (
    <span className={`px-2 py-1 rounded-pill bg-${variant} text-white`}>
      {children}
    </span>
  );
}
```

## Best Practices

1. **Use utility classes** - Leverage the existing utility classes instead of writing custom CSS
2. **Keep components simple** - Components should be flexible and reusable
3. **Compose components** - Build complex layouts by combining simple components
4. **Responsive by default** - Use responsive utility classes to ensure mobile-first design
5. **Export from index** - Add new components to `app/components/index.js` for easy imports
