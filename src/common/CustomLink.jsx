import Link from "next/link";

export default function CustomLink({ href, children, className = "" }) {
  return (
    <Link
      href={href}
      target={href.startsWith("http") ? "_black" : undefined}
      className={`text-blue font-lg font-bold font-sans ${className}`}
    >
      {children}
    </Link>
  );
}
