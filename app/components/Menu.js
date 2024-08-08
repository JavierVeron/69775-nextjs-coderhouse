import Link from "next/link"

const Menu = () => {
    return (
        <nav className="container text-center p-1">
            <Link href={"/nosotros"}>Nosotros</Link>
            <Link href={"/catalogo"}>Catálogo</Link>
            <Link href={"/carrito"}>Carrito</Link>
            <Link href={"/admin"}>Admin</Link>
        </nav>
    )
}

export default Menu