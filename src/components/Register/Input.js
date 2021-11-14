import React from 'react';

const Input = () => {
    return (
        <div className={"input-container"}>
            <label>
                Email
            </label>
            <input type="tel"
                   name="email"
                   placeholder="Enter Email"
                   className="register_input"/>
                <label>
                    First Name
                </label>
                <input type="text"
                       name="first_name"
                       placeholder="Enter first name"
                       className="register_input"/>
                    <label>
                        Last Name
                    </label>
                    <input type="text"
                           name="last_name"
                           placeholder="Enter your last name"
                           className="register_input"/>
                        <label>
                            Password
                        </label>
                        <input type="password"
                               name="password"
                               placeholder="Enter your password"
                               className="register_input"/>
                        {/*</label>*/}
        </div>
    );
};

export default Input;