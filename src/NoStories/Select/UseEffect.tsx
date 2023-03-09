import {useEffect, useMemo, useState} from 'react'




export const UseEffectWork = () => {

    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    console.log("UseEffectWork")

    useEffect (()=> {
        console.log("useEffect every render")
    })

    useEffect (()=> {
        console.log("useEffect only first render (componentDidMount)")
    },[])

    useEffect (()=> {
        console.log("useEffect first render and every counter change")
    }, [counter])



    return (
        <div>
            Hello,{counter} {fake}
            <button onClick={() => setCounter(counter + 1)}>counter +</button>
            <button onClick={() => setFake(fake + 1)}>fake +</button>
        </div>
    )
}