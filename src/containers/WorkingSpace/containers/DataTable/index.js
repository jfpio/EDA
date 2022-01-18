import React from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Flex
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import {
    attributesSelector,
    rowsSelector
} from '../../../../redux/sourceData/selectors';

export const DataTable = () => {
    const columnsNames = useSelector(attributesSelector);
    const rows = useSelector(rowsSelector);
    return (
        <Flex direction="column" overflow="auto">
            <Table variant="striped">
                <Thead>
                    <Tr>
                        {
                            (columnsNames.length === 0) ? (
                                <Th>To show table, please load a dataset</Th>
                            ) : columnsNames.map((columnName) => <Th key={columnName}>{columnName}</Th>)
                        }
                    </Tr>
                </Thead>
                <Tbody>
                    {rows.map((row) => (
                        <Tr>
                            {
                                Object.values(row).map((value) => (
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
