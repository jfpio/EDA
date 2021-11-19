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
    rowsByVisibleColumnNamesSelector,
    visibleColumnsNamesSelector
} from '../../redux/sourceData/selectors';

export const DataTable = () => {
    const columnsNames = useSelector(visibleColumnsNamesSelector);
    const rows = useSelector(rowsByVisibleColumnNamesSelector);
    return (
        <Flex direction="column" overflow="auto">
            <Table variant="striped">
                <Thead>
                    <Tr>
                        {
                            (columnsNames.length === 0) ? (
                                <Th>By wyświetlić tabelę załaduj dane</Th>
                            ) : columnsNames.map((columnName) => <Th key={columnName}>{columnName}</Th>)
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
