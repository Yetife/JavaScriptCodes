import React from 'react';
import { Box } from '@chakra-ui/layout'
import NavBar from '../../component/dashboard/NavBar'
import OverviewContainer from '../../component/dashboard/overview/OverviewContainer'

const Dashboard = () => {
    return (
        <Box>
            <NavBar />
            <OverviewContainer />
        </Box>
    );
};

export default Dashboard;