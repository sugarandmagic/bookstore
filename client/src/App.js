// external imports
import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import { connect } from 'react-redux';
// internal imports
import { fetchBooks, filterBooks } from './actions';
import './App.css';

const mapStateToProps = (state) => ({
    books: state.books,
    filteredBooks: state.filteredBooks
});

const mapDispatchToProps = {
    filterBooks,
    fetchBooks
};

class App extends Component {
    componentWillMount() {
        if (this.props.books.length <= 0) {
            this.props.fetchBooks();
        }
    }

    render() {
        const { books } = this.props;
        const bookItems = books.map(
            (book, index) =>
                <Book book={book} key={index} />);
        return (
            <div>
                <div className="App-header"><div className="App-title">BOOK STORE FROM THE 90s</div></div>
                <div>List o'books</div>
                <input type="text" placeholder="OLID or book title" onSubmit={filterBooks()}/>
                <ul>
                    {bookItems}
                </ul>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);


const Book = props => (
    <li className="book">
        <div>{props.book.title}</div>
        <div>{props.book.authors[0].name}</div>
        <div>{props.book.olid}</div>
        <img src={props.book.cover} alt="book cover"/>
    </li>
);


