import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "木里木外MULI - 高端定制家居",
  description: "木里木外MULI，源于对木的热爱，专注高端全屋定制。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full antialiased">
      <body className="min-h-full bg-white font-sans font-light text-muli-ink">
        {children}
      </body>
    </html>
  );
}
