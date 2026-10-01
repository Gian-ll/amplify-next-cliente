"use client";

import Link from "next/link";
import { useAuthenticator } from "@aws-amplify/ui-react";

export default function NavBar() {
  const { signOut } = useAuthenticator();

  return (
    <nav style={{ display: "flex", gap: 16, padding: 16, alignItems: "center" }}>
      <Link href="/productos">Productos</Link>
      <Link href="/agregar">Agregar producto</Link>
      <button onClick={signOut} style={{ marginLeft: "auto" }}>
        Cerrar sesión
      </button>
    </nav>
  );
}