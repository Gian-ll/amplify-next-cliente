import Link from "next/link";
import type { Categoria } from "@/data/categorias";

interface Props {
    categoria: Categoria;
}

export default function CategoriaCard({ categoria }: Props) {
    return (
        <Link href={`/catalogo/${categoria.slug}`} className="categoria-card">
            <img src={categoria.imagen} alt={categoria.nombre}/>
            
            <h3>{categoria.nombre}</h3>
            <p>{categoria.descripcion}</p>
        </Link>
    );
}