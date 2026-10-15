import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import PruebateloLocal from "@/components/PruebateloLocal";
import Footer from "@/components/Footer";
import VestidoCard from "@/components/VestidoCard";
import { categorias } from "@/data/categorias";
import { vestidos } from "@/data/vestidos";

interface Props {
    params: Promise<{
        categoria: string;
    }>;
}

export default async function CategoriaPage({ params }: Props) {
    const { categoria } = await params;

    const categoriaActual = categorias.find(
        (item) => item.slug === categoria
    );

    if (!categoriaActual) {
        notFound();
    }

    const vestidosCategoria = vestidos.filter(
        (vestido) => vestido.categoria === categoria
    );

    return (
        <>
            <Navbar />

            <main className="pagina-catalogo">
                <h1>{categoriaActual.nombre}</h1>
                <p>{categoriaActual.descripcion}</p>
                
                {vestidosCategoria.length > 0 ? (
                    <div className="vestidos-grid">
                        {vestidosCategoria.map((vestido) => (
                            <VestidoCard key={vestido.id} vestido={vestido}/>
                        ))}
                    </div>
                ) : (
                    <p> Próximamente agregaremos vestidos a esta categoría. </p>
                )}
            </main>

            <PruebateloLocal />
            <Footer />
        </>
    );
}