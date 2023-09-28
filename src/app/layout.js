import "./globals.css";
import { Montserrat, Inter } from "next/font/google";
import Providers from "./Providers";
import { Provider as ProviderMobx } from "mobx-react-lite";
import rootStore from "./stores/rootStore";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "First-Plug-Platform",
  description:
    "Web platform focused on inventory management, acquisition and control.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body>
        <ProviderMobx store={rootStore}>
          <Providers>{children}</Providers>
        </ProviderMobx>
      </body>
    </html>
  );
}
