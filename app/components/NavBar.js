import Image from "next/image"
import Menu from "./Menu"
import Link from "next/link"

const NavBar = () => {
    return (
        <header className="container mx-auto my-8 grid grid-cols-2">
            <div>
                <Link href={"/"}>
                    <Image src={"/images/adidas-logo.jpg"} alt={"Adidas Argentina"} width={96} height={0} />
                </Link>
            </div>
            <div className="text-end">
                <Menu />
            </div>
        </header>
    )
}

export default NavBar