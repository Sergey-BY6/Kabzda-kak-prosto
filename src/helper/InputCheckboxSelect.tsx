import React, {ChangeEvent, useState} from 'react';

const ControlledInput = () => {

    const [valueInput, setValueInput] = useState("")
    const [checkBox, setcheckBox] = useState(true)
    const [select, setselect] = useState<string | undefined>("2")

    const onChangeHandlerInput = (e: ChangeEvent<HTMLInputElement>) => {
        setValueInput(e.currentTarget.value)
    }

    const onChangeHandlerCheckBox = (e: ChangeEvent<HTMLInputElement>) => {
        setcheckBox(e.currentTarget.checked)
        console.log(e.currentTarget.checked)
    }

    const onChangeHandlerSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        setselect(e.currentTarget.value)
        console.log(e.currentTarget.value)
    }


    return (
        <div>
            <div>
                <><input value={valueInput} onChange={onChangeHandlerInput}/>value: {valueInput}</>
            </div>
            <div>
                <><input type={"checkbox"} checked={checkBox} onChange={onChangeHandlerCheckBox}/>task</>
            </div>
            <div>
                <select value={select} onChange={onChangeHandlerSelect}>
                    <option>none</option>
                    <option value="1">Minsk</option>
                    <option value="2">Moscow</option>
                    <option value="200">Kiev</option>
                </select>
            </div>
        </div>
    );
};
