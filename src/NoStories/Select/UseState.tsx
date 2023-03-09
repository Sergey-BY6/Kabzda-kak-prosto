import {useMemo, useState} from 'react'


const generateData = () => {
    console.log("GenerateData")
    return 555554
}

export const UseStateWork = () => {
    console.log("UseStateWork")

    // const initValue = useMemo(generateData, [])

    const [counter, setCounter] = useState(generateData)

    const changer = (state: number) => {
        return state + 1
    }

    return (
        <div>
            <button onClick={() => setCounter(changer)}>+</button>
            {counter}
        </div>
    )
}