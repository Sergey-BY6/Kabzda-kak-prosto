
import {useEffect, useMemo, useState} from 'react'



export const Clock = () => {

    return (
        <div>
            <DigitMode/>
        </div>
    )
}

const DigitMode = () => {

    const [time, setTime] = useState(new Date())
    console.log('DigitMode')


    useEffect(() => {
        const id = setInterval(() => {
            setTime(new Date())
        }, 1000)
        return () => {
            clearInterval(id)
        }
    }, [])


    const ger2digit = (num: number) => num < 10 ? '0' + num : num

    const seconds = ger2digit(time.getSeconds())
    const minutes = ger2digit(time.getMinutes())
    const hours = ger2digit(time.getHours())


    return (
        <div>
            <div>DigitMode: {`${hours}:${minutes}:${seconds}`}</div>
        </div>
    )
}

