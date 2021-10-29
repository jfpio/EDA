import React from 'react';
import { Stack, Tag } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { datatableColumnsNames } from '../../redux/sourceData/selectors';

export const MetaDrawer = () => {
    const columnsNames = useSelector(datatableColumnsNames);

    return (
        <Stack
            w="full"
            h="full"
            p={4}
        >
            {
                columnsNames.map((name) => (
                    <Tag key={name}>
                        {name}
                    </Tag>
                ))
            }
        </Stack>

    );
};
