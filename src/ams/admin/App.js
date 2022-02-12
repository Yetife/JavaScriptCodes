import React from 'react';
import Auth from '../admin/views/auth/Auth'
import Dashboard from '../admin/views/dashboard/Dashboard'
import { Box } from '@chakra-ui/layout'

const App = () => {
    return (
        <Box bg="#F5F5F5" height="120vh">
            {/*Admin*/}
            {/*<Auth />*/}
            <Dashboard />
        </Box>
    );
};

export default App;