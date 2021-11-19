import React from 'react';
import { Stack } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { visibleColumnsNamesSelector } from '../../redux/sourceData/selectors';
import { AttributeTag } from './components/AttributeTag';

export const Attributes = () => {
    const visibleColumnsNames = useSelector(visibleColumnsNamesSelector);

    return (
        <Stack w="full" h="full" p={2}>
            {
                visibleColumnsNames.map((name) => (
                    <AttributeTag
                        key={name}
                        active
                        label={name}
                    />
                ))
            }
        </Stack>

    );
};
