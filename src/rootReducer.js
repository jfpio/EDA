import { combineReducers } from 'redux';
import { sourceDataReducer, SOURCE_DATA_REDUCER_NAME } from './redux/sourceData/reducer';
import { WORKING_SPACE_REDUCER_NAME, workingSpaceReducer } from './containers/WorkingSpace/reducer';
import { CHART_CONFIG_REDUCER_NAME, chartConfigReducer } from './redux/chartConfig/reducer';

export const rootReducer = combineReducers({
    [SOURCE_DATA_REDUCER_NAME]: sourceDataReducer,
    [CHART_CONFIG_REDUCER_NAME]: chartConfigReducer,
    [WORKING_SPACE_REDUCER_NAME]: workingSpaceReducer
});
