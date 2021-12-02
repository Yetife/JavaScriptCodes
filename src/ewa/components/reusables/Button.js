import React from 'react';

const Button = (props) => {
    let {name, onClick} = props;
    return (
        <div>
            <button onClick={onClick} className={"auth_button"}>
                {name}
            </button>
        </div>
    );
};

export default Button;