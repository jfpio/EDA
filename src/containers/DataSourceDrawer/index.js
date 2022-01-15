import React from 'react';
import { Button, Stack, useDisclosure } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { Attributes } from '../Attributes';
import { toggleView } from '../WorkingSpace/actions';
import { DatasetsModal } from './components/DatasetsModal';
import { FILE_PATHS } from '../../redux/sourceData/const';
import { getJsonDataRequest } from '../../redux/sourceData/actions';
import { currentDatasetPathSelector } from '../../redux/sourceData/selectors';

export const DataSourceDrawer = () => {
    const dispatch = useDispatch();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const currentDatasetPath = useSelector(currentDatasetPathSelector);

    return (
        <Stack w="full" h="full" p={2}>
            <Button onClick={() => dispatch(toggleView())} colorScheme="teal">
                Switch View
            </Button>
            <Button onClick={onOpen}>
                Load dataset
            </Button>
            <DatasetsModal
                isOpen={isOpen}
                onClose={onClose}
                onChange={(path) => dispatch(getJsonDataRequest(path))}
                currentDataset={currentDatasetPath}
                datasets={FILE_PATHS}
            />
            <Attributes />
        </Stack>
    );
};
