import React, {useMemo, useState} from 'react';
import {Select1} from './Select1';
import {Select3} from './Select3';
import {Select2} from './Select2';
import {Test} from './TestComponent';


type SelectPropsType = {}


export const SelectUseMemoHomeworkM: React.FC<SelectPropsType> = (props) => {
    console.log('MAIN-SELECT-RENDER')

    const [selectValue1, setSelectValue1] = useState<string | undefined>('Minsk')
    const [selectValue2, setSelectValue2] = useState<string | undefined>('Kiev')
    const [selectValue3, setSelectValue3] = useState<string | undefined>('Moscow')
    const [counter, setCounter] = useState<number>(0)
    const [forTestValue, setForTestValue] = useState([1, 2, 3, 4, 5])

    const setSelectValueCallback1 = (e: any) => {
        setSelectValue1(e)
    }
    const setSelectValueCallback2 = (e: any) => {
        setSelectValue2(e)
    }
    const setSelectValueCallback3 = (e: any) => {
        setSelectValue3(e)
    }

    const [stateForSelect, setStateForSelect] = useState ([
        {countryId: 1, city: 'Minsk', populationSize: 1100000},
        {countryId: 1, city: 'Mogilev', populationSize: 310000},
        {countryId: 1, city: 'Brest', populationSize: 410000},
        {countryId: 2, city: 'Kiev', populationSize: 3700000},
        {countryId: 2, city: 'Lvov', populationSize: 1700000},
        {countryId: 2, city: 'Chernigov', populationSize: 770000},
        {countryId: 3, city: 'Moscow', populationSize: 1200000},
        {countryId: 3, city: 'Smolensk', populationSize: 2200000},
        {countryId: 3, city: 'Piter', populationSize: 3200000}
    ])



    // С городами багу не пофиксил, создал новый компоненты Test, с ним useMemo работате(смотреть в консоли)

    const arrayForBlr = useMemo(() => {
        return stateForSelect.filter(el => el.countryId === 1)
    }, [stateForSelect])

    const arrayForU = useMemo(() => {
        console.log('llll')
        return stateForSelect.filter(el => el.countryId === 2)
    }, [stateForSelect])

    const arrayForR = useMemo(() => {
        return stateForSelect.filter(el => el.countryId === 3)
    }, [stateForSelect])


    const onClickHandler = () => {
        setCounter(counter + 1)
    }


    const forTestValuePlus1 = () => {
        setForTestValue([...forTestValue, 10])
    }

    const test = useMemo(() => {
        return forTestValue.filter(el => el > 3).length
    }, [forTestValue])

    return (
        <div>
            <button onClick={onClickHandler}>+</button>
            {counter}
            <button onClick={forTestValuePlus1}>+</button>
            <Select1 value={selectValue1}
                     onChange={setSelectValueCallback1}
                     items={arrayForBlr}/>

            <Select2 value={selectValue2}
                     onChange={setSelectValueCallback2}
                     items={arrayForU}/>

            <Select3 value={selectValue3}
                     onChange={setSelectValueCallback3}
                     items={arrayForR}/>
            <Test value={test}/>
        </div>
    )
}

export const SelectUseMemoHomework = React.memo(SelectUseMemoHomeworkM)
