import React from 'react';
import { Stack } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { attributesSelector } from '../../redux/sourceData/selectors';
import { Attribute } from './components/Attribute';
import { setAttributeType } from '../../redux/sourceData/actions';

export const Attributes = () => {
    const attributes = useSelector(attributesSelector);
    const dispatch = useDispatch();

    return (
        <Stack w="full" h="full" p={2} bg="gray.50" borderRadius="lg">
            {
                attributes.map(({ id, datatype }) => (
                    <Attribute
                        key={id}
                        name={id}
                        fieldType={datatype}
                        onChange={(newDatatype) => dispatch(setAttributeType(id, newDatatype))}
                    />
                ))
            }
        </Stack>
    );
};
