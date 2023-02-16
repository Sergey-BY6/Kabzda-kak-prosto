import React, {useReducer, useState} from 'react';
import {Reducer, TOOGLE_COLLAPSED} from './reducer';

type AccordionPropsType = {
    titleValue: string
    // collapsed: boolean
}




function UncontrolledAccordionM (props: AccordionPropsType) {


    // const [collapsed, setCollapsed] = useState(true)
    const [state, dispatch] = useReducer(Reducer,{collapsed: false})


        return (
            <div>
                {/*<AccordionTitle title={props.titleValue} onClick={()=> {setCollapsed(!collapsed)}}/>*/}
                <AccordionTitle title={props.titleValue} onClick={()=> {dispatch({type: TOOGLE_COLLAPSED })}}/>
                {!state.collapsed && <AccordionBody />}
            </div>
        )
}

const UncontrolledAccordion = React.memo(UncontrolledAccordionM)




type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitleM (props: AccordionTitlePropsType) {
    return (
        <h3 onClick={ () => props.onClick()}>--{props.title}--</h3>
    )
}

const AccordionTitle = React.memo(AccordionTitleM)





function AccordionBodyM () {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

const AccordionBody = React.memo(AccordionBodyM)

export default UncontrolledAccordion