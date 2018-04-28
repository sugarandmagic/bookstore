/* eslint no-console: 0 */  // --> OFF
import { call, put, takeLatest } from 'redux-saga/effects';
import fetch from 'node-fetch';

const url = 'http://localhost:3000/books';

/**
 * fetchBooks
 * @returns {Promise<*>}
 */
const fetchBooks = async () => {
    try {
        const res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
};

/**
 * fetchFilteredBooks
 * @param term Search term
 * @returns {Promise<*>}
 */
const fetchFilteredBooks = async (term) => {
    try {
        const res = await fetch(`${url}/${term}`);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
};

/**
 * geBooks
 * @returns {IterableIterator<*>}
 */
function* getBooks() {
    try {
        const books = yield call(fetchBooks);
        yield put({type: 'BOOKS_FETCH_SUCCEEDED', books: books});
    } catch (e) {
        yield put({type: 'BOOKS_FETCH_FAILED', message: e.message});
    }
}

/**
 * getFilteredBooks
 * @param action Redux action
 * @returns {IterableIterator<*>}
 */
function* getFilteredBooks(action) {
    try {
        const filteredBooks = yield call(fetchFilteredBooks, action.term);
        yield put({type: 'BOOKS_FILTER_SUCCEEDED', filteredBooks: filteredBooks});
    } catch (e) {
        yield put({type: 'BOOKS_FILTER_FAILED', message: e.message});
    }
}

/**
 * Watch function for getBooks
 * @returns {IterableIterator<ForkEffect | *>}
 */
function* getBooksSaga() {
    yield takeLatest('BOOKS_FETCH_REQUESTED', getBooks);
}

/**
 * Watch function for getFilteredBooks
 * @returns {IterableIterator<*|ForkEffect>}
 */
function* getFilteredBooksSaga() {
    yield takeLatest('BOOKS_FILTER_REQUESTED', getFilteredBooks);
}

export { getBooksSaga, getFilteredBooksSaga };