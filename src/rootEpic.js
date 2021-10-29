import { combineEpics } from 'redux-observable';
import { datatableEpics } from './redux/sourceData/epics';

export const rootEpic = combineEpics(
    datatableEpics
);
