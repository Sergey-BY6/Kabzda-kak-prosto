import {useEffect, useState} from 'react'


export const UseEffectReset = () => {

    const [counter, setCounter] = useState(1)

    console.log('Component rendered' + counter)

    useEffect(() => {
            console.log('Effect occured' + counter)
        return () => {
            console.log('RESET EFFECT' + counter)
        }
    }, [counter])


    const increase = ()=> setCounter(counter + 1)

    return (
        <div>
            Hello, counter: {counter} <button onClick={increase}>+</button>
        </div>
    )
}


export const SetTimeoutReset = () => {

    const [text, setText] = useState("")


    console.log('Component rendered' + text)

    useEffect(() => {
        const timeoutId = setTimeout(()=>{
            console.log("Timeout")
            setText("5 seconds passed")
        }, 5000)
return () => {
            clearTimeout(timeoutId)
}
    }, [])

    return (
        <div>
            Typed text: {text}
        </div>
    )
}
