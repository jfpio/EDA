import { combineEpics, ofType } from 'redux-observable';
import {
    ignoreElements, mergeMap, tap
} from 'rxjs/operators';
import { fromFetch } from 'rxjs/fetch';
import { GET_JSON_DATA_REQUEST } from './const';

const fetchJSONData = (action$) => action$.pipe(
    ofType(GET_JSON_DATA_REQUEST),
    mergeMap(() => fromFetch('/movies.json', {
        selector: (response) => response.json()
    }).pipe(
        tap((a) => console.log(a)),
        ignoreElements()
    ))
);

export const datatableEpics = combineEpics(
    fetchJSONData
);
