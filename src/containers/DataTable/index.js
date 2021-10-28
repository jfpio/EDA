import React from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Flex, Button
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { getJsonDataRequest } from './actions';
import { datatableColumnsNames, datatableRowsByColumnNames } from './selectors';

export const DataTable = () => {
    const dispatch = useDispatch();
    const columnsNames = useSelector(datatableColumnsNames);
    const rows = useSelector(datatableRowsByColumnNames);
    return (
        <Flex direction="column">
            <Button onClick={() => dispatch(getJsonDataRequest())}>
                Click
            </Button>
            <Table variant="striped">
                <Thead>
                    <Tr>
                        {
                            columnsNames.map((columnName) => <Th>{columnName}</Th>)
                        }
                    </Tr>
                </Thead>
                <Tbody>
                    {rows.map((row) => (
                        <Tr>
                            {
                                row.map((value) => (
                                    <Td>{value}</Td>
                                ))
                            }
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </Flex>
    );
};
