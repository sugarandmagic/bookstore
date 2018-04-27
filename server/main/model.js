import Fuse from 'fuse.js';

/**
 * Tests the search term to see if it is a valid OLID
 * @param {string}   query  Search query
 * @returns {boolean}       True if OILD regex found
 */
const isValidOLID = (query) => (query.match(/(OL(\d)+M)/g) != null);

/**
 * Filters the books by OLID if the term is a valid OLID, else assumes it to be a title and does a fuzzy search on i
 * @param {string}  query   Search query
 * @param {Array}   books   Array of books
 * @returns {Array}         Filtered books
 */
const booksFilter = (query, books) => {
    if (isValidOLID(query)) {
        return books.filter((book) => book.olid === query);
    }
    const options = {
        shouldSort: true,
        findAllMatches: true,
        threshold: 0.6,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: ['title'],
    };
    const fuse = new Fuse(books, options);
    return fuse.search(query);
};

/**
 * Converts string title to Title Case
 * @param {string}  title   Title
 * @returns {string}        Formatted title
 */
const toTitleCase = (title) => title.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

/**
 * Transform raw book data into the required model
 * @param {Array} rawBooks Untransformed books array
 * @returns {{title: string, cover: (string|*), authors: *, olid: (string|*)}[]}
 */
const transformBooksIntoModel = (rawBooks) =>
    Object.values(rawBooks).map((book) => {
        const authors = (book.authors) ? book.authors : [{ name: book.by_statement.split('by ')[1] }];
        return {
            title: toTitleCase(book.title),
            cover: book.cover.medium,
            authors,
            olid: book.identifiers.openlibrary[0],
        };
    });

export {
    transformBooksIntoModel,
    isValidOLID,
    booksFilter,
};
