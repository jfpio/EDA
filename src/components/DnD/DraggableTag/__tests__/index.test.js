import React from 'react';
import { render, screen } from '@testing-library/react';
import { TagLabel } from '@chakra-ui/react';
import { wrapWithBackend } from 'react-dnd-test-utils';
import { DraggableTag } from '../index';

const name = 'Test of draggable tag';

describe('DraggableTag', () => {
    it('Display a label', () => {
        const TestDraggableTag = wrapWithBackend(DraggableTag);
        render(
            <TestDraggableTag
                tagId="test"
                itemTypeKey="testkey"
            >
                <TagLabel>
                    {name}
                </TagLabel>
            </TestDraggableTag>
        );
        expect(screen.getByText(name)).toBeInTheDocument();
    });
});
