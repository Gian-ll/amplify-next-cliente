"use client";

import Link from "next/link";
import Navbar from "../components/Navbar";
import PruebateloLocal from "@/components/PruebateloLocal";
import Footer from "../components/Footer";
import CategoriaCard from "../components/CategoriaCard";
import { categorias } from "../data/categorias";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <section className="presentacion">
          <div className="presentacion-texto">
            <h1> Somos una <br />empresa</h1>

            <p>
              Una colección de vestidos para comprar o alquilar en diferentes eventos y ocasiones.
            </p>

            <Link href="/catalogo" className="boton">
              Explorar catálogo
            </Link>
          </div>

          <div className="presentacion-imagen">
            <img
              src="/imagenes/portada.jpg"
              alt="Colección de vestidos de Fara Collection"
            />
          </div>
        </section>

        <section className="catalogo-inicio">
          <h2>CATÁLOGO</h2>

          <div className="categorias-grid">
            {categorias.map((categoria) => (
              <CategoriaCard
                key={categoria.slug}
                categoria={categoria}
              />
            ))}
          </div>
        </section>
      </main>

      <PruebateloLocal />
      <Footer />
    </>
  );
}