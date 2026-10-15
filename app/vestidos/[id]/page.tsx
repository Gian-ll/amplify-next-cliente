import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import PruebateloLocal from "@/components/PruebateloLocal";
import Footer from "@/components/Footer";
import BotonContactar from "@/components/BotonContactar";
import { vestidos } from "@/data/vestidos";

interface Props {
    params: Promise<{
        id: string;
    }>;
}

export default async function DetalleVestidoPage({
    params,
}: Props) {
    const { id } = await params;
    const vestido = vestidos.find(
        (item) => item.id === id
    );
    
    if (!vestido) {
        notFound();
    }
    
    return (
        <>
            <Navbar />
            <main className="detalle-vestido">
                <div className="detalle-imagen">
                    <img src={vestido.imagen} alt={vestido.nombre}/>
                </div>
                
                <section className="detalle-informacion">
                    <h1>{vestido.nombre}</h1>
                    <p className="descripcion">{vestido.descripcion}</p>
                    <p className="precio-detalle"> Precio aproximado: S/ {vestido.precio.toFixed(2)} </p>

                    <BotonContactar vestido={vestido.nombre} />
                    
                    {!vestido.disponible && (
                        <p className="aviso-disponibilidad">
                            Para mas información sobre el vestido, contacta con nosotros.
                        </p>
                    )}
                </section>
            </main>

            <PruebateloLocal />
            <Footer />
        </>
    );
}