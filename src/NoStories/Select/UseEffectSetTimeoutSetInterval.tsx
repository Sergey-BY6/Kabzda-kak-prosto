import {useEffect, useMemo, useState} from 'react'




export const UseEffectSetTimeout = () => {

    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    console.log("UseEffectSetTimeout")

    useEffect (()=> {
        setTimeout (()=> {
            console.log("setTimeout")
        }, 1000)
    },[])


    return (
        <div>
            Hello,{counter} {fake}
            <button onClick={() => setCounter(counter + 1)}>counter +</button>
            <button onClick={() => setFake(fake + 1)}>fake +</button>
        </div>
    )
}


export const UseEffectSetInterval = () => {

    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    console.log("UseEffectSetInterval")
    console.log(counter)

    useEffect (()=> {
        setInterval (()=> {
            console.log("tik" + counter)
            setCounter((state) => state + 1)
        }, 1000)
    },[])


    return (
        <div>
            Hello,counter: {counter} - fake: {fake}
            {/*<button onClick={() => setCounter(counter + 1)}>counter +</button>*/}
            {/*<button onClick={() => setFake(fake + 1)}>fake +</button>*/}
        </div>
    )
}