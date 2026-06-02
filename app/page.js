'use client';

import { Gallery } from './components';

const galleryItems = [
  {
    title: "Abstract Art Print",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=500&h=500&fit=crop",
    description: "A stunning abstract art piece featuring vibrant colors and bold geometric shapes. Perfect for modern interiors and contemporary spaces.",
    etsyLink: "https://www.etsy.com",
    threadlessLink: "https://www.threadless.com"
  },
  {
    title: "Nature Photography",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=500&fit=crop",
    description: "Breathtaking landscape photography capturing the beauty of untouched wilderness. Available in various print sizes and formats.",
    etsyLink: "https://www.etsy.com",
    threadlessLink: "https://www.threadless.com"
  },
  {
    title: "Minimalist Design",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop",
    description: "Clean and simple minimalist design that brings elegance to any room. Expertly crafted with attention to detail.",
    etsyLink: "https://www.etsy.com",
    threadlessLink: "https://www.threadless.com"
  },
  {
    title: "Vintage Collection",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=500&h=500&fit=crop",
    description: "Classic vintage-inspired artwork with timeless appeal. Each piece tells a unique story from a bygone era.",
    etsyLink: "https://www.etsy.com",
    threadlessLink: "https://www.threadless.com"
  },
  {
    title: "Modern Typography",
    image: "https://images.unsplash.com/photo-1509281373149-e957c6296406?w=500&h=500&fit=crop",
    description: "Bold typographic design featuring inspirational quotes and modern aesthetics. Makes a statement in any space.",
    etsyLink: "https://www.etsy.com",
    threadlessLink: "https://www.threadless.com"
  },
  {
    title: "Botanical Illustration",
    image: "https://images.unsplash.com/photo-1466781783364-36c955e42a7f?w=500&h=500&fit=crop",
    description: "Detailed botanical illustrations showcasing nature's intricate beauty. Perfect for plant lovers and nature enthusiasts.",
    etsyLink: "https://www.etsy.com",
    threadlessLink: "https://www.threadless.com"
  },
  {
    title: "Urban Architecture",
    image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=500&h=500&fit=crop",
    description: "Striking architectural photography highlighting urban landscapes and modern structures. A must-have for design aficionados.",
    etsyLink: "https://www.etsy.com",
    threadlessLink: "https://www.threadless.com"
  },
  {
    title: "Coastal Scenes",
    image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=500&h=500&fit=crop",
    description: "Serene coastal photography capturing the tranquility of ocean waves and sandy shores. Brings calm to any environment.",
    etsyLink: "https://www.etsy.com",
    threadlessLink: "https://www.threadless.com"
  }
];

export default function Home() {
  return (
    <div className="container py-5">
      {/* Header Section */}
      <header className="text-center mb-5">
        <h1 className="mb-3">Flow Forward Design</h1>
        <p className="text-muted">
          A Next.js boilerplate with flexbox-based utilities and Bootstrap-like class names
        </p>
      </header>

      {/* Gallery Section */}
      <section className="mb-5">
        <h2 className="text-center mb-4">Featured Gallery</h2>
        <Gallery items={galleryItems} />
      </section>

      {/* Feature Cards */}
      <div className="d-flex flex-wrap gap-3 mb-5">
        <div className="card flex-fill shadow-sm">
          <div className="card-body">
            <h3 className="card-title">Flexbox Utilities</h3>
            <p className="card-text text-muted">
              Full suite of flexbox utilities including direction, wrap, justify, align, and gap classes.
            </p>
          </div>
        </div>

        <div className="card flex-fill shadow-sm">
          <div className="card-body">
            <h3 className="card-title">Responsive Design</h3>
            <p className="card-text text-muted">
              Mobile-first responsive utilities with breakpoints: sm, md, lg, and xl.
            </p>
          </div>
        </div>

        <div className="card flex-fill shadow-sm">
          <div className="card-body">
            <h3 className="card-title">Bootstrap-like Classes</h3>
            <p className="card-text text-muted">
              Familiar class names for spacing, colors, typography, and more.
            </p>
          </div>
        </div>
      </div>

      {/* Demo Section */}
      <section className="bg-light rounded p-4 mb-5">
        <h2 className="mb-4">Quick Examples</h2>

        <div className="mb-4">
          <h4 className="mb-2">Flexbox Layout</h4>
          <div className="d-flex justify-content-between align-items-center p-3 bg-white rounded border">
            <span>Left</span>
            <span>Center</span>
            <span>Right</span>
          </div>
        </div>

        <div className="mb-4">
          <h4 className="mb-2">Responsive Flex Direction</h4>
          <div className="d-flex flex-column flex-md-row gap-2">
            <div className="p-3 bg-primary text-white rounded flex-fill">Stacks on mobile</div>
            <div className="p-3 bg-secondary text-white rounded flex-fill">Horizontal on tablet+</div>
          </div>
        </div>

        <div className="mb-4">
          <h4 className="mb-2">Buttons</h4>
          <div className="d-flex gap-2 flex-wrap">
            <button className="btn btn-primary">Primary</button>
            <button className="btn btn-secondary">Secondary</button>
            <button className="btn btn-success">Success</button>
            <button className="btn btn-danger">Danger</button>
            <button className="btn btn-warning">Warning</button>
            <button className="btn btn-info">Info</button>
          </div>
        </div>

        <div>
          <h4 className="mb-2">Spacing Utilities</h4>
          <div className="p-3 bg-white rounded border">
            <div className="mb-2">Margin bottom 2</div>
            <div className="p-2 bg-light">Padding 2</div>
            <div className="mt-3 pt-3 border-top">Margin top 3, Padding top 3</div>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section>
        <h2 className="mb-3">Getting Started</h2>
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Ready to Deploy</h4>
            <p className="card-text">
              This boilerplate is ready for quick deployment to Vercel, Netlify, or any static hosting platform.
            </p>
            <div className="d-flex gap-2 mt-3">
              <a
                href="https://vercel.com/new"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Deploy to Vercel
              </a>
              <a
                href="https://nextjs.org/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Next.js Docs
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center mt-5 pt-5 border-top text-muted">
        <p>Built with Next.js and custom flexbox utilities</p>
      </footer>
    </div>
  );
}
