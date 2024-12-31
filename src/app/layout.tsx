import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Cool App",
  description: "Learn and grow with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">{children}</body>
    </html>
  );
}
