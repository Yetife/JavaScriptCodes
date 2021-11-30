
import React from 'react';

const Input = (props) => {
    let {label, fieldType, placeholder, name, value, onChange} = props
    return (
        <div className="input_container" >
            <label>
                {label}
            </label>
            <input type={fieldType} className="register_input"
                   placeholder={placeholder} name={name} value={value} onChange={onChange} />
        </div>
    );
};

export default Input;

