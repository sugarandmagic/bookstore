import { combineReducers } from 'redux';

export const fetchBooks = (state = [], action) => action.books;

const mapActionsToReducers = {
    'BOOKS_FETCH_SUCCEEDED': fetchBooks
};

const books = (state = [], action) => {
    return (mapActionsToReducers[action.type]) ? mapActionsToReducers[action.type](state, action) : state;
};

const filterBooks = (state = [], action) => action.books;
const resetBooks = (state) => [];

const mapActionsToReducersFiltered = {
    'BOOKS_FILTER_SUCCEEDED': filterBooks,
    'RESET_BOOKS': resetBooks,
};

const filteredBooks = (state = [], action) => {
    return (mapActionsToReducersFiltered[action.type]) ? mapActionsToReducersFiltered[action.type](state, action) : state;
};

export default combineReducers({
    books,
    filteredBooks,
});
