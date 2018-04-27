//external modules
import { call, put, takeLatest } from 'redux-saga/effects';
import fetch from 'node-fetch';

const url = 'http://localhost:3000/books';

const fetchBooks = async () => {
    try {
        const res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
};

const fetchFilteredBooks = async (term) => {
    try {
        const res = await fetch(`${url}/${term}`);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
};

function* getBooks() {
    try {
        const books = yield call(fetchBooks);
        yield put({type: 'BOOKS_FETCH_SUCCEEDED', books: books});
    } catch (e) {
        yield put({type: 'BOOKS_FETCH_FAILED', message: e.message});
    }
}

function* getFilteredBooks(action) {
    try {
        const books = yield call(fetchFilteredBooks, action.term);
        yield put({type: 'BOOKS_FILTER_SUCCEEDED', books: books});
    } catch (e) {
        yield put({type: 'BOOKS_FILTER_FAILED', message: e.message});
    }
}

/**
 * Watch function for saga
 */
function* getBooksSaga() {
    yield takeLatest('BOOKS_FETCH_REQUESTED', getBooks);
}

function* getFilteredBooksSaga() {
    yield takeLatest('BOOKS_FILTER_REQUESTED', getFilteredBooks);
}

export { getBooksSaga, getFilteredBooksSaga };