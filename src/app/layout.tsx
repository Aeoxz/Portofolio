import type { Metadata } from "next";
import { Inter, Bebas_Neue, Oswald, Caveat } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Rayhan Aditya | Web Designer & UI/UX Creator",
  description:
    "Personal portfolio template for creative web designers and UI/UX developers featuring dark aesthetics with bold red accents.",
  keywords: [
    "Portfolio",
    "Web Designer",
    "UI/UX",
    "Frontend Developer",
    "Next.js",
    "Tailwind CSS",
    "TypeScript",
  ],
  authors: [{ name: "Rayhan Aditya" }],
  openGraph: {
    title: "Rayhan Aditya | Web Designer & UI/UX Creator",
    description: "Turning ideas into powerful digital experiences.",
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
      className={`${inter.variable} ${bebasNeue.variable} ${oswald.variable} ${caveat.variable} scroll-smooth`}
    >
      <body className="bg-[#09090b] text-neutral-100 antialiased min-h-screen selection:bg-red-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
