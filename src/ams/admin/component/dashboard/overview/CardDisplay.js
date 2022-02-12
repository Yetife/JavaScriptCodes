import React from 'react';
import { Image } from '@chakra-ui/image'
import { Box, Text }from '@chakra-ui/layout'

const CardDisplay = ({cardDetails}) => {
    return (
        <Box display={"flex"} justifyContent="space-around" bg="white"
             borderRadius="4px" px="1.5rem" py="0.5rem" width="20%">
            <Image src={cardDetails.img} />
           <Box marginRight={"15%"}>
               <Text fontSize="24px" fontWeight="bold" marginTop="15%" marginBottom={"5px"}>{cardDetails.value}</Text>
               <Text fontSize="12px" color="gray" marginTop="3%">{cardDetails.text}</Text>
           </Box>
        </Box>
    );
};

export default CardDisplay;