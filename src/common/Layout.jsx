export default function Layout({ children, className = "" }) {
  return (
    <section
      className={`h-[calc(98vh-100px)] w-[96%] mx-auto py-6 mt-6 ${className}`}
    >
      {children}
    </section>
  );
}
