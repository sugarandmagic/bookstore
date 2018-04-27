export const fetchBooks = () => ({
    type: 'BOOKS_FETCH_REQUESTED',
});

export const filterBooks = (term) => ({
    type: 'BOOKS_FILTER_REQUESTED',
    term,
});

export const resetBooks = () => ({
    type: 'RESET_BOOKS',
});