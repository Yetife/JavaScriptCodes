import React, {Component} from 'react';
import TopNav from '../components/Register/TopNav'
import Frame from '../components/Register/Frame'
import backgroundCircle from '../assets/background.svg'
import Input from '../components/Register/Input'
import '../register.css';
import '../circle1.svg'
import axios from 'axios';

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            customerEmail: '',
            customerPassword: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8080/api/customer', this.state)
            .then(response => {console.log(response)})
    }

    render() {
        const {firstName, lastName, customerEmail, customerPassword} = this.state

        return (
            <div className="register">
                <TopNav />
                <img className={"top-circle"} src={backgroundCircle} alt="circle1" />
                <div>
                    <Frame />
                </div>

            <form onSubmit={this.handleSubmit}>
                <Input label="Email" fieldType="tel"  placeholder="Enter Email" name="customerEmail" value={customerEmail} onChange={this.handleChange}/>
                <Input label="First Name" fieldType="text" placeholder="Enter first Name" name="firstName"  value={firstName} onChange={this.handleChange}/>
                <Input label="Last Name" fieldType="text" placeholder="Enter last Name" name="lastName"  value={lastName} onChange={this.handleChange}/>
                <Input label="Password" fieldType="password" placeholder="Enter Password" name="customerPassword" value={customerPassword} onChange={this.handleChange}/>

                <button className="register_btn">
                    REGISTER
                </button>
            </form>
            </div>
        );
    }
};

export default Register;