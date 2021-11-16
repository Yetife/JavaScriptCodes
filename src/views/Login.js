import React from 'react';
import '../register.css';

const Login = () => {
    return (
        <div>
            <div className="container">
                <div className="login">
                    <div className="topNav">
                        <a href="register.html">
                            <div className="top_nav_btn">REGISTER</div>
                        </a>
                    </div>
                    {/*<img className="top-circle" src="assets/background.svg" alt=""/>*/}
                    <svg className={"top-circle"} width="70" height="150" viewBox="0 0 70 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 149.836C39.0901 147.263 70 114.741 70 75C70 35.2588 39.0901 2.73697 0 0.164032V26.6429C24.4981 29.146 43.6111 49.8409 43.6111 75C43.6111 100.159 24.4981 120.854 0 123.357V149.836Z" fill="#E8FFFC"/>
                    </svg>
                        <div className="frame-container">
                            <div className="intro-text">
                                <h3>Welcome To Ewa</h3>
                                <p>Where your cravings for beans are satisfied</p>
                            </div>
                            <div className="input-container">
                                <label>
                                    Email
                                </label>
                                <input type="tel"
                                       name="email"
                                       placeholder="Enter Email" className="login_input"/>
                                    <label>
                                        Password
                                    </label>
                                    <input type="password"
                                           name="password"
                                           placeholder="Enter your password" className="login_input"/>

                            </div>
                            {/*<img className="bottom-circle"*/}
                            {/*     src="assets/circle2.svg"*/}
                            {/*     alt="circlebackground"/>*/}
                            <svg className={"bottom-circle"} width="70" height="150" viewBox="0 0 70 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M70 0.164008C30.9098 2.73694 0 35.2588 0 75C0 114.741 30.9098 147.263 70 149.836V123.357C45.5019 120.854 26.3889 100.159 26.3889 75C26.3889 49.841 45.5019 29.146 70 26.6429V0.164008Z" fill="#004c4c"/>
                            </svg>
                                <button className="login_btn">
                                    LOGIN
                                </button>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Login;