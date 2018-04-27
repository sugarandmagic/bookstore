import fetch from 'node-fetch';
import { transformBooksIntoModel, booksFilter } from "./model";

const allBooksHandler = async () => {
    try {
      let response = await fetch('https://goo.gl/Lk2MTJ');
      return response.json();
    } catch (error) {
      console.error('error: ', error);
      return {}
    }
  };

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