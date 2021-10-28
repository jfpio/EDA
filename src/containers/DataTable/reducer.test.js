import { datatableReducer } from './reducer';
import { setColumns } from './actions';

test('Should add columns as immutable list', () => {
    expect(datatableReducer(undefined, setColumns(['a', 'c']))).toEqual({
        columns: ['a', 'b']
    });
});
