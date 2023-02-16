import React from 'react';

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
}



function AccordionM (props: AccordionPropsType) {
        return (
            <div>
                <AccordionTitle title={props.titleValue}
                                onChange={props.onChange}
                />
                {props.collapsed && <AccordionBody />}
            </div>
        )
}

const Accordion = React.memo(AccordionM)




type AccordionTitlePropsType = {
    title: string
    onChange: () => void

}

function AccordionTitleM (props: AccordionTitlePropsType) {
    return (
        <h3 onClick={props.onChange}>{props.title}</h3>
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



export default Accordion