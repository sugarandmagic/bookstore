/* eslint no-undef: 0 */  // --> OFF
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../main/reducers';
import { mount } from 'enzyme';

import {
    expect,
    it,
} from './common/test-common';
import App from '../main/App';

let wrapper;

const initialState = ({});

const store = createStore(
    rootReducer,
    initialState,
);

const books = [
    {
        title: 'Great Expectations',
        cover: 'https://covers.openlibrary.org/b/id/6995592-M.jpg',
        authors: [
            {
                name: 'Charles Dickens'
            }
        ],
        olid: 'OL24364628M'
    },
    {
        title: 'The Odyssey Of Homer',
        cover: 'https://covers.openlibrary.org/b/id/7104104-M.jpg',
        authors: [
            {
                url: 'https://openlibrary.org/authors/OL6848355A/Homer',
                name: 'Homer'
            }
        ],
        olid: 'OL24180216M'
    },
    {
        title: 'A Farewell To Arms',
        cover: 'https://covers.openlibrary.org/b/id/7144309-M.jpg',
        authors: [
            {
                url: 'https://openlibrary.org/authors/OL13640A/Ernest_Hemingway',
                name: 'Ernest Hemingway'
            }
        ],
        olid: 'OL6732939M'
    },
];

const filteredBooks = [
    {
        title: 'The Adventures Of Oliver Twist',
        cover: 'https://covers.openlibrary.org/b/id/7883999-M.jpg',
        authors: [
            {
                url: 'https://openlibrary.org/authors/OL24638A/Charles_Dickens',
                name: 'Charles Dickens'
            }
        ],
        olid: 'OL24347578M'
    }
];

describe('<App />', () => {
    it('renders a bookstore with all the expected elements', () => {
        wrapper = mount(<Provider store={store}><App/></Provider>);
        expect(wrapper.find('.app-header')).to.have.length(1);
        expect(wrapper.find('.app-header').at(0).html())
            .to.equal('<div class="app-header"><h1 class="app-title">90s BOOK STORE</h1></div>');
        expect(wrapper.find('form').at(0).html())
            .to.equal(
                '<form>' +
                '<input type="text" placeholder="search by title or OLID">' +
                '<input class="submit_button" type="submit" value="Submit">' +
                '<input class="reset_button" type="submit" value="Reset">' +
                '</form>');
        expect(wrapper.find('.books').at(0).html()).to.equal('<div class="books"></div>');
    });
    it('renders a bookstore with 0 books when there are none in the state', () => {
        wrapper = mount(<Provider store={store}><App/></Provider>);
        expect(wrapper.length).to.be.above(0);
        expect(wrapper.find('.books')).to.have.length(1);
        expect(wrapper.find('.book')).to.have.length(0);
    });
    it('renders a bookstore with 3 books when there are 3 in the state', () => {
        const initialState = ({books});
        const store = createStore(
            rootReducer,
            initialState,
        );
        wrapper = mount(<Provider store={store}><App/></Provider>);
        expect(wrapper.find('.books')).to.have.length(1);
        expect(wrapper.find('.book')).to.have.length(3);
    });
    it('renders the filtered books when there are books in the filteredBooks state', () => {
        const initialState = ({filteredBooks, books});
        const store = createStore(
            rootReducer,
            initialState,
        );
        wrapper = mount(<Provider store={store}><App/></Provider>);
        expect(wrapper.find('.books')).to.have.length(1);
        expect(wrapper.find('.book')).to.have.length(1);
        expect(wrapper.find('.book')
            .find('.book_title')
            .text()).to.equal('The Adventures Of Oliver Twist');
    });
    it('renders a book with all the expected elements', () => {
        const initialState = ({books});
        const store = createStore(
            rootReducer,
            initialState,
        );
        wrapper = mount(<Provider store={store}><App/></Provider>);
        const book = wrapper.find('.book').at(0);
        expect(book.html()).to.equal(
            '<div class="book">' +
            '<div class="book_title">Great Expectations</div>' +
            '<a class="book_author">Charles Dickens</a>' +
            '<div class="book_olid">OL24364628M</div>' +
            '<img class="book_cover" src="https://covers.openlibrary.org/b/id/6995592-M.jpg" alt="book cover">' +
            '</div>');
    });
});
