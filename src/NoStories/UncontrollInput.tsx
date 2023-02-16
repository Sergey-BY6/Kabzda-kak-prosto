import React, {useRef, useState, ChangeEvent} from 'react';



export const UncontrollInputM = () => {

    const [value, setValue] = useState("")

    const ref = useRef<HTMLInputElement>(null)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    const onButtonSaveValue = () => {
        if (ref.current) {
            setValue(ref.current.value)
        }
    }

    return (
        <div>
            <div>
                <> <input onChange={onChangeHandler} />-{value}-</>
            </div>
            <div>
                <><input ref={ref}/><button onClick={onButtonSaveValue}>save</button>-actual value:{value}</>
            </div>
        </div>

    );
};

export const UncontrollInput = React.memo(UncontrollInputM)