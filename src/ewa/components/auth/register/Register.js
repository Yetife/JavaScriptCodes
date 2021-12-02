import React, {useState}from 'react';
import Input from '../../reusables/Input'
import img from '../../../../assets/background.svg'
import img2 from '../../../../assets/circle2.svg'
import Button from '../../reusables/Button'
import './register.css'

const Register = (props) => {
    
    let {setState} = props

    let initialData = {
            firstName: "", lastName: "", email: "", password: "", confirmPassword: "",
        }

    const [inputData, setInputData] = useState(initialData)

    function handleInput(e) {
        let data = {
             ...inputData, [e.target.name]: e.target.value
            }
            setInputData(data)
    }

    function registerUser() {
        console.log(inputData)
    }

    const inputFields = [
        {name: "firstName", label: "FirstName",  placeholder: "Enter your firstname"},
        {name: "lastName", label: "LastName", placeholder: "Enter your lastname"},
        {name: "email", label: "Email", placeholder: "Enter your email"},
        {name: "password", label: "Password", placeholder: "Enter your password"},
        {name: "confirmPassword",label: "Confirm Password" , placeholder: "Confirm your password"},
    ]
    
    return (
        <div className={"register_container"}>
            <div className={"register_header"}>
                <div className={"ewa_logo"}>
                </div>
                <button onClick={() => setState("login")}>
                    LOGIN
                </button>
            </div>
            <img className="top_circle" src={img} alt="circlebackground" />
            
            <div className="text_container">
                <h4>Welcome to ewa</h4>
                <p>Get access to amazing ewa deals from the comfort of your home</p>
            </div>

            <div className="form_container">
                {inputFields.map((field, index) =>
                    <Input value={inputData[field.name]} onChange={handleInput} key={index} field={field} />)}
            </div>

            <Button name="Register" onClick={registerUser}/>

            <img className="bottom_circle" src={img2} alt="circlebackground" />
        </div>
    );
};

export default Register;