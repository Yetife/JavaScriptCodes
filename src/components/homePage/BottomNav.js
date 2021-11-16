import React from 'react';
import homeIcon from '../../assets/home.svg'
import contactIcon from '../../assets/contact.svg'

const BottomNav = () => {
    return (
            <div className="bottom_nav">
                <div>
                    <img className="home_icon" src={homeIcon} alt="homeIcon"/>
                </div>
                <div>
                    <img className="contact_icon" src={contactIcon} alt="homeIcon"/>
                </div>
            </div>
    );
};

export default BottomNav;