/* eslint no-undef: 0 */  // --> OFF
import { expect, it } from './common/test-common';
import { fetchBooks, filterBooks, resetBooks } from '../main/reducers';

const mockState = {
    books: [
        {
            title: 'Beowulf',
            cover: 'https://covers.openlibrary.org/b/id/7883977-M.jpg',
            authors: [
                {
                    url: 'https://openlibrary.org/authors/OL2604010A/Beowulf',
                    name: 'Beowulf'
                }
            ],
            olid: 'OL7193048M'
        },
    ],
    filteredBooks: [
        {
            title: 'The Autobiography Of Benjamin Franklin',
            cover: 'https://covers.openlibrary.org/b/id/7883945-M.jpg',
            authors: [
                {
                    url: 'https://openlibrary.org/authors/OL26170A/Benjamin_Franklin',
                    name: 'Benjamin Franklin'
                }
            ],
            olid: 'OL6990157M'
        }
    ],
};

describe('fetchBooks reducer', () => {
    it('Puts the books action data into the state', () => {
        const ret = fetchBooks([], { type: 'BOOKS_FETCH_SUCCEEDED', books: mockState.books });
        expect(ret).to.deep.equal(mockState.books);
    });
});

describe('filterBooks reducer', () => {
    it('Puts the filteredBooks action data into the state', () => {
        const ret = filterBooks([], { type: 'BOOKS_FILTER_SUCCEEDED', filteredBooks: mockState.filteredBooks });
        expect(ret).to.deep.equal(mockState.filteredBooks);
    });
});

describe('resetBooks reducer', () => {
    it('Resets the filteredBooks state', () => {
        const ret = resetBooks(mockState, { type: 'RESET_BOOKS' });
        expect(ret).to.deep.equal([]);
    });
});
