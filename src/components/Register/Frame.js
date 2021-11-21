import React from 'react';
import Text from './Text';
// import Input from './Input'
import backgroundCircle from '../../assets/circle2.svg'
import RegisterButton from './RegisterButton'

const Frame = () => {
    return (
        <div className={"frame-container"}>
            <Text />
            {/*<Input />*/}
            <img src={backgroundCircle} className={"bottom-circle"} alt={"circle"}/>
            <RegisterButton />
        </div>
    );
};

export default Frame;