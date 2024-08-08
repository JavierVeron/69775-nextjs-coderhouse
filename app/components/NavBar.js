import Image from "next/image"
import Menu from "./Menu"

const NavBar = () => {
    return (
        <header className="container-full text-center p-8">
            <Image src={"/images/adidas-logo.jpg"} alt={"Adidas Argentina"} width={96} height={0} />
            <Menu />
        </header>
    )
}

export default NavBar