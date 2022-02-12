import React from 'react';
import { Box, Text} from '@chakra-ui/react'
import { FiChevronRight } from 'react-icons/fi'
import Icon from '@chakra-ui/icon'

const BreadCrumb = () => {
    return (
        <Box display={"flex"} justifyContent={"space-between"} width="9vw" alignItems={'center'} mt="1%">
            <Text color="gray" fontSize="12px">Dashboard</Text>
            <Icon as={FiChevronRight} />
            <Text fontWeight="bold" fontSize="12px">Overview</Text>
        </Box>
    );
};

export default BreadCrumb;