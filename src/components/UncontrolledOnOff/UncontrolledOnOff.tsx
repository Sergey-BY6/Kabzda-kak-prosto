import React, {useState} from 'react';

type PropsType = {
    onChange: (on: boolean) => void
}


const UncontrolledOnOffM: React.FC<PropsType> = (props) => {


    let [on, setOn] = useState(false)

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: on ? 'green' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        padding: '2px',
        backgroundColor: on ? 'white' : 'red'
    }
    const indicstorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: on ? 'green' : 'red'
    }

    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }
    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }


    return (
        <div>
            <div style={onStyle}
                 onClick={onClicked}>On
            </div>
            <div style={offStyle}
                 onClick={offClicked}>Off
            </div>
            <div style={indicstorStyle}></div>
        </div>
    );
};

const UncontrolledOnOff = React.memo(UncontrolledOnOffM)

export default UncontrolledOnOff;