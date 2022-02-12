import React from 'react';
import Greetings from '../overview/Greetings'
import Breadcrumb from '../overview/BreadCrumb'
import AttendanceCharts from '../overview/AttendanceCharts'
import NativeList from '../overview/NativeList'
import cardSvg1 from "../../../../../assets/cardSvg1.svg"
import cardSvg2 from "../../../../../assets/cardSvg2.svg"
import cardSvg3 from "../../../../../assets/cardSvg3.svg"
import cardSvg4 from "../../../../../assets/cardSvg4.svg"
import { Box } from '@chakra-ui/layout'
import CardDisplay from './CardDisplay'

const OverviewContainer = () => {
    const details = [
        {
            img: cardSvg1,
            value: "35,000",
            text: "All Reg. Natives"
        },
        {
            img: cardSvg2,
            value: "13,000",
            text: "Present Natives"
        },
        {
            img: cardSvg3,
            value: "22,000",
            text: "Absent Natives"
        },
        {
            img: cardSvg4,
            value: "65%",
            text: "% Attendance"
        },
    ]
    return (
        <Box paddingTop={"3%"} paddingLeft={"9%"} paddingRight={"9%"}>
            <Greetings />
            <Breadcrumb />
            <Box display="flex" justifyContent="space-between" width="100%" mt={"1%"}>
                {details.map((detail, index) => (
                    <CardDisplay key={index} cardDetails={detail} />
                ))}
            </Box>
            <Box display={"flex"} justifyContent={"space-between"} mt={"2%"}>
                <AttendanceCharts />
                <NativeList />
            </Box>
        </Box>
    );
};

export default OverviewContainer;