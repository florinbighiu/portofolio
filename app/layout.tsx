import Header from "@/components/header";
import "./globals.css";
import { Poppins } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import { SpeedInsights } from "@vercel/speed-insights/next";


const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"]});

export const metadata = {
  title: "Florin Bighiu",
  description: "Florin Bighiu's personal website",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${poppins.className} bg-gradient-to-r from-gray-50 to-violet-100 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <SpeedInsights />
            <Footer />
            <Toaster position="top-center" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
