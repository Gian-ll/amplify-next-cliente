interface Props {
    vestido: string;
}

export default function BotonContactar({ vestido }: Props) {
    const numeroWhatsApp = "519XXXXXXXX";

    const mensaje = `Hola, quisiera consultar sobre ${vestido} en Fara Collection.`;

    const enlace = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

    return (
        <a href={enlace} target="_blank" rel="noopener noreferrer" className="boton contactar">
            CONTACTAR
        </a>
    );
}