import React from 'react';
import { Stack } from '@chakra-ui/react';
import { values } from 'ramda';
import { DraggableTag } from '../../../../components/DnD/DraggableTag';
import { DnDItemTypes } from '../../../../DnD';
import { AGGREGATE_ATTRIBUTES_TYPES } from '../../../../redux/vegaEncoding/const';

export const AggregateAttributes = () => (
    <Stack p={2} bg="gray.50" borderRadius="lg">
        {
            values(AGGREGATE_ATTRIBUTES_TYPES).map((id) => (
                <DraggableTag
                    tagId={id}
                    itemTypeKey={DnDItemTypes.ATTRIBUTE}
                >
                    {id}
                </DraggableTag>
            ))
        }
    </Stack>
);
