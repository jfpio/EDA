import React, { useState } from 'react';
import { Button, Flex } from '@chakra-ui/react';
import { DataTable } from '../DataTable';
import { ChartSpace } from '../ChartSpace';

export const WorkingSpace = () => {
    const [state, setState] = useState(true);
    return (
        <Flex direction="column" overflow="auto">
            <Button onClick={() => setState(!state)} colorScheme="teal">
                Toggle
            </Button>
            {
                state ? <ChartSpace /> : <DataTable />
            }
        </Flex>
    );
};
