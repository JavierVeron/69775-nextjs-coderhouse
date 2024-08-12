import Image from "next/image"
import Link from "next/link"

const ProductCard = ({id, title, image, price, category}) => {
    return (
        <div className="card rounded-none mx-4">
            <p><Link href={`/producto/${id}`}><Image src={`/images/${image}`} alt={title} width={1000} height={0} className="w-full" /></Link></p>
            <p className="font-light my-4">{title}<br /><span className="text-slate-700">$ {price}</span><br /><span className="text-slate-300">{category}</span></p>
        </div>
    )
}

export default ProductCard