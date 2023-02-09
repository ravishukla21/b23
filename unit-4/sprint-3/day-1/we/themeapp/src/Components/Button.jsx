import { useContext } from "react"


import { AppContext } from "../Context/AppContext"

export default function Button({ onClick, btnText }) {
    const { theme } = useContext(AppContext)

    return (
        <>
            <button style={{
                background: theme === "dark" ? "black" : "white", color: theme === "dark" ? "white" : "black", padding: "7px", cursor: "pointer",
                border: theme === "dark" ? "1px solid white" : "1px solid black"}} onClick={onClick}>{btnText}</button>
        </>)
}