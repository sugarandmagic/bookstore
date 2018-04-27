import fetch from 'node-fetch';
import { transformBooksIntoModel, booksFilter } from './model';

/**
 * Action handler to fetch books from API
 * @returns {Promise<*>} Books JSON or empty object
 */
const allBooksHandler = async () => {
    try {
        const response = await fetch('https://goo.gl/Lk2MTJ');
        return response.json();
    } catch (error) {
        console.error('error: ', error);
        return {};
    }
};

/**
 * Action for /books endpoint
 * @param {*} ctx Koa context object
 * @returns {Promise<void>}
 */
const actionBooks = async (ctx) => {
    const { params } = ctx;
    const { term } = params;

    const rawBooks = await allBooksHandler();
    const books = transformBooksIntoModel(rawBooks);

    const data = (term) ? booksFilter(term, books) : books;

    if (data) {
        ctx.status = 200;
        ctx.body = data;
    } else {
        ctx.status = 404;
        ctx.body = {};
    }
};

export default actionBooks;
