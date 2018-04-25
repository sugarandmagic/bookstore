import Koa from 'koa';
import Router from 'koa-router';

const router = new Router();

const isValidOLID = (query) => {
    return true;
    // return boolean
}

const booksFilterHandler = (query) => {
    if (isValidOLID(query)) {
        return {}
        //filter by OLID
    }
    return {}
    //filter by book title
}

const allBooksHandler = () => {
    return {}
}

const transformBooksIntoModel = (data) => {
    return data;
    // transform the data into the required format
}

const actionBooks = async (ctx) => {
    let data;
    const { params, query } = ctx;
    
    data = transformBooksIntoModel(allBooksHandler());

    if (query) {
        data = booksFilterHandler(query, data)
        // call filterHandler and return the filtered items BY OLID or book
    }
    // call booksHandler and return all items tranformed into the required model

    if (data) {
        ctx.status = 200;
        ctx.body = data;
    } else {
        ctx.status = 404;
        ctx.body = {};
    }
}

/**
 * Initialises the routes and starts the app
 * @returns {Promise<void>} We dont return anything
 */
const init = async () => {
    console.info('Server has started. Initializing routes.');
    router.get('/books/:option?', actionBooks);
    const server = new Koa();
    server.use(router.allowedMethods());
    server.use(router.routes());
    console.info('Starting server');
    server.listen(3000);
    console.info('Listening on port 3000');
};

init();
