import { combineReducers } from 'redux';
import { sourceDataReducer, SOURCE_DATA_REDUCER_NAME } from './redux/sourceData/reducer';
import { WORKING_SPACE_REDUCER_NAME, workingSpaceReducer } from './containers/WorkingSpace/reducer';

export const rootReducer = combineReducers({
    [SOURCE_DATA_REDUCER_NAME]: sourceDataReducer,
    [WORKING_SPACE_REDUCER_NAME]: workingSpaceReducer
});
