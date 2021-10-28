import { combineEpics, ofType } from 'redux-observable';
import {
    map, switchMap
} from 'rxjs/operators';
import { fromFetch } from 'rxjs/fetch';
import { from } from 'rxjs';
import { GET_JSON_DATA_REQUEST } from './const';
import { fetchColumnsAndRowsFromJSON } from './utils';
import { setColumns, setRows } from './actions';

const fetchJSONData = (action$) => action$.pipe(
    ofType(GET_JSON_DATA_REQUEST),
    switchMap(() => fromFetch('/movies.json', {
        selector: (response) => response.json()
    })),
    map((json) => fetchColumnsAndRowsFromJSON(json)),
    switchMap(({ rows, columns }) => from([
        setColumns(columns),
        setRows(rows)
    ]))
);

export const datatableEpics = combineEpics(
    fetchJSONData
);
