import React from 'react';
import { Box, Text } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/react'
import { FiChevronDown } from 'react-icons/fi'
import Charts from './Charts'

const AttendanceCharts = () => {
    return (
        <Box>
            <Box display="flex" justifyContent="space-between" paddingTop={"2%"} width={"52vw"} alignItems={"center"}>
                <Box>
                    <Text fontWeight={"bold"} marginBottom={"2px"} fontSize="16px" marginTop={"0"}>Attendance Statistics</Text>
                    <Text>Amount of Attendees Per  <span fontWeight={"bold"}>Week</span></Text>
                </Box>
            <Box paddingLeft={"45%"}>
                <Text>Mon --- Fri</Text>
            </Box>
            <Box display="flex">
                <Button rightIcon=<FiChevronDown /> width="100%" padding="10px"  border={"2px solid grey"} borderRadius={"5px"}>Weekly</Button>
            </Box>
            </Box>
        <Charts />
        </Box>
    );
};

export default AttendanceCharts;