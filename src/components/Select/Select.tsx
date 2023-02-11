import React, {ChangeEvent} from 'react';
import {RatingValueType} from '../Rating/Rating';
import {Button} from '@mui/material';


type ItemType = {
    title: string
    value: any
}


type SelectPropsType = {
    value: any
    onChange: (value: any)=>void
    items: ItemType[]
}

export function Select (props: SelectPropsType) {

    const setValueHandler = (e: ChangeEvent<HTMLSelectElement>) => {
            props.onChange(e.currentTarget.value)
    }

    return (
        <div>
          <div>-{props.value}-</div>
            <select value={props.value} onChange={setValueHandler}>
                <option>none</option>
            {props.items.map( el => {
                return (
                        <option value={el.value}>{el.title}</option>
                    // <div>{el.title}</div>
                    )
            })}
            </select>
        </div>
    )
}
