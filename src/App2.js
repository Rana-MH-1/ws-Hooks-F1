import {useEffect, useRef, useState} from 'react'
import Timer2 from './Componenets/Timer2'

const App2 = ()=>{
    //declare state
    const [text,setText] = useState(null)
    const [count, setCount] = useState(0)
    const [show, setShow] = useState(false)
    const [val,setVal] = useState(null)
    //declare ref ==> useRef
    const count2  = useRef(0)
    const textRef = useRef()
    //declare functions
    const Increment =()=>{
        setCount(count+1)
    }
    const Decrement =()=>{
        if(count>0){
            setCount(count-1)
        }
    }
    const Reset = ()=>{
        setCount(0)
    }
    const Increment_with_value =(val)=>{
        setCount(count + val)
    }
    //useEffect Hooks ==> Side Effects of comp
    useEffect(()=>{console.log('Iam in aside Effect function')
    }
    )
    return(
    
        <div>
            <h1>This is a ws of Hooks -- Hooks</h1>
            <h3>{count}</h3>
            <button onClick={Increment}>INCREMENT</button>
            <button onClick={Decrement}>DECREMENT</button>
            <button onClick={Reset}>RESET</button>
            <input onChange={(e)=> setVal(+e.target.value)} placeholder='type the number' />
            <button onClick={()=>Increment_with_value(val)}>Increment with value</button>
            <h2>{text}</h2>
            <input onChange={(e)=> setText(e.target.value)} />
            <hr/>
            <button onClick={()=> setShow(!show)}>{show? 'Hide Timer' : 'Show Timer'}</button>
            {show && <Timer2/>}
            <hr/>
            <h2>UseRef Hooks</h2>
            {/* UseRef create a ref of input ==> access the DOM Element and recuperate the value of the el */}
            <input  ref={textRef} placeholder='type the ref'/>
            <button onClick={()=>setText(textRef.current?.value)}>INCREMENT - useRef</button>
            <h4>{textRef.current?.value}</h4>
            
            
            
        </div>
    )
}

export default App2