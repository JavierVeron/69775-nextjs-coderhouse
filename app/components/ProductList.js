import ProductCard from "./ProductCard"

const ProductList = ({data, category}) => {
    const items = category == "all" ? data : data.filter(item => item.category == category);
    
    return (
        <div className="container mx-auto my-8 grid grid-cols-3">
            {items.map((item, index) => (
                <ProductCard key={index} id={item.id} title={item.title} image={item.image} price={item.price} category={item.category} />
            ))}
        </div>
    )
}

export default ProductList