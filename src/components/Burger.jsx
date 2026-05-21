import { useState } from "react"
import "./Burger.css"

export default function Burger({ children }) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button className="burger-btn" onClick={() => setOpen(o => !o)}>
                ☰
            </button>
            {open && (
                <nav className="burger-menu">
                    {children}
                </nav>
            )}
        </>
    )
}