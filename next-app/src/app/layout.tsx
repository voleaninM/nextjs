import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "../styles/globals.css";
import "../styles/utility.css";
import "../styles/reset.css";
import "../styles/typography.css";
import { Footer, Navbar } from "@/components";
export const metadata: Metadata = {
  title: "CarStore",
  description: "Find and rent cars",
};
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.className} ${manrope.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
