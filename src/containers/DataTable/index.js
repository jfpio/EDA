import React from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    Flex, Button
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { getJsonDataRequest } from './actions';
import { datatableColumnsNames } from './selectors';

export const DataTable = () => {
    const dispatch = useDispatch();
    const columnsNames = useSelector(datatableColumnsNames);
    return (
        <Flex direction="column">
            <Button onClick={() => dispatch(getJsonDataRequest())}>
                Click
            </Button>
            {columnsNames}
            <Table variant="simple">
                <Thead>
                    <Tr>
                        <Th>To convert</Th>
                        <Th>into</Th>
                        <Th isNumeric>multiply by</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>inches</Td>
                        <Td>millimetres (mm)</Td>
                        <Td isNumeric>25.4</Td>
                    </Tr>
                    <Tr>
                        <Td>feet</Td>
                        <Td>centimetres (cm)</Td>
                        <Td isNumeric>30.48</Td>
                    </Tr>
                    <Tr>
                        <Td>yards</Td>
                        <Td>metres (m)</Td>
                        <Td isNumeric>0.91444</Td>
                    </Tr>
                </Tbody>
                <Tfoot>
                    <Tr>
                        <Th>To convert</Th>
                        <Th>into</Th>
                        <Th isNumeric>multiply by</Th>
                    </Tr>
                </Tfoot>
            </Table>
        </Flex>
    );
};
