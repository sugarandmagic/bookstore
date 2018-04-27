import { combineReducers } from 'redux';

/**
 * fetchBooks reducer
 * @param {Object} state    Application state
 * @param {Object} action   Redux action
 * @returns {(function(*=, *=): Array)|*}
 */
export const fetchBooks = (state = [], action) => action.books;

/**
 * Map action types to reducers
 * @type {{BOOKS_FETCH_SUCCEEDED: (function(*=, *): ((function(*=, *=): Array)|*))}}
 */
const mapActionsToReducers = {
    'BOOKS_FETCH_SUCCEEDED': fetchBooks
};

/**
 * books reducer
 * @param {Object} state    Application state
 * @param {Object} action   Redux action
 * @returns {Array}
 */
const books = (state = [], action) => {
    return (mapActionsToReducers[action.type]) ? mapActionsToReducers[action.type](state, action) : state;
};

/**
 * filterBooks reducer
 * @param {Object} state    Application state
 * @param {Object} action   Redux action
 * @returns {(function(*=, *=): Array)|*}
 */
const filterBooks = (state = [], action) => action.books;

/**
 * resetBooks reducer
 * @param {Object} state    Application state
 * @returns {Array}
 */
const resetBooks = (state = []) => [];

/**
 * Map action types to reducers
 * @type {{BOOKS_FILTER_SUCCEEDED: (function(*=, *): ((function(*=, *=): Array)|*)), RESET_BOOKS: (function(*=): Array)}}
 */
const mapActionsToReducersFiltered = {
    'BOOKS_FILTER_SUCCEEDED': filterBooks,
    'RESET_BOOKS': resetBooks,
};

/**
 * filteredBooks reducer
 * @param {Object} state    Application state
 * @param {Object} action   Redux action
 * @returns {Array}
 */
const filteredBooks = (state = [], action) => {
    return (mapActionsToReducersFiltered[action.type]) ? mapActionsToReducersFiltered[action.type](state, action) : state;
};

/**
 * Combine reducers to make root reducer
 */
export default combineReducers({
    books,
    filteredBooks,
});
