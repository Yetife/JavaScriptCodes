import React from 'react';
import { Box, Text } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
import waveImg from '../../../../../assets/wave.svg'

const Greetings = () => {
    return (
        <Box display="flex" justifyContent={"space-between"} width={"15vw"}>
            <Image src={waveImg} />
            <Box>
                <Text marginBottom="2px" marginTop="0" fontWeight={"bold"} fontSize={"24px"}>Hi Patience,</Text>
                <Text marginTop={"2px"} marginBottom="0" fontSize={"11px"}>Welcome to your Admin Dashboard</Text>
            </Box>
        </Box>
    );
};

export default Greetings;