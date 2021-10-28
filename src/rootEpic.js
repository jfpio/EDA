import { combineEpics } from 'redux-observable';
import { datatableEpics } from './containers/DataTable/epics';

export const rootEpic = combineEpics(
    datatableEpics
);
