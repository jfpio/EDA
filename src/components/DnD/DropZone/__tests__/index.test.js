import React from 'react';
import { render, screen } from '@testing-library/react';
import { wrapWithBackend } from 'react-dnd-test-utils';
import { Dropzone } from '../index';
import { DraggableTag } from '../../DraggableTag';

const name = 'Test of dropzone';
const TestDraggableTag = wrapWithBackend(DraggableTag);
const TestDropzone = wrapWithBackend(Dropzone);

const DraggableTagElementWithLabel = () => (
    <TestDraggableTag
        tagId="test"
        itemTypeKey="testkey"
    >
        {name}
    </TestDraggableTag>
);

describe('DraggableTag', () => {
    it('should display a children', () => {
        render(
            <TestDropzone acceptedItemTypeKeys={['test']}>
                <DraggableTagElementWithLabel />
            </TestDropzone>
        );
        expect(screen.getByText(name)).toBeInTheDocument();
    });
});
