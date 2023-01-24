import React, {useState} from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import {Rating, RatingValueType} from './components/Rating/Rating';

import UncontrolledAccordion from './components/UncontrolledAccordion/UncontrolledAccordion';
import {UnControlledRating} from './components/UnControlledRating/UnControlledRating';

import OnOffDUncontrolled from './components/OnOffDUncontrolled/OnOffDUncontrolled';
import OnOff from './components/OnOff/OnOff';

function App() {
    console.log("App")

    const [ratingValue, setRatingValue] = useState<RatingValueType>(4)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    const [on, setOn] = useState<boolean>(false)

    return (
        <div className={"App"}>

            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UnControlledRating />

            <Accordion titleValue={"Menu"} collapsed={accordionCollapsed} setCollapsed={setAccordionCollapsed}/>


            <OnOffDUncontrolled />
            <OnOff on={on} setOn={setOn}/>

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

function PageTitle (props: PageTitlePropsType) {
    return (
        <h1>{props.title}</h1>
    )
}






export default App;
