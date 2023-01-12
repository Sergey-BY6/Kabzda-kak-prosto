import React from 'react';
import s from "./OnOf.module.css"

type ButtonONoFType = {
    value: boolean
}


const ButtonONoF: React.FC<ButtonONoFType> = (props) => {



    let colorButtonGreen =  props.value && s.green
    let colorButtonRed =  !props.value && s.red
    let colorRadio =  props.value ? s.greenRadio : s.redRadio



    return (
        <div className={s.button}>
            <button onClick={()=>{}} className={`${s.buttonOn} ${colorButtonGreen}`}>on</button>
            <button onClick={()=>{}} className={`${s.buttonOff} ${colorButtonRed}`}>off</button>
            <div className={`${s.radio} ${colorRadio}` }></div>
        </div>
    );
};

export default ButtonONoF;