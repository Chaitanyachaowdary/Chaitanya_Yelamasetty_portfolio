import type { Metadata } from "next";
import { Sora, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-sora",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Chaitanya Yelamasetty — Full Stack Developer & UI/UX Designer",
  description:
    "Chaitanya Yelamasetty — Full Stack Web Developer & UI/UX Designer building fast, intuitive web products with React, Node.js, Hono and PostgreSQL. Open to full-time & freelance work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark overflow-x-hidden ${sora.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-obsidian-deep text-on-surface font-body-md overflow-x-hidden selection:bg-neon-cyan selection:text-obsidian-deep">
        {children}
      </body>
    </html>
  );
}
