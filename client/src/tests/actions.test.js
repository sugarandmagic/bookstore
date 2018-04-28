/* eslint no-undef: 0 */  // --> OFF
import { expect, it } from './common/test-common';
import { fetchBooks, filterBooks, resetBooks } from '../main/actions';

describe('fetchBooks action', () => {
    it('should return a fetchBooks action with the correct type', () => {
        const ret = fetchBooks();
        expect(ret).to.have.property('type')
            .that.is.a('string')
            .that.equals('BOOKS_FETCH_REQUESTED');
    });
});

describe('filterBooks action', () => {
    it('should return a filterBooks action with the correct type', () => {
        const ret = filterBooks('searchTerm');
        expect(ret).to.have.property('type')
            .that.is.a('string')
            .that.equals('BOOKS_FILTER_REQUESTED');
        expect(ret).to.have.property('term')
            .that.is.a('string')
            .that.equals('searchTerm');
    });
});

describe('resetBooks action', () => {
    it('should return a resetBooks action with the correct type', () => {
        const ret = resetBooks();
        expect(ret).to.have.property('type')
            .that.is.a('string')
            .that.equals('RESET_BOOKS');
    });
});