import React, {useState} from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import {Rating, RatingValueType} from './components/Rating/Rating';
import {UnControlledRating} from './components/UnControlledRating/UnControlledRating';
import OnOff from './components/OnOff/OnOff';
import UncontrolledOnOff from './components/UncontrolledOnOff/UncontrolledOnOff';
import {UncontrollInput} from './NoStories/UncontrollInput';
import {ControlledInput} from './NoStories/ControlledInput';
import {AccordionControlled} from './NoStories/AccordionControlled';
import {Select} from './components/Select/Select';

function App() {
    console.log('App')

    const [ratingValue, setRatingValue] = useState<RatingValueType>(4)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    const [switchOn, setSwitchOn] = useState<boolean>(true)
    const [selectValue, setSelectValue] = useState<string | undefined>(undefined)

    const AccordionItemClick = (item: any) => {
        console.log(`Clicked item: ${item}`)
    }
    const setSelectValueCallback = (e: any) => {
        setSelectValue(e)
    }

    return (
        <div className={'App'}>


            <Select  value={selectValue}
                     onChange={setSelectValueCallback}
            items={ [
                {title:"Dimych", value: 1},
                {title:"Maria", value: 2},
                {title:"Oksana", value: 3},
            ]}
            />


            {/*<ControlledInput/>*/}
            {/*<UncontrollInput/>*/}

            {/*<AccordionControlled titleValue={'Menu'}*/}
            {/*                     collapsed={accordionCollapsed}*/}
            {/*                     onChange={() => setAccordionCollapsed(!accordionCollapsed)}*/}
            {/*                     items={[*/}
            {/*                         {title:"Dimych", value: 1},*/}
            {/*                         {title:"Valera",value: 2},*/}
            {/*                         {title:"Artem", value: 3},*/}
            {/*                         {title: "Victor", value: 4}*/}
            {/*                     ]}*/}
            {/*                     onClick={AccordionItemClick}*/}
            {/*/>*/}


            {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}
            {/*<UnControlledRating />*/}

            {/*<Accordion titleValue={"Menu"}*/}
            {/*           collapsed={accordionCollapsed}*/}
            {/*           onChange={() => setAccordionCollapsed(!accordionCollapsed)}*/}
            {/*/>*/}

            {/*<UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString() }*/}


            {/*<OnOff on={switchOn} onChange={setSwitchOn}/>*/}

            {/*<Accordion titleValue={"Users"} collapsed={false}/>*/}
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}


            {/*<ButtonONoF value={false}/>*/}
            {/*<ButtonONoF value={true}/>*/}


            {/*<OnOff />*/}

            {/*<UncontrolledAccordion titleValue={"Menu"}/>*/}
            {/*<UncontrolledAccordion titleValue={"Users"}/>*/}

            {/*<UnControlledRating />*/}

        </div>
    );
}


type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return (
        <h1>{props.title}</h1>
    )
}


export default App;
