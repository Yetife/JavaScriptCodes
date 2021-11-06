import React, {useState} from 'react';
import "./CountButton.css"

const CountButton = (props) =>{
    const [currentCount, setCurrentCount] = useState(0);

    const handleclick = () => {
        setCurrentCount(currentCount+props.incrementBy)
    }
    const buttonStyles = {
      background: props.buttonColor,
    }

    return(<div>
        <button style= {buttonStyles} onClick={handleclick}>+{props.incrementBy}</button>
        <div className="count-display">{currentCount}</div>
    </div>
    )
}

export default CountButton 