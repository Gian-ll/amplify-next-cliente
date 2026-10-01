import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./app.css";

import AuthenticatorWrapper from "./AuthenticatorWrapper";
import NavBar from "./NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mi tienda",
  description: "Gestión de productos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>    
        <AuthenticatorWrapper>
          <NavBar />
          <main style={{ padding: 16 }}>{children}</main>
        </AuthenticatorWrapper>
      </body>
    </html>
  );
}
