import React from 'react';
import TopNav from '../components/homePage/TopNav'
import HomeContainer from '../components/homePage/HomeContainer'
import BottomNav from '../components/homePage/BottomNav'
import circle from '../assets/circle1.svg'
import '../register.css';

const Home = () => {
    return (
        <div className={"home"}>
           <TopNav/>
            <svg className={"top-circle"} width="70" height="150" viewBox="0 0 70 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 149.836C39.0901 147.263 70 114.741 70 75C70 35.2588 39.0901 2.73697 0 0.164032V26.6429C24.4981 29.146 43.6111 49.8409 43.6111 75C43.6111 100.159 24.4981 120.854 0 123.357V149.836Z" fill="#004C4C"/>
            </svg>
            <HomeContainer/>
            <img className="bottom-circle" src={circle} alt="circlebackgroung"/>
            <BottomNav/>
        </div>
    );
};

export default Home;