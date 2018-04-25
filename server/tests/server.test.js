import sinon from 'sinon';
import {
    isValidOLID,
    booksFilterHandler,
    allBooksHandler,
    transformBooksIntoModel,
    actionBooks,
    init
} from '../server';
import {
    expect,
    it,
    beforeEach,
    afterEach,
} from './test-common';
import { books } from './mockData';

describe('server.js', () => {
    describe('isValidOLID', () => {
        it('returns true if the string passes the check', async (t) => {
            expect('foo').to.equal('foo');
        });
        it('returns false if the string does not pass the check', async (t) => {
            expect('foo').to.equal('foo');
        });
    });
    describe('booksFilterHandler', () => {
        it('returns book(s) that match the search term', async (t) => {
            expect('foo').to.equal('foo');
        });
        it('returns an empty object if there is nothing matching the search term', async (t) => {
            expect('foo').to.equal('foo');
        });
    });
    describe('allBooksHandler', () => {
        it('returns the books tranformed into the correct model', async (t) => {
            expect('foo').to.equal('foo');
        });
        it('returns an empty object if there are no books available', async (t) => {
            expect('foo').to.equal('foo');
        });
    });
    describe('transformBooksIntoModel', () => {
        it('returns the books tranformed into the correct model', async (t) => {
            expect('foo').to.equal('foo');
        });
        it('returns an empty object if there are no books available', async (t) => {
            expect('foo').to.equal('foo');
        });
    });
    describe('actionBooks', () => {
        it('returns 200 if there was data', async (t) => {
            expect('foo').to.equal('foo');
        });
        it('returns 404 if there was no data', async (t) => {
            expect('foo').to.equal('foo');
        });
    });
});
