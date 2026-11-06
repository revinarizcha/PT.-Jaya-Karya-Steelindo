import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PT Jaya Karya Steelindo | Steel Distribution",
  description:
    "Solusi perdagangan dan distribusi besi serta baja untuk kebutuhan konstruksi, pembangunan, dan industri.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
