import React from 'react';
import { Stack } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { visibleColumnsNamesSelector } from '../../redux/sourceData/selectors';
import { Attribute } from './components/Attribute';
import { VEGA_DATA_TYPES } from '../../redux/chartConfig/const';

export const Attributes = () => {
    const visibleColumnsNames = useSelector(visibleColumnsNamesSelector);

    return (
        <Stack w="full" h="full" p={2} bg="gray.50" borderRadius="lg">
            {
                visibleColumnsNames.map((name) => (
                    <Attribute
                        name={name}
                        fieldType={VEGA_DATA_TYPES.QUANTITATIVE}
                        onChange={(attribute) => console.log(attribute)}
                    />
                ))
            }
        </Stack>
    );
};
