import { combineEpics, ofType } from 'redux-observable';
import {
    catchError,
    map, switchMap
} from 'rxjs/operators';
import { fromFetch } from 'rxjs/fetch';
import { from } from 'rxjs';
import { GET_JSON_DATA_REQUEST } from './const';
import { fetchColumnsAndRowsFromJSON } from './utils';
import { setColumns, setRows } from './actions';

const fetchJSONData = (action$) => action$.pipe(
    ofType(GET_JSON_DATA_REQUEST),
    switchMap(({ url }) => fromFetch(url, {
        selector: (response) => response.json()
    })),
    map((json) => fetchColumnsAndRowsFromJSON(json)),
    switchMap(({ rows, columns }) => from([
        setColumns(new Set(columns)),
        setRows(rows)
    ])),
    catchError((e) => console.log(e))
);

export const datatableEpics = combineEpics(
    fetchJSONData
);
