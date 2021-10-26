import React from 'react';
import {
    Box, Flex, Text
} from '@chakra-ui/react';

export const Footer = () => (
    <Flex
        justifyContent="center"
        alignItems="end"
        width="100%"
        height="100%"
    >
        <Box>
            <Text fontSize="md">
                Jan Piotrowski 2021
            </Text>
        </Box>
    </Flex>
);
