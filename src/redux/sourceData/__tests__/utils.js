import { fetchColumnsAndRowsFromJSON } from '../utils';

const source = [{
    Title: 'The Land Girls',
    'US Gross': 146083,
    'Worldwide Gross': 146083,
    'US DVD Sales': null,
    'Production Budget': 8000000,
    'Release Date': 'Jun 12 1998',
    'MPAA Rating': 'R',
    'Running Time min': null,
    Distributor: 'Gramercy',
    Source: null,
    'Major Genre': null,
    'Creative Type': null,
    Director: null,
    'Rotten Tomatoes Rating': null,
    'IMDB Rating': 6.1,
    'IMDB Votes': 1071
}];
describe('Util function fetchColumnsAndRowsFromJSON', () => {
    it('check if json data is properly fetched', () => {
        const columns = Object.keys(source[0]);
        const rows = source;
        expect(fetchColumnsAndRowsFromJSON(source)).toStrictEqual({ columns, rows });
    });

    it('check if json data is properly fetched if null', () => {
        expect(fetchColumnsAndRowsFromJSON([])).toStrictEqual({ columns: [], rows: [] });
    });
});
