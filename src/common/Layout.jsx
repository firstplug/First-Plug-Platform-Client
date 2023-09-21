export default function Layout({ children, className = "" }) {
  return <div className={`h-[calc(100vh-140px)] ${className}`}>{children}</div>;
}
