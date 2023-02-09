import { useContext } from "react"
import { AppContext } from "../Context/AppContext"

export default function Navbar() {
    const val = useContext(AppContext)
    console.log(val)


    return <>
        <h1>Navbar</h1>
        <h2>theme is+ {val.theme}</h2>



    </>

}