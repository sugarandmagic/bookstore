import Koa from 'koa';
import Router from 'koa-router';
import actionBooks from './actionBooks';

const router = new Router();

/**
* Initialises the routes and starts the app
* @returns {Promise<void>} We dont return anything
*/
const init = async () => {
    console.info('Server has started. Initializing routes.');
    router.get('/books/:term?', actionBooks);
    const server = new Koa();
    server.use(router.allowedMethods());
    server.use(router.routes());
    console.info('Starting server');
    server.listen(3000);
    console.info('Listening on port 3000');
};

init();
