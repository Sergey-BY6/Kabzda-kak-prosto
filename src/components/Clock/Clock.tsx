import {useEffect, useState} from 'react'
import {DigitModeView} from './DigitModeView';
import {AnalogModeView} from './AnalogModeView';


export type ClockViewPropsType = {
    time: Date
}


type ClockPropsType = {
    mode: "digital" | "analog"
}


export const Clock: React.FC<ClockPropsType> = (
    {mode,
        ...props}) => {

    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const id = setInterval(() => {
            setTime(new Date())
        }, 1000)
        return () => {
            clearInterval(id)
        }
    }, [])


    let view

    switch (mode) {
        case "analog" : {
            view = <AnalogModeView time={time}/>
            break
        }
        case "digital" :
        default: {
            view = <DigitModeView time={time}/>
        }
    }

    return (
        <div>
            {view}
        </div>
    )
}






