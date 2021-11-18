import React from 'react';

const Button = (props) => {
    let {name} = props;
    return (
        <div>
            <button className={"auth_button"}>
                {name}
            </button>
        </div>
    );
};

export default Button;