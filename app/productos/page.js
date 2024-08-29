import ProductList from "../components/ProductList";
import productos from "@/app/data/productos.json";

export const metadata = {
    title: "Productos - Adidas Argentina",
    description: "Página de Productos. Curso de Next.js en Coderhouse",
};

const Productos = () => {        
    return (
        <>
            <ProductList data={productos} category={"all"} />
        </>
    )
}

export default Productos