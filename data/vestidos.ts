export interface Vestido {
    id: string;
    nombre: string;
    categoria: string;
    imagen: string;
    descripcion: string;
    precio: number;
    disponible: boolean;
}

export const vestidos: Vestido[] = [
    {
        id: "vestido-01",
        nombre: "Vestido Elegante",
        categoria: "gala",
        imagen: "/vestidos/gala/vestido-01.jpg",
        descripcion: "Vestido elegante ideal para eventos formales.",
        precio: 250,
        disponible: true
    },

    {
        id: "vestido-02",
        nombre: "Vestido Clásico",
        categoria: "gala",
        imagen: "/vestidos/gala/vestido-02.jpg",
        descripcion: "Diseño clásico con detalles elegantes.",
        precio: 280,
        disponible: true
    },

    {
        id: "vestido-03",
        nombre: "Vestido de Noche",
        categoria: "gala",
        imagen: "/vestidos/gala/vestido-03.jpg",
        descripcion: "Vestido para cenas y celebraciones especiales.",
        precio: 300,
        disponible: true
    },

    {
        id: "vestido-04",
        nombre: "Vestido Juvenil",
        categoria: "xv",
        imagen: "/vestidos/xv/vestido-01.jpg",
        descripcion: "Vestido para una celebración de quince años.",
        precio: 450,
        disponible: true
    },

    {
        id: "vestido-05",
        nombre: "Vestido Corto Floral",
        categoria: "cortos",
        imagen: "/vestidos/cortos/vestido-01.jpg",
        descripcion: "Vestido corto con diseño floral.",
        precio: 150,
        disponible: true
    },

    {
        id: "vestido-06",
        nombre: "Vestido Floral",
        categoria: "floreados",
        imagen: "/vestidos/floreados/vestido-01.jpg",
        descripcion: "Vestido con estampado floral.",
        precio: 180,
        disponible: true
    },

    {
        id: "vestido-07",
        nombre: "Vestido de Fiesta",
        categoria: "fiesta",
        imagen: "/vestidos/fiesta/vestido-01.jpg",
        descripcion: "Vestido para celebraciones y reuniones.",
        precio: 220,
        disponible: true
    }
];