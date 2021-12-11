import { combineReducers } from 'redux';
import { sourceDataReducer, SOURCE_DATA_REDUCER_NAME } from './redux/sourceData/reducer';
import { WORKING_SPACE_REDUCER_NAME, workingSpaceReducer } from './containers/WorkingSpace/reducer';
import { VEGA_ENCODING_REDUCER_NAME, vegaEncodingReducer } from './redux/vegaEncoding/reducer';

export const rootReducer = combineReducers({
    [SOURCE_DATA_REDUCER_NAME]: sourceDataReducer,
    [VEGA_ENCODING_REDUCER_NAME]: vegaEncodingReducer,
    [WORKING_SPACE_REDUCER_NAME]: workingSpaceReducer
});
