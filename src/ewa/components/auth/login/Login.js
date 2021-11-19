import React, {useState} from 'react';
import Input from '../../reusables/Input'
import './login.css'
import img from '../../../../assets/background.svg'
import img2 from '../../../../assets/circle2.svg'
import Button from '../../reusables/Button'

const Login = (props) => {

    let {setState} = props
    
    const inputFields = [
        {label: "Email",  placeholder: "Enter your email"},
        {label: "Password" , placeholder: "Enter your password"},
    ]

    return (
        <div className={"login_container"}>
            <div className={"login_header"}>
                <div className={"ewa_logo"}>

                </div>

                <button onClick={() => setState("register")}>
                    REGISTER
                </button>
            </div>
            <img className="top_circle" src={img} alt="circlebackground" />
            <div className="text_container">
                <h4>Welcome to ewa</h4>
                <p>Get access to amazing ewa deals from the comfort of your home</p>
            </div>

            <div className="form_container">
                {inputFields.map((field, index) => <Input key={index} field={field}/>)}
            </div>

            <Button name="login" />

            <img className="bottom_circle" src={img2} alt="circlebackground" />
        </div>
    );
};

export default Login;