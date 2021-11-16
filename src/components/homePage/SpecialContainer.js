import React from 'react';
import special from '../../assets/special.svg'
import balloon from '../../assets/ballon.svg'

const SpecialContainer = () => {
    return (
        <div className="special_offer_container">
                <div className="special_img">
                    <img className="special" src={special} alt=""/>
                </div>
                <div className="special_offer">
                    <h3>Special Offer</h3>
                    <p>
                        Lorem ipsum dolor sit <br/>
                        amet, consectetur adipiscing
                        elit.
                    </p>
                </div>
            <div className="ballon_img">
                <img className="ballon_icon" src={balloon} alt="ballon" />
            </div>
        </div>
    );
};

export default SpecialContainer;