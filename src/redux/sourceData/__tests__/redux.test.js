import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { fireEvent, screen } from '@testing-library/react';
import { renderWithRedux } from '../../../utils/test-utils';
import App from '../../../App';

const moviesMock = [
    {
        Title: 'The Land Girls', 'US Gross': 146083, 'Worldwide Gross': 146083, 'US DVD Sales': null, 'Production Budget': 8000000, 'Release Date': 'Jun 12 1998', 'MPAA Rating': 'R', 'Running Time min': null, Distributor: 'Gramercy', Source: null, 'Major Genre': null, 'Creative Type': null, Director: null, 'Rotten Tomatoes Rating': null, 'IMDB Rating': 6.1, 'IMDB Votes': 1071
    },
    {
        Title: 'First Love, Last Rites', 'US Gross': 10876, 'Worldwide Gross': 10876, 'US DVD Sales': null, 'Production Budget': 300000, 'Release Date': 'Aug 07 1998', 'MPAA Rating': 'R', 'Running Time min': null, Distributor: 'Strand', Source: null, 'Major Genre': 'Drama', 'Creative Type': null, Director: null, 'Rotten Tomatoes Rating': null, 'IMDB Rating': 6.9, 'IMDB Votes': 207
    },
    {
        Title: 'I Married a Strange Person', 'US Gross': 203134, 'Worldwide Gross': 203134, 'US DVD Sales': null, 'Production Budget': 250000, 'Release Date': 'Aug 28 1998', 'MPAA Rating': null, 'Running Time min': null, Distributor: 'Lionsgate', Source: null, 'Major Genre': 'Comedy', 'Creative Type': null, Director: null, 'Rotten Tomatoes Rating': null, 'IMDB Rating': 6.8, 'IMDB Votes': 865
    },
    {
        Title: "Let's Talk About Sex", 'US Gross': 373615, 'Worldwide Gross': 373615, 'US DVD Sales': null, 'Production Budget': 300000, 'Release Date': 'Sep 11 1998', 'MPAA Rating': null, 'Running Time min': null, Distributor: 'Fine Line', Source: null, 'Major Genre': 'Comedy', 'Creative Type': null, Director: null, 'Rotten Tomatoes Rating': 13, 'IMDB Rating': null, 'IMDB Votes': null
    },
    {
        Title: 'Slam', 'US Gross': 1009819, 'Worldwide Gross': 1087521, 'US DVD Sales': null, 'Production Budget': 1000000, 'Release Date': 'Oct 09 1998', 'MPAA Rating': 'R', 'Running Time min': null, Distributor: 'Trimark', Source: 'Original Screenplay', 'Major Genre': 'Drama', 'Creative Type': 'Contemporary Fiction', Director: null, 'Rotten Tomatoes Rating': 62, 'IMDB Rating': 3.4, 'IMDB Votes': 165
    }];

describe('redux test for sourceData reducer', () => {
    const handlers = [
        rest.get('/movies.json',
            (req, res, ctx) => res(
                ctx.json(moviesMock), ctx.delay(50)
            ))
    ];

    const server = setupServer(...handlers);

    // Enable API mocking before tests.
    beforeAll(() => server.listen());

    // Reset any runtime request handlers we may add during the tests.
    afterEach(() => server.resetHandlers());

    // Disable API mocking after the tests are done.
    afterAll(() => server.close());

    it('should fetch data', async () => {
        renderWithRedux(<App />);

        expect(screen.getByText('Load some data first')).toBeInTheDocument();

        fireEvent.click(screen.getByRole('button', { name: 'Load Data' }));

        expect(await screen.findByText('Production Budget')).toBeInTheDocument();
    });
    it('should drag and drop into encoding field', async () => {
        renderWithRedux(<App />);
        fireEvent.click(screen.getByRole('button', { name: 'Load Data' }));

        const dropzone = screen.getByText('X field').nextSibling;
        const attribute = await screen.findByText('US Gross');

        fireEvent.dragStart(attribute);
        fireEvent.dragEnter(dropzone);
        fireEvent.dragOver(dropzone);
        fireEvent.drop(dropzone);

        expect(screen.queryAllByText('US Gross').length === 2).toBeTruthy();
    });
});
