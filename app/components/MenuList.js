import Link from "next/link"
import { useState } from "react"

const MenuList = ({open, handleClose}) => {
    return (
        <aside className={`${open ? "opacity-100" : "opacity-0"}`}>
            <div onClick={handleClose}>[ X ]</div>
            <nav className="container mx-auto text-end">
                <Link href={"/nosotros"} className="mx-2 text-1xl font-bold">Nosotros</Link>
                <Link href={"/productos"} className="mx-2 text-1xl font-bold">Productos</Link>
                <Link href={"/carrito"} className="mx-2 text-1xl font-bold">Carrito</Link>
                <Link href={"/admin"} className="mx-2 text-1xl font-bold">Admin</Link>
            </nav>
        </aside>
    )
}

export default MenuList