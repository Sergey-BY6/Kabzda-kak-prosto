import React, {ChangeEvent, KeyboardEvent, useEffect, useState} from 'react';
import s from './../Select.module.css'



type ItemType = {
    countryId: number
    city: string
    populationSize: number
}


type Select2MPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType []
}


const Select2M: React.FC<Select2MPropsType> = (props) => {

    console.log("SELECT2 RENDER")
    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValuue] = useState(props.value)

    const selectedItem = props.items.find(el => el.city === props.value)
    const hoveredItem = props.items.find(el => el.city === hoveredElementValue)

    // useEffect(() => {
    //     setHoveredElementValuue(props.value)
    // }, [props.value])


    const setValueHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        props.onChange(e.currentTarget.value)
        console.log(e.currentTarget.value)
    }

    const toggleItems = () => {
        setActive(!active)
    }

    const onItemClick = (e: string) => {
        props.onChange(e)
        toggleItems()
        console.log(selectedItem)
    }

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].city === hoveredElementValue) {
                    const pretendentElement = e.key === 'ArrowDown' ?
                        props.items[i + 1]
                        :
                        props.items[i - 1]
                    if (pretendentElement) {
                        props.onChange(pretendentElement.city)
                        return
                    }
                }
            }
            if (!selectedItem)
                props.onChange(props.items[0].city)
        }
        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false)
        }
        console.log('hi')
    }


    return (
        <>
            {/*<h3>-{props.value}-</h3>*/}
            {/*<select value={props.value} onChange={setValueHandler}>*/}
            {/*    <option>none</option>*/}
            {/*    {props.items.map(el => {*/}
            {/*        return (*/}
            {/*            <option key={el.value} value={el.title}>{el.title}</option>*/}
            {/*            // <div>{el.title}</div>*/}
            {/*        )*/}
            {/*    })}*/}
            {/*</select>*/}


            <div className={s.select}
                 onKeyUp={onKeyUp}
                 tabIndex={0}
            >
                <span className={s.main} onClick={toggleItems}>{props.value}</span>
                {
                    active &&
                    <div className={s.item}>
                        {props.items.map(el => <div
                            onMouseEnter={() => setHoveredElementValuue(el.city)}
                            className={s.item + ' ' + (hoveredItem === el ? s.selected : '')}
                            onClick={() => onItemClick(el.city)}
                            key={el.countryId}>-{el.city}-</div>)}
                    </div>}
            </div>
        </>
    )
}


export const Select2 = React.memo(Select2M)
