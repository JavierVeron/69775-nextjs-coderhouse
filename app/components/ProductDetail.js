import productos from "@/app/data/productos.json";
import Image from "next/image";

const ProductDetail = ({slug}) => {
    const item = productos.find(item => item.id == slug);

    return (
        <div className="container mx-auto my-16 grid grid-cols-2">
            <div className="mx-8">
                <Image src={`/images/${item.image}`} alt={item.title} width={1000} height={0} className="w-full" />
            </div>
            <div className="mx-8">
                <h1 className="text-3xl font-bold my-4">{item.title}</h1>
                <p className="text-2xl my-4">$ {item.price}</p>
                <p className="text-1xl my-4">{item.description}</p>
            </div>
        </div>
    )
}

export default ProductDetail