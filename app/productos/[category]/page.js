"use client"
import ProductCard from "@/app/components/ProductCard";
import productos from "@/app/data/productos.json";

const Productos = ({params}) => {
    const {category} = params;    
    const items = category == "all" ? productos : productos.filter(item => item.category == category);

    return (
        <div className="container mx-auto my-8 grid grid-cols-3">
            {items.map(item => (
                <ProductCard key={item.id} id={item.id} title={item.title} image={item.image} price={item.price} category={item.category} />
            ))}
        </div>
    )
}

export default Productos