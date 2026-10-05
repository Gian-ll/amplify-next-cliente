import type { Metadata } from "next";
import { Bodoni_Moda, Jost } from "next/font/google";
import "./app.css";

import AuthenticatorWrapper from "./AuthenticatorWrapper";
import NavBar from "./NavBar";

const display = Bodoni_Moda({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  adjustFontFallback: false,
  variable: "--font-display",
});

const sans = Jost({ subsets: ["latin"], variable: "--font-sans" });

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
    <html lang="es" className={`${display.variable} ${sans.variable}`}>
      <body>
        <AuthenticatorWrapper>
          <NavBar />
          <main className="site-main">{children}</main>
        </AuthenticatorWrapper>
      </body>
    </html>
  );
}
