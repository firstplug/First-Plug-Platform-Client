export default function Layout({ children, className = "" }) {
  return (
    <div className={`h-[calc(100vh-140px)] p-4 ${className}`}>{children}</div>
  );
}
