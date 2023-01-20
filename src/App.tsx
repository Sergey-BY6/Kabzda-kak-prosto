import React from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import {Rating} from './components/Rating/Rating';
import ButtonONoF from "./components/OnOffMy/OnOf"
import OnOff from './components/OnOffD/OnOff';
import UncontrolledAccordion from './components/UncontrolledAccordion/UncontrolledAccordion';
import {UnControlledRating} from './components/UnControlledRating/UnControlledRating';

function App() {
    console.log("App")
    return (
        <div className={"App"}>
            {/*<Accordion titleValue={"Menu"} collapsed={true}/>*/}
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
            <OnOff />

            <UncontrolledAccordion titleValue={"Menu"}/>
            {/*<UncontrolledAccordion titleValue={"Users"}/>*/}

            <UnControlledRating />


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
