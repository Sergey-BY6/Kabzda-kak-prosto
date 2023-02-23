import React from 'react';


type TestComponentType = {
    value: number
}

export const TestComponent = (props: TestComponentType) => {
    console.log("RENDER-TEST-COMPONENT")
    return (
        <div>
            {props.value}
        </div>
    );
};


export const Test = React.memo(TestComponent)
