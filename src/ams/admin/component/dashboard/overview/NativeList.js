import React from 'react';
import { Box, Text } from '@chakra-ui/layout'
import { List, UnorderedList, ListItem, Button, Icon, Image } from '@chakra-ui/react'
import avatar1 from '../../../../../assets/avatar1.svg'
import avatar2  from '../../../../../assets/avatar2.svg'
import avatar3  from '../../../../../assets/avatar3.svg'
import avatar4  from '../../../../../assets/avatar4.svg'
import avatar5 from '../../../../../assets/avatar5.svg'
import rightIcon from '../../../../../assets/rightIcon.svg'
import { FiChevronRight } from 'react-icons/fi'

const NativeList = () => {
    const natives = [
        {
            avatar: avatar1,
            name: "Adedeji Touwani",
            cohort: "C8",
            date: "8.59AM",
            email: "adedeji.native@semicolon.africa",
            icon: rightIcon

        },
        {
            avatar: avatar2,
            name: "Mariam Adeniji",
            cohort: "C9",
            date: "8.57AM",
            email: "m.adeniji.native@semicolon.africa",
            icon: rightIcon
        },
        {
            avatar: avatar3,
            name: "Daniel Abayomi",
            cohort: "C7",
            date: "8.55AM",
            email: "a.daniel.native@semicolon.africa",
            icon: rightIcon
        },
        {
            avatar: avatar4,
            name: "Eniola Osabiya",
            cohort: "C10",
            date: "8.50AM",
            email: "eosabiya.native@semicolon.africa",
            icon: rightIcon
        },
        {
            avatar: avatar5,
            name: "Adedeji Touwani",
            cohort: "C9",
            date: "8.43AM",
            email: "adedeji.native@semicolon.africa",
            icon: rightIcon
        },
    ]

    return (
        <Box>
            <Box paddingLeft={"40px"}>
                <Text></Text>
                <Text fontWeight={"bold"}>Natives that Recently Came in,</Text>
            </Box>
            <Box>
                {natives.map((native, index) => (
                    <List display={"flex"} alignItems={"center"} justifyContent={"space-between"} marginLeft={"20px"}>
                        <Image src={native.avatar}/>
                        <Box display="flex" justifyContent={"space-between"} alignItems={"center"}>
                            <Text fontWeight={"bold"}  fontSize={"16px"}>{native.name}</Text>
                            <UnorderedList>
                                <ListItem fontSize={"10px"}>{native.cohort}</ListItem>
                                <ListItem color="#FF9900" fontSize={"10px"}>{native.date}</ListItem>
                            </UnorderedList>
                            <Text  fontSize={"12px"}>{native.email}</Text>
                            <Image src={native.icon}  cursor={"pointer"}/>
                        </Box>
                    </List>
                ))}
            </Box>
            <Button display= "flex" justifyContent={"center"} bg={"black"} color={'white'} width="40%" height="10%" marginLeft="70%"
                    padding={"20px"} borderRadius={"10px"}>See All</Button>
        </Box>
    );
};

export default NativeList;