export default function Navbar({ title = "Flow Forward", links = [] }) {
  return (
    <nav className="bg-primary text-white shadow">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center py-3">
          <h1 className="m-0">{title}</h1>
          {links.length > 0 && (
            <div className="d-flex gap-3">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-white"
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
