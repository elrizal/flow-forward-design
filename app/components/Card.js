export default function Card({
  title,
  children,
  header,
  footer,
  className = "",
  shadow = "sm"
}) {
  const shadowClass = shadow ? `shadow-${shadow}` : "";

  return (
    <div className={`card ${shadowClass} ${className}`}>
      {header && <div className="card-header">{header}</div>}
      <div className="card-body">
        {title && <h3 className="card-title">{title}</h3>}
        {children}
      </div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
}
