"use client"

const Boton = ({children, className, args}) => {
    return (
        <button className={`rounded-full bg-[#334155] text-white p-4 ${className}`} {...args}>{children}</button>
    )
}

export default Boton