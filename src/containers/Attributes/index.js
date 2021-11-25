import React from 'react';
import { Stack } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { visibleColumnsNamesSelector } from '../../redux/sourceData/selectors';
import { DraggableTag } from '../../components/DnD/DraggableTag';
import { DnDItemTypes } from '../../DnD';

export const Attributes = () => {
    const visibleColumnsNames = useSelector(visibleColumnsNamesSelector);

    return (
        <Stack w="full" h="full" p={2}>
            {
                visibleColumnsNames.map((name) => (
                    <DraggableTag
                        tagId={name}
                        itemTypeKey={DnDItemTypes.ATTRIBUTE}
                    >
                        {name}
                    </DraggableTag>
                ))
            }
        </Stack>

    );
};
