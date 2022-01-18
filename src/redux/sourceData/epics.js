import { combineEpics, ofType } from 'redux-observable';
import {
    catchError,
    map,
    switchMap,
    mapTo
} from 'rxjs/operators';
import { fromFetch } from 'rxjs/fetch';
import { from } from 'rxjs';
import {
    GET_JSON_DATA_REQUEST, SET_COLUMNS, SET_ROWS
} from './const';
import { fetchColumnsAndRowsFromJSON } from './utils';
import { setColumns, setRecommendedDatatypesToColumns, setRows } from './actions';

const fetchJSONDataEpic = (action$) => action$.pipe(
    ofType(GET_JSON_DATA_REQUEST),
    switchMap(({ url }) => fromFetch(url, {
        selector: (response) => response.json()
    })),
    map((json) => fetchColumnsAndRowsFromJSON(json)),
    switchMap(({ rows, columns }) => from([
        setColumns(columns),
        setRows(rows)
    ])),
    catchError((e) => console.log(e))
);

const fetchRecommendedDatatypesToColumnsEpic = (action$) => action$.pipe(
    ofType(SET_COLUMNS, SET_ROWS),
    mapTo(setRecommendedDatatypesToColumns())
);

export const datatableEpics = combineEpics(
    fetchJSONDataEpic,
    fetchRecommendedDatatypesToColumnsEpic
);
