import React from 'react';
import { Stack } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { invisibleColumnsNamesSelector, visibleColumnsNamesSelector } from '../../redux/sourceData/selectors';
import { ColumnTag } from './components/ColumnTag';
import { addColumnToVisibleColumnNames, removeColumnFromVisibleColumnNames } from '../../redux/sourceData/actions';

export const Attributes = () => {
    const visibleColumnsNames = useSelector(visibleColumnsNamesSelector);
    const invisibleColumnsNames = useSelector(invisibleColumnsNamesSelector);
    const dispatch = useDispatch();

    return (
        <Stack w="full" h="full" p={2}>
            {
                visibleColumnsNames.map((name) => (
                    <ColumnTag
                        key={name}
                        active
                        label={name}
                        onClick={() => dispatch(removeColumnFromVisibleColumnNames(name))}
                    />
                ))
            }
            {
                invisibleColumnsNames.map((name) => (
                    <ColumnTag
                        key={name}
                        label={name}
                        onClick={() => dispatch(addColumnToVisibleColumnNames(name))}
                    />
                ))
            }
        </Stack>

    );
};
