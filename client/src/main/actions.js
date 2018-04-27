/**
 * fetchBooks reducer
 * @returns {{type: string}}
 */
export const fetchBooks = () => ({
    type: 'BOOKS_FETCH_REQUESTED',
});

/**
 * filterBooks reducer
 * @param {string} term Search term
 * @returns {{type: string, term: *}}
 */
export const filterBooks = (term) => ({
    type: 'BOOKS_FILTER_REQUESTED',
    term,
});

/**
 * resetBooks reducer
 * @returns {{type: string}}
 */
export const resetBooks = () => ({
    type: 'RESET_BOOKS',
});