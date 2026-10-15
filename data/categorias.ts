export interface Categoria {
    nombre: string;
    slug: string;
    imagen: string;
    descripcion: string;
}

export const categorias: Categoria[] = [
    {
        nombre: "Vestidos de Gala",
        slug: "gala",
        imagen: "/imagenes/categorias/gala.jpg",
        descripcion: "Vestidos elegantes para eventos especiales."
    },
    
    {
        nombre: "Vestidos de XV",
        slug: "xv",
        imagen: "/imagenes/categorias/xv.jpg",
        descripcion: "Vestidos para celebrar una ocasión inolvidable."
    },

    {
        nombre: "Vestidos Cortos",
        slug: "cortos",
        imagen: "/imagenes/categorias/cortos.jpg",
        descripcion: "Diseños para fiestas y diferentes ocasiones."  
    },

    {
        nombre: "Vestidos Floreados",
        slug: "floreados",
        imagen: "/imagenes/categorias/floreados.jpg",
        descripcion: "Diseños con estampados florales."  
    },

    {
        nombre: "Vestidos de Fiesta",
        slug: "fiesta",
        imagen: "/imagenes/categorias/fiesta.jpg",
        descripcion: "Vestidos para disfrutar de cada celebración."
    }
];