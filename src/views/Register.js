import React from 'react';
import TopNav from '../components/Register/TopNav'
import Frame from '../components/Register/Frame'
import backgroundCircle from '../assets/background.svg'
import '../register.css';
import '../circle1.svg'

const Register = () => {
    return (
        <div className="register">
            <TopNav />
            <img className={"top-circle"} src={backgroundCircle} alt="circle1" />
            <div>
                <Frame />
            </div>

        </div>
    );
};

export default Register;