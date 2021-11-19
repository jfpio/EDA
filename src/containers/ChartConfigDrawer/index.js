import React from 'react';
import { Stack, Tag } from '@chakra-ui/react';
import { useDrop } from 'react-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { isNil } from 'ramda';
import { ItemTypes } from '../../DnD';
import { xFieldSelector } from '../../redux/chartConfig/selectors';
import { setField } from '../../redux/chartConfig/actions';
import { ENCODING_FIELDS } from '../../redux/chartConfig/const';

export const ChartConfigDrawer = () => {
    const dispatch = useDispatch();
    const xField = useSelector(xFieldSelector);
    const [{ isOver }, drop] = useDrop(
        () => ({
            accept: ItemTypes.ATTRIBUTE,
            drop: ({ name }) => dispatch(setField(ENCODING_FIELDS.X, name)),
            collect: (monitor) => ({
                isOver: !!monitor.isOver()
            })
        })
    );

    return (
        <Stack w="full" h="full" p={2}>
            <Tag
                size="lg"
                ref={drop}
                colorScheme={isOver ? 'blue' : 'gray'}
            >
                {isNil(xField) ? 'X' : xField }
            </Tag>
        </Stack>
    );
};

