"use client"
import { useRouter } from "next/navigation";
import Boton from "../components/Boton";

const Nosotros = () => {
    const router = useRouter();

    return (
        <header className="container-full text-center my-48">
            <h1 className="text-9xl font-bold my-4">Nosotros</h1>
            <h3 className="text-6xl font-bold my-4">Sitio en Construcción</h3>
            <p className="my-16"><Boton onClick={() => {router.back()}}>Volver</Boton></p>
        </header>
    )
}

export default Nosotros