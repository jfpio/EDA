import React from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button, RadioGroup, Stack, Radio
} from '@chakra-ui/react';
import PropTypes from 'prop-types';

export const DatasetsModal = ({
    isOpen, onClose, onChange, datasets, currentDataset
}) => (
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
            <ModalHeader>Datasets</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <RadioGroup onChange={onChange} defaultValue={currentDataset}>
                    <Stack direction="column">
                        {
                            datasets.map(({ name, path }) => (
                                <Radio key={name} value={path}>{name}</Radio>
                            ))
                        }
                    </Stack>
                </RadioGroup>
            </ModalBody>
            <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                    Close
                </Button>
            </ModalFooter>
        </ModalContent>
    </Modal>
);

DatasetsModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onChange: PropTypes.func,
    datasets: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        path: PropTypes.string
    })),
    currentDataset: PropTypes.string
};

DatasetsModal.defaultProps = {
    onChange: () => {},
    datasets: [],
    currentDataset: ''
};
