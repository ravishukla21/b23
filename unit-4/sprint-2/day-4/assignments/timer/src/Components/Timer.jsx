import { useEffect, useState } from "react"

export default function Timer() {
    const [count, setcount] = useState(10)
    useEffect(() => {
        

        const intervalid = setInterval(() => {
            console.log("setinterval",Date.now())
            setcount((prevcount) => {
                if (prevcount <= 1) {
                    clearInterval(intervalid)
                    return 0
                }
                console.log(prevcount)

                return prevcount - 1



            })



        }, 1000)

    return ()=>{
        clearInterval(intervalid)
    }


    }, [])


    return (<>


        count:{count}

    </>)
}