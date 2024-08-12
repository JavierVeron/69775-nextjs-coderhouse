import ProductList from "./components/ProductList";
import productos from "@/app/data/productos.json";

export const metadata = {
  title: "Adidas Argentina",
  description: "Página de Adidas Argentina (Next.js)",
};

export default function Home() {
  return (
    <ProductList data={productos} category={"all"} />
  )
}
