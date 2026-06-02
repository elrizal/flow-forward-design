export default function Hero({
  title,
  subtitle,
  children,
  className = ""
}) {
  return (
    <section className={`bg-light py-5 ${className}`}>
      <div className="container text-center">
        {title && <h1 className="mb-3">{title}</h1>}
        {subtitle && <p className="text-muted mb-4">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}
