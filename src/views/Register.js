import React from 'react';
import TopNav from '../components/Register/TopNav'
import Frame from '../components/Register/Frame'
import '../register.css';
import '../circle1.svg'

const Register = () => {
    return (
        <div className="register">
            <TopNav />
            {/*<img className={"top_circle"} src={require('../circle1.svg')} alt="circle1" />*/}
            <svg className={"top-circle"} width="70" height="150" viewBox="0 0 70 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 149.836C39.0901 147.263 70 114.741 70 75C70 35.2588 39.0901 2.73697 0 0.164032V26.6429C24.4981 29.146 43.6111 49.8409 43.6111 75C43.6111 100.159 24.4981 120.854 0 123.357V149.836Z" fill="#E8FFFC"/>
            </svg>
            <div>
                <Frame />
            </div>

        </div>
    );
};

export default Register;