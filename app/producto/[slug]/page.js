"use client"
import ProductDetail from "@/app/components/ProductDetail";

const Producto = ({params}) => {
    const {slug} = params;

    return (
        <>
            <ProductDetail slug={slug} />
        </>
    )
}

export default Producto