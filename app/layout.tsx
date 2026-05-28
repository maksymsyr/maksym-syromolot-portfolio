import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maksym Syromolot — Full-Stack Developer",
  description:
    "Maksym Syromolot. Full-stack developer. Java, TypeScript, React, Node. Selected work, experience, and contact.",
  authors: [{ name: "Maksym Syromolot" }],
  openGraph: {
    title: "Maksym Syromolot — Full-Stack Developer",
    description:
      "Full-stack developer. Java, TypeScript, React, Node. Selected work and experience.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="color-scheme" content="dark" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,300;0,400;0,500;0,700;0,800;1,400&family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 fill=%22%230a0a0a%22/><text x=%2250%22 y=%2272%22 font-family=%22monospace%22 font-size=%2270%22 fill=%22%23ff5722%22 text-anchor=%22middle%22 font-weight=%22700%22>m</text></svg>"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
