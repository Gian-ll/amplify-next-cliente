
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fara Collection",
  description:
    "Catálogo de vestidos para comprar o alquilar en Fara Collection.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
