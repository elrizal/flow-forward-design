export default function Grid({
  children,
  cols = 3,
  gap = 3,
  className = ""
}) {
  const responsiveClasses = {
    2: "flex-column flex-md-row",
    3: "flex-column flex-md-row",
    4: "flex-column flex-sm-row flex-wrap"
  };

  const flexClass = responsiveClasses[cols] || "flex-wrap";

  return (
    <div className={`d-flex ${flexClass} gap-${gap} ${className}`}>
      {children}
    </div>
  );
}

export function GridItem({ children, className = "" }) {
  return (
    <div className={`flex-fill ${className}`}>
      {children}
    </div>
  );
}
