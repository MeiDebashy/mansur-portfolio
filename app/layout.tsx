import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mansur Web Studio — High-Converting Web Design",
  description:
    "Premium websites for serious businesses. Modern, conversion-focused web design for startups and online businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
