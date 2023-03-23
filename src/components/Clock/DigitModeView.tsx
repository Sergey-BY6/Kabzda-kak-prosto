import {ClockViewPropsType} from './Clock';

export const DigitModeView: React.FC<ClockViewPropsType> = ({time, ...props}) => {

    const get2digit = (num: number) => num < 10 ? '0' + num : num

    const seconds = get2digit(time.getSeconds())
    const minutes = get2digit(time.getMinutes())
    const hours = get2digit(time.getHours())


    return (
        <div>
            <div>DigitMode: {`${hours}:${minutes}:${seconds}`}</div>
        </div>
    )
}