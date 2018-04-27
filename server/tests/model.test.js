import sinon from 'sinon';
import {
    isValidOLID,
    booksFilter,
    transformBooksIntoModel,
} from '../main/model';
import {
    expect,
    it,
    beforeEach,
    afterEach,
} from './test-common';
import books from './mockData'

describe('model.js', () => {
    describe('isValidOLID', () => {
        it('returns true if the string passes the check', () => {
            expect(isValidOLID('OL24180216M')).to.equal(true);
        });
        it('returns false if the string does not pass the check', async () => {
            expect(isValidOLID('Great Expectations')).to.equal(false);
        });
    });
    describe('booksFilter', () => {
        it('returns book(s) that match on title when the search term is not an OLID', () => {
            expect(booksFilter('Great Expectations', transformBooksIntoModel(books))).to.have.length(1);
        });
        it('returns an empty array if there is nothing matching the search term', async () => {
            expect(booksFilter('Great expectations', transformBooksIntoModel(books))).to.deep.equal([])
        });
        it('returns book(s) that match the on OLID when the search term is an OLID', () => {
            expect(booksFilter('OL24364628M', transformBooksIntoModel(books))).to.have.length(1);
        });
        it('returns an empty array if there is nothing matching the search term', async () => {
            expect(booksFilter('OL2436462000M', transformBooksIntoModel(books))).to.deep.equal([])
        });
    });
    describe('transformBooksIntoModel', () => {
        it('returns the books tranformed into the correct model', () => {
            const ret = transformBooksIntoModel(books);
            expect(ret[0]).to.have.property('title', 'Great Expectations');
            expect(ret[0]).to.have.property('olid', 'OL24364628M');
            expect(ret[0].authors).to.be.an.instanceOf(Array);
            expect(ret[0].authors[0].name).to.equal('Charles Dickens');
            expect(ret[0].authors).to.be.an.instanceOf(Array);
        });
        it('returns an empty array if there are no books available', async () => {
            const ret = transformBooksIntoModel({});
            expect(ret).to.deep.equal([]);
        });
    });
});
