import Link from "next/link";

export default function CustomLink({ href, text }) {
  return (
    <Link href={href} className="text-blue font-lg font-bold font-sans">
      {text}
    </Link>
  );
}
