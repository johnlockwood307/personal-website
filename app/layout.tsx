import type { Metadata } from "next";
import "./globals.css";

import font from "@/app/ui/fonts";

export const metadata: Metadata = {
  title: "John's Personal Website",
  description: "Personal website containing my bio, projects, experience, education, and some albums I've been listening to.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.variable} ${font.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
