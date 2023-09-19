import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

export const metadata = {
  title: "First-Plug-Platform",
  description:
    "Web platform focused on inventory management, acquisition and control.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Theme>{children}</Theme>
      </body>
    </html>
  );
}
