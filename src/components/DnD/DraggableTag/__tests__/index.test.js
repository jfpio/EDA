import React from 'react';
import { render, screen } from '@testing-library/react';
import { wrapWithBackend } from 'react-dnd-test-utils';
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
    it('should be draggable', () => {
        const { container } = render(<DraggableTagElementWithLabel />);
        expect(container.firstChild).toHaveProperty('draggable');
    });
});
