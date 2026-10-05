"use client";

import Link from "next/link";
import { useAuthenticator } from "@aws-amplify/ui-react";

export default function NavBar() {
  const { signOut } = useAuthenticator();

  return (
    <nav className="site-nav">
      <Link href="/productos">Productos</Link>
      <Link href="/agregar">Agregar producto</Link>
      <button onClick={signOut} className="signout">
        Cerrar sesión
      </button>
    </nav>
  );
}
