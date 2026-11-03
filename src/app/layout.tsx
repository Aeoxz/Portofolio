import type { Metadata } from "next";
import { Inter, Bebas_Neue, Oswald, Caveat, Teko } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

const teko = Teko({
  weight: ["600", "700"],
  subsets: ["latin"],
  variable: "--font-teko",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Azka Faiq Suharyanto | Informatics Engineer & Data Scientist",
  description:
    "Portfolio of Azka Faiq Suharyanto — Fresh Informatics Engineering graduate of Universitas Mercu Buana focused on Python, Data Science, Applied Machine Learning, PaddleOCR, and UI/UX Design.",
  keywords: [
    "Azka Faiq Suharyanto",
    "Informatics Engineering",
    "Data Scientist",
    "Machine Learning",
    "PaddleOCR",
    "Computer Vision",
    "Python",
    "Universitas Mercu Buana",
    "ICICoS 2026",
    "Portfolio",
  ],
  authors: [{ name: "Azka Faiq Suharyanto" }],
  openGraph: {
    title: "Azka Faiq Suharyanto | Informatics Engineer & Data Scientist",
    description:
      "Bridging machine learning research, data pipelines, and intelligent software engineering.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${bebasNeue.variable} ${oswald.variable} ${caveat.variable} ${teko.variable} scroll-smooth`}
    >
      <body className="bg-[#09090b] text-neutral-100 antialiased min-h-screen selection:bg-red-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
