import Link from "next/link";
import type { Vestido } from "@/data/vestidos";

interface Props {
    vestido: Vestido;
}

export default function VestidoCard({ vestido }: Props) {
    return (
        <article className="vestido-card">
            <Link href={`/vestidos/${vestido.id}`}>
                <img src={vestido.imagen} alt={vestido.nombre}/>
                <h3>{vestido.nombre}</h3>
            </Link>
            
            <p>Precio aproximado</p>
            
            <p className="precio"> S/ {vestido.precio.toFixed(2)} </p>
            
            {!vestido.disponible && (
                <p>No disponible</p>
            )}
        </article>
    );
}