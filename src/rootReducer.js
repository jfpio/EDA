import { combineReducers } from 'redux';
import { datatableReducer, DATATABLE_REDUCER_NAME } from './containers/DataTable/reducer';

export const rootReducer = combineReducers({
    [DATATABLE_REDUCER_NAME]: datatableReducer
});
