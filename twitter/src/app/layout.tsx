// src/app/layout.tsx
import "./globals.css";
import React from "react";

export const metadata = {
  title: "Twitter Clone",
  description: "Main layout",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}
