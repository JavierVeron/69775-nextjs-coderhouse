"use client"
import { useRouter } from "next/navigation";
import Boton from "../components/Boton";

export const metadata = {
    title: "Administración - Adidas Argentina",
    description: "Página de Administración. Curso de Next.js en Coderhouse",
};

const Admin = () => {
    const router = useRouter();

    return (
        <div className="container-full text-center my-48">
            <h1 className="text-9xl font-bold my-4">Admin</h1>
            <h3 className="text-6xl font-bold my-4">Sitio en Construcción</h3>
            <p className="my-16"><Boton onclick={() => {router.back()}}>Volver</Boton></p>
        </div>
    )
}

export default Admin