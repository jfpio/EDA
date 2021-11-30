import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { wrapWithBackend } from 'react-dnd-test-utils';
import { Dropzone } from '../index';
import { DraggableTag } from '../../DraggableTag';

const name = 'Test of dropzone';
const TestDraggableTag = wrapWithBackend(DraggableTag);
const TestDropzone = wrapWithBackend(Dropzone);

describe('DraggableTag', () => {
    it('should display a children', () => {
        render(
            <TestDropzone acceptedItemTypeKeys={['test']}>
                <TestDraggableTag
                    tagId="test"
                    itemTypeKey="testkey"
                >
                    {name}
                </TestDraggableTag>
            </TestDropzone>
        );
        expect(screen.getByText(name)).toBeInTheDocument();
    });
    it('on drag is triggered only by accepted keys', () => {
        const onDropFunc = jest.fn();
        render(
            <>
                <TestDraggableTag
                    tagId="test"
                    itemTypeKey="testKey"
                >
                    testKey
                </TestDraggableTag>
                <TestDraggableTag
                    tagId="test"
                    itemTypeKey="otherKey"
                >
                    otherKey
                </TestDraggableTag>
                <TestDropzone onDrop={onDropFunc} acceptedItemTypeKeys={['testKey']}>dropzone</TestDropzone>
            </>
        );
        const testKeyTag = screen.getByText('testKey').closest('div');
        const otherKeyTag = screen.getByText('otherKey').closest('div');
        const dropzone = screen.getByText('dropzone').closest('div');

        fireEvent.dragStart(otherKeyTag);
        fireEvent.dragEnter(dropzone);
        fireEvent.dragOver(dropzone);
        fireEvent.drop(dropzone);

        expect(onDropFunc).toHaveBeenCalledTimes(0);

        fireEvent.dragStart(testKeyTag);
        fireEvent.dragEnter(dropzone);
        fireEvent.drop(dropzone);

        expect(onDropFunc).toHaveBeenCalledTimes(1);
    });

    it('changes colors', () => {
        const color = '#f00000';
        const onDragColor = '#ff0000';
        const isOverColor = '#fff000';

        render(
            <>
                <TestDraggableTag
                    tagId="test"
                    itemTypeKey="testKey"
                >
                    testKey
                </TestDraggableTag>
                <TestDropzone
                    acceptedItemTypeKeys={['testKey']}
                    color={color}
                    onDragColor={onDragColor}
                    isOverColor={isOverColor}
                >
                    dropzone
                </TestDropzone>
            </>
        );
        const testKeyTag = screen.getByText('testKey').closest('div');
        const dropzone = screen.getByText('dropzone').closest('div');

        expect(dropzone).toHaveStyle({ backgroundColor: color });
        fireEvent.dragStart(testKeyTag);
        expect(dropzone).toHaveStyle({ backgroundColor: onDragColor });
        fireEvent.dragEnter(dropzone);
        expect(dropzone).toHaveStyle({ backgroundColor: isOverColor });
    });
});
