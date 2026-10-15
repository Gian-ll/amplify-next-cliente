import Navbar from "@/components/Navbar";
import PruebateloLocal from "@/components/PruebateloLocal";
import Footer from "@/components/Footer";
import CategoriaCard from "@/components/CategoriaCard";
import { categorias } from "@/data/categorias";

export default function CatalogoPage() {
    return (
        <>
            <Navbar />
            
            <main className="pagina-catalogo">
                <h1>Nuestras categorías</h1>
                <p> Descubre nuestros vestidos para cada ocasión. </p>
                
                <div className="categorias-grid">
                    {categorias.map((categoria) => (
                        <CategoriaCard key={categoria.slug} categoria={categoria} />
                    ))}
                </div>
            </main>
            
            <PruebateloLocal />
            <Footer />
        </>
    );
}