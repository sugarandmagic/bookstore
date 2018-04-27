
const isValidOLID = (query) => {
    return (query.match(/(OL(\d)+M)/g) != null)
};

const booksFilter = (query, books) => {
    if (isValidOLID(query)) {
        return books.filter((book) => book.olid === query);
    }
    return books.filter((book) => book.title === query);
};

const toTitleCase = (title) => title.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');


const transformBooksIntoModel = (rawBooks) => 
Object.values(rawBooks).map(book => {
    const authors = (book.authors) ? book.authors : [{ name: book.by_statement.split('by ')[1]}];
    return {
        title: toTitleCase(book.title),
        cover: book.cover.large,
        authors: authors,
        olid: book.identifiers.openlibrary[0]
    }
});

export {
    transformBooksIntoModel,
    isValidOLID,
    booksFilter,
};
