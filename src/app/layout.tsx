import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shravan Desale | Full Stack Developer",
  description:
    "Shravan Desale is a Computer Engineering student and Full Stack Developer skilled in React, Next.js, Spring Boot, and MongoDB.",
  keywords: [
    "Shravan Desale",
    "Full Stack Developer",
    "Next.js Portfolio",
    "React Developer",
    "Spring Boot Developer",
    "Computer Engineering Student",
  ],
  authors: [{ name: "Shravan Desale" }],
  creator: "Shravan Desale",
  metadataBase: new URL("my-portfolio-6tlirhg91-shravan-nitin-desales-projects.vercel.app"),
  openGraph: {
    title: "Shravan Desale | Full Stack Developer",
    description:
      "Portfolio of Shravan Desale — Full Stack Developer & Computer Engineering Student.",
    url: "https://your-portfolio-url.vercel.app",
    siteName: "Shravan Desale Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shravan Desale Portfolio",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
        <body className="text-white relative overflow-x-hidden">
        <div className="relative z-10">
          <Navbar />
          <main className="pt-20">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
