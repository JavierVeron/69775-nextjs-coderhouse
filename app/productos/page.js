import ProductList from "../components/ProductList";
import productos from "@/app/data/productos.json";

const Productos = () => {        
    return (
        <>
            <ProductList data={productos} category={"all"} />
        </>
    )
}

export default Productos