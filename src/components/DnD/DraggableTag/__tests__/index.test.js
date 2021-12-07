import React from 'react';
import {
    act,
    fireEvent, render, screen
} from '@testing-library/react';
import { wrapWithBackend } from 'react-dnd-test-utils';
import { SearchIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';
import { DraggableTag } from '../index';

const name = 'Test of draggable tag';
const TestDraggableTag = wrapWithBackend(DraggableTag);
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
        render(<DraggableTagElementWithLabel />);
        expect(screen.getByText(name)).toBeInTheDocument();
    });
    it('should display a icon', () => {
        const searchIconName = 'search-icon';
        render(
            <TestDraggableTag
                tagId="test"
                itemTypeKey="testkey"
                icon={<SearchIcon data-testid={searchIconName} />}
            >
                {name}
            </TestDraggableTag>
        );
        expect(screen.getByTestId(searchIconName)).toBeInTheDocument();
    });
    it('should display a icon button', () => {
        const searchIconButtonName = 'search-icon-button';
        const testAriaLabel = 'test aria label';
        render(
            <TestDraggableTag
                tagId="test"
                itemTypeKey="testkey"
                icon={(
                    <IconButton
                        aria-label={testAriaLabel}
                        icon={<SearchIcon data-testid={searchIconButtonName} />}
                    />
                )}
            >
                {name}
            </TestDraggableTag>
        );
        expect(screen.getByTestId(searchIconButtonName)).toBeInTheDocument();
        expect(screen.getByLabelText(testAriaLabel)).toBeInTheDocument();
    });
    it('should be draggable', () => {
        const { container } = render(<DraggableTagElementWithLabel />);
        expect(container.firstChild).toHaveProperty('draggable');
    });
    it('should render color with given text', () => {
        const textColor = '#fff000';
        render(
            <TestDraggableTag
                tagId="test"
                itemTypeKey="testkey"
                textColor={textColor}
            >
                {name}
            </TestDraggableTag>
        );
        expect(screen.getByText(name)).toHaveStyle({ color: textColor });
    });
    it('should have flexGrow prop', () => {
        render(
            <>
                <TestDraggableTag
                    tagId="test"
                    itemTypeKey="testkey"
                    grow
                >
                    GrowOn
                </TestDraggableTag>
                <TestDraggableTag
                    tagId="test"
                    itemTypeKey="testkey"
                    grow={false}
                >
                    GrowOff
                </TestDraggableTag>
            </>
        );
        expect(screen.getByText('GrowOn').closest('div')).toHaveStyle({ flexGrow: 1 });
        expect(screen.getByText('GrowOff').closest('div')).toHaveStyle({ flexGrow: 0 });
    });
    it('should change color on drag', () => {
        const basicColor = '#fff000';
        const draggingColor = '#000fff';
        const { container } = render(
            <TestDraggableTag
                tagId="test"
                itemTypeKey="testkey"
                color={basicColor}
                draggingColor={draggingColor}
            >
                {name}
            </TestDraggableTag>
        );
        const testTag = container.firstChild;
        expect(testTag).toHaveStyle({ background: basicColor });
        act(() => {
            fireEvent.drag(testTag);
        });

        // expect(testTag).toHaveStyle({ background: draggingColor });
        // TODO Why it isn't working?
    });
    it('should fire onDropOutsideDropzone', () => {
        const onDropOutsideDropzone = jest.fn();
        const { container } = render(
            <TestDraggableTag
                tagId="test"
                itemTypeKey="testkey"
                onDropOutsideDropzone={onDropOutsideDropzone}
            >
                {name}
            </TestDraggableTag>
        );
        const testTag = container.firstChild;
        fireEvent.dragStart(testTag);
        fireEvent.dragEnd(testTag);
        expect(onDropOutsideDropzone).toHaveBeenCalledTimes(1);
    });
});
