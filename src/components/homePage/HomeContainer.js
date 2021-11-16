import React from 'react';
import UserCard from './UserCard'
import RankingContainer from './RankingContainer'
import OrderContainer from './OrderContainer'
import SpecialContainer from './SpecialContainer'

const HomeContainer = () => {
    return (
        <div className={"home_container"}>
            <UserCard/>
            <RankingContainer/>
            <OrderContainer/>
            <SpecialContainer/>
        </div>
    );
};

export default HomeContainer;