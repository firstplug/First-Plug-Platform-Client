import Link from "next/link";

export default function CustomLink({
  href,
  children,
  className = "",
  disabled,
  variant,
  size,
}) {
  const customLinkStyle = {
    variant: {
      primary:
        "bg-blue text-white   hover:bg-gradient-to-r from-blue to-green ",
      secondary: "bg-white border border-blue hover:bg-hoverBlue  text-blue ",
      text: "bg-white   text-blue  hover:bg-hoverBlue",
      alert: "text-error    hover:bg-hoverRed",
    },
    size: {
      big: "text-lg py-3 px-6",
      small: "text-sm  py-2 px-6",
    },
    disabled: {
      primary: "bg-light-grey    text-grey ",
      secondary: "bg-white   text-grey ",
      text: "bg-white    text-grey   ",
      alert: "bg-white   text-grey ",
    },
  };

  return (
    <Link
      href={href}
      target={href.startsWith("http") ? "_black" : undefined}
      className={`text-blue font-lg font-bold font-sans ${className} ${
        disabled
          ? `${customLinkStyle.disabled[variant]} ${customLinkStyle.size[size]}`
          : `${customLinkStyle.variant[variant]} ${customLinkStyle.size[size]}`
      } `}
    >
      {children}
    </Link>
  );
}
