import React, { useState } from 'react';
import { Box } from '@chakra-ui/layout'
import searchImg from '../../../../assets/search.svg'
import boxImg from '../../../../assets/blackBox.svg'
import bellImg from '../../../../assets/bellIcon.svg'
import { Text, Button } from '@chakra-ui/react'
import { Image } from '@chakra-ui/image'
import { FiGrid, FiUser, FiSettings, FiChevronDown } from 'react-icons/fi'

const NavBar = () => {
    const [tabRoute, setTabRoute] = useState("Overview")

    const setTabIndex = (route) => {
        setTabRoute(route.name)
    }

    const routes = [
        {
            name: "Overview",
            route: "/overview",
            icon: FiGrid
        },
        {
            name: "Natives",
            route: "/natives",
            icon: FiUser
        },
        {
            name: "Settings",
            route: "/settings",
            icon: FiSettings,
        }
    ]
    return (
        <Box display="flex" justifyContent="space-around" alignItems="center" bg={"white"} height={"8vh"}>
            <Text fontSize="16px" fontWeight="bold">Attendance.</Text>

               <Box display="flex" justifyContent="space-between" alignItems="center" height={"100%"}>
                   {routes.map((route, index) => (
                       <Button onClick={() => setTabIndex(route)} leftIcon={<route.icon />} p={4}
                               rightIcon={route.name === "Natives" ? <FiChevronDown /> : null} height="100%" cursor="pointer" bg="white" color="black"
                               mr="4rem" fontSize="14px" border="unset" fontWeight={tabRoute === route.name ? "bold" : "100"}
                               borderBottom={tabRoute === route.name ? "3px solid black" : "none"} width="100%">{route.name}</Button>
                   ))}
               </Box>
            
                <Box display="flex">
                    <Image src={searchImg} height="100%" />
                    <Image src={boxImg} height="100%" mx="2rem"/>
                    <Image src={bellImg} height="100%" />
                </Box>
        </Box>
    );
};

export default NavBar;