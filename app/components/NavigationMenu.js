import Link from "next/link";
import productos from "@/app/data/productos.json";

const getUniqueCategories = (items) => {
    const categories = items.map(item => (item.category));

    return [...new Set(categories)]
}

const NavigationMenu = () => {
    const categories = getUniqueCategories(productos)

    return (
        <div className="container mx-auto my-8 text-center">
            {categories.map(category => (
                <Link href={`/productos/${category}`} className="mx-2 text-1xl font-bold">{category.toUpperCase()}</Link>
            ))}
        </div>
    )
}

export default NavigationMenu