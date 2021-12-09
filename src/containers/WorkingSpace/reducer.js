import { createReducer } from '@reduxjs/toolkit';
import {
    TOGGLE_VIEW
} from './const';

const initialState = {
    dataTableView: false
};

export const WORKING_SPACE_REDUCER_NAME = 'workingSpaceReducer';
export const workingSpaceReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(TOGGLE_VIEW, (state) => {
            state.dataTableView = !state.dataTableView;
        });
});
