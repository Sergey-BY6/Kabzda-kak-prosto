import React, {useState} from 'react';
import {MouseEvent} from 'react'



type RatingPropsType = {
    // value: 0 | 1 | 2 | 3 | 4 | 5
}

type ValueType = 0 | 1 | 2 | 3 | 4 | 5

export function UnControlledRating(props: RatingPropsType) {

    const [value, setValue] = useState<ValueType>(0)

    const changedValue = (values: ValueType) => {
        setValue(values)
    }

    return (
        <div>
            {/*<Star selected={value > 0}/><button onClick={() => changedValue(1)}>1</button>*/}
            {/*<Star selected={value > 1}/><button onClick={() => changedValue(2)}>2</button>*/}
            {/*<Star selected={value > 2}/><button onClick={() => changedValue(3)}>3</button>*/}
            {/*<Star selected={value > 3}/><button onClick={() => changedValue(4)}>4</button>*/}
            {/*<Star selected={value > 4}/><button onClick={() => changedValue(5)}>5</button>*/}
            <Star selected={value > 0} starId={1} callback={changedValue}/>
            <Star selected={value > 1} starId={2} callback={changedValue}/>
            <Star selected={value > 2} starId={3} callback={changedValue}/>
            <Star selected={value > 3} starId={4} callback={changedValue}/>
            <Star selected={value > 4} starId={5} callback={changedValue}/>
        </div>
    )
}



type StarPropsType = {
    selected: boolean
    starId: ValueType
    callback: (values: ValueType) => void
}

function Star(props: StarPropsType) {


    const starValue = () => {
        console.log(props.starId)
        props.callback(props.starId)
    }



    return props.selected ?
        <span onClick={starValue}><b>star</b></span> :
        <span onClick={starValue}>star</span>

    // if (props.selected) {
    //     return (
    //         <span><b>star</b> </span>
    //     )
    // }
    // else return <span>star </span>
}