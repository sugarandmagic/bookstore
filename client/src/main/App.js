import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import { connect } from 'react-redux';
import { fetchBooks, filterBooks, resetBooks } from './actions';
import './App.css';
import '../../node_modules/normalize.css/normalize.css';

const mapStateToProps = (state) => ({
    books: state.books,
    filteredBooks: state.filteredBooks
});

const mapDispatchToProps = {
    filterBooks,
    fetchBooks,
    resetBooks,
};

/**
 * App component
 */
class App extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleSubmit(e){
        this.props.filterBooks(this.term.value);
        this.setState({term: this.term.value});
        e.preventDefault();
        this.term.value = '';
    }

    handleReset(e){
        this.props.resetBooks();
        e.preventDefault();
    }

    componentWillMount() {
        if (this.props.books.length <= 0) {
            this.props.fetchBooks();
        }
        this.setState({term: ''});
    }

    render() {
        const term = (this.state.term) ? this.state.term : '';
        const { books, filteredBooks } = this.props;
        const bookItems = (filteredBooks.length > 0) ? filteredBooks : books;
        const bookCards = bookItems.map(
            (book, index) =>
                <Book book={book} key={index} />);
        return <div className="container">
            <div className="app-header"><h1 className="app-title">90s BOOK STORE</h1></div>
            <form>
                <input type="text" placeholder="search by title or OLID" ref={el => this.term = el}/>
                <input className="submit_button" type="submit" value="Submit" onClick={this.handleSubmit}/>
                <input className="reset_button" type="submit" value="Reset" onClick={this.handleReset}/>
            </form>
            <Info filteredBooks={filteredBooks} term={term} />
            <div className="books">{bookCards}</div>
        </div>;
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

/**
 *
 * @param props
 * @returns {*}
 * @constructor
 */
const Book = props => (
    <div className='book'>
        <div className='book_title'>{props.book.title}</div>
        <a className='book_author' href={props.book.authors[0].url}>{props.book.authors[0].name}</a>
        <div className='book_olid'>{props.book.olid}</div>
        <img className='book_cover' src={props.book.cover} alt="book cover"/>
    </div>
);

/**
 *
 * @param props
 * @returns {string}
 * @constructor
 */
const Info = (props) => (props.filteredBooks.length > 0) ?
    (<div className='search_info'>Found { props.filteredBooks.length } results for search '{props.term}'</div>) : '';
