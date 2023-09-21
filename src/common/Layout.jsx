export default function Layout({ children, className = "" }) {
  return (
    <div className={`h-[calc(100vh-20px) p-4]${className}`}>{children}</div>
  );
}
