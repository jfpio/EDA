import { combineReducers } from 'redux';
import { sourceDataReducer, SOURCE_DATA_REDUCER_NAME } from './redux/sourceData/reducer';

export const rootReducer = combineReducers({
    [SOURCE_DATA_REDUCER_NAME]: sourceDataReducer
});
