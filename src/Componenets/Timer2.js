import { useState,useEffect } from "react"

const Timer2 = () =>{
    const [timer, setTimer] = useState(0)
    //useEffect
    useEffect(()=> {setInterval(()=>setTimer(timer+1),1000)},[timer])
    return(
        <div>
            <h2>Component Timer has mounted since {timer}</h2>

        </div>
    )
}

export default Timer2