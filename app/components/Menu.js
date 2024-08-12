"use client"
import { useState } from "react"
import MenuList from "./MenuList";

const Menu = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {setOpen(true)};
    const handleClose = () => {setOpen(false)};

    return (
        <div>
            <div onClick={handleOpen}>[ Menú ]</div>
            <MenuList open={open} handleClose={handleClose} />
        </div>
    )
}

export default Menu