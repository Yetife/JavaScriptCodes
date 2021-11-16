import React from 'react';
import plate from '../../assets/plate.svg'
import globe from '../../assets/globe.svg'

const OrderContainer = () => {
    return (
        <div className="order_container">
            <div>
                <img className="globe" src={globe} alt="globe"/>
            </div>
            <div className="place_order">
                <h3>Place Beans Order</h3>
                <p>
                    Lorem ipsum dolor sit <br/>
                    amet, consectetur adipiscing
                    elit.
                </p>
            </div>
            <div className="plate_img">
                        <img src={plate} alt=""/>
            </div>
            <div>
            </div>
        </div>
    );
};

export default OrderContainer;