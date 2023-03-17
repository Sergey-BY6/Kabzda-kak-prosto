import {useEffect, useMemo, useState} from 'react'


export const UseEffectSetTimeout = () => {

    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    console.log('UseEffectSetTimeout')

    useEffect(() => {
        setTimeout(() => {
            console.log('setTimeout')
        }, 1000)
    }, [])


    return (
        <div>
            Hello,{counter} {fake}
            <button onClick={() => setCounter(counter + 1)}>counter +</button>
            <button onClick={() => setFake(fake + 1)}>fake +</button>
        </div>
    )
}


export const UseEffectSetInterval = () => {

    // const [fake, setFake] = useState(1)
    // const [counter, setCounter] = useState(1)
    const [time, setTime] = useState(new Date())

    console.log('UseEffectSetInterval')
    // console.log(counter)

    // useEffect (()=> {
    //     setInterval (()=> {
    //         console.log("tik" + counter)
    //         setCounter((state) => state + 1)
    //     }, 1000)
    // },[])


    // return (
    //     <div>
    //         Hello,counter: {counter} - fake: {fake}
    //         {/*<button onClick={() => setCounter(counter + 1)}>counter +</button>*/}
    //         {/*<button onClick={() => setFake(fake + 1)}>fake +</button>*/}
    //     </div>
    // )

    useEffect(() => {
        const id = setInterval(() => {
            setTime(new Date())
        }, 1000)
        return () => {
            clearInterval(id)
        }
    }, [])

    // let times = new Intl.DateTimeFormat ("ru", {
    //     hour: 'numeric',
    //     minute: 'numeric',
    //     second: 'numeric'
    // }).format(time)
    //

    const ger2digit = (num: number) => num < 10 ? '0' + num : num

    const seconds = ger2digit(time.getSeconds())
    const minutes = ger2digit(time.getMinutes())
    const hours = ger2digit(time.getHours())


    return (
        // <div>Hello, counter: {times}</div>
        <div>
            <div>Hello, counter: {`${hours}:${minutes}:${seconds}`}</div>
        </div>
    )
}
