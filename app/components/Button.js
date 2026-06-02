export default function Button({
  children,
  variant = "primary",
  size = "md",
  block = false,
  onClick,
  type = "button",
  className = "",
  ...props
}) {
  const sizeClass = size !== "md" ? `btn-${size}` : "";
  const blockClass = block ? "btn-block" : "";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn btn-${variant} ${sizeClass} ${blockClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
