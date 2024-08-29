"use client"
import { useRouter } from "next/navigation";
import Boton from "../components/Boton";

export const metadata = {
    title: "Carrito - Adidas Argentina",
    description: "Página de Carrito. Curso de Next.js en Coderhouse",
};

const Carrito = () => {
    const router = useRouter();

    return (
        <div className="container-full text-center my-48">
            <h1 className="text-9xl font-bold my-4">Carrito</h1>
            <h3 className="text-6xl font-bold my-4">Sitio en Construcción</h3>
            <p className="my-16"><Boton onclick={() => {router.back()}}>Volver</Boton></p>
        </div>
    )
}

export default Carrito