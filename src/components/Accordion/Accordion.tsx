import React from 'react';

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    setCollapsed: (value: boolean) => void
}

function Accordion (props: AccordionPropsType) {
        return (
            <div>
                <AccordionTitle title={props.titleValue} collapsed={props.collapsed} setCollapsed={props.setCollapsed}/>
                {props.collapsed && <AccordionBody />}
            </div>
        )
}


type AccordionTitlePropsType = {
    title: string
    collapsed: boolean
    setCollapsed: (value: boolean) => void

}

function AccordionTitle (props: AccordionTitlePropsType) {
    return (
        <h3 onClick={()=> props.setCollapsed(!props.collapsed)}>{props.title}</h3>
    )
}



function AccordionBody () {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}


export default Accordion