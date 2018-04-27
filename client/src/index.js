import React from 'react'; // eslint-disable-Mine no-unused-vars
import { render } from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { fork } from 'redux-saga/effects';
import { Provider } from 'react-redux';
import App from './App';
import rootReducer from './reducers';
import * as sagas from './sagas';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = ({
    books: [
        {
            "title": "Great Expectations",
            "cover": "https://covers.openlibrary.org/b/id/6995592-M.jpg",
            "authors": [
                {
                    "name": "Charles Dickens"
                }
            ],
            "olid": "OL24364628M"
        },
        {
            "title": "The Odyssey Of Homer",
            "cover": "https://covers.openlibrary.org/b/id/7104104-M.jpg",
            "authors": [
                {
                    "url": "https://openlibrary.org/authors/OL6848355A/Homer",
                    "name": "Homer"
                }
            ],
            "olid": "OL24180216M"
        },
        {
            "title": "A Farewell To Arms",
            "cover": "https://covers.openlibrary.org/b/id/7144309-M.jpg",
            "authors": [
                {
                    "url": "https://openlibrary.org/authors/OL13640A/Ernest_Hemingway",
                    "name": "Ernest Hemingway"
                }
            ],
            "olid": "OL6732939M"
        },
        {
            "title": "A Veiled Reflection",
            "cover": "https://covers.openlibrary.org/b/id/1438659-M.jpg",
            "authors": [
                {
                    "url": "https://openlibrary.org/authors/OL18777A/Tracie_Peterson",
                    "name": "Tracie Peterson"
                }
            ],
            "olid": "OL30460M"
        },
        {
            "title": "Death Of A Peer",
            "cover": "https://covers.openlibrary.org/b/id/6972261-M.jpg",
            "authors": [
                {
                    "url": "https://openlibrary.org/authors/OL26952A/Ngaio_Marsh",
                    "name": "Ngaio Marsh"
                }
            ],
            "olid": "OL24948637M"
        },
        {
            "title": "The Aeneid",
            "cover": "https://covers.openlibrary.org/b/id/7886771-M.jpg",
            "authors": [
                {
                    "url": "https://openlibrary.org/authors/OL28294A/Publius_Vergilius_Maro",
                    "name": "Publius Vergilius Maro"
                }
            ],
            "olid": "OL1631378M"
        },
        {
            "title": "The Art Of War",
            "cover": "https://covers.openlibrary.org/b/id/7883930-M.jpg",
            "authors": [
                {
                    "url": "https://openlibrary.org/authors/OL2632419A/Sun_Tzu",
                    "name": "Sun Tzu"
                }
            ],
            "olid": "OL7101974M"
        },
        {
            "title": "The Autobiography Of Benjamin Franklin",
            "cover": "https://covers.openlibrary.org/b/id/7883945-M.jpg",
            "authors": [
                {
                    "url": "https://openlibrary.org/authors/OL26170A/Benjamin_Franklin",
                    "name": "Benjamin Franklin"
                }
            ],
            "olid": "OL6990157M"
        },
        {
            "title": "The Iliad Of Homer",
            "cover": "https://covers.openlibrary.org/b/id/7883931-M.jpg",
            "authors": [
                {
                    "url": "https://openlibrary.org/authors/OL6848355A/Homer",
                    "name": "Homer"
                }
            ],
            "olid": "OL22895148M"
        },
        {
            "title": "Almost An Island",
            "cover": "https://covers.openlibrary.org/b/id/7884757-M.jpg",
            "authors": [
                {
                    "url": "https://openlibrary.org/authors/OL219709A/Bruce_Berger",
                    "name": "Bruce Berger"
                }
            ],
            "olid": "OL349749M"
        },
        {
            "title": "The Adventures Of Oliver Twist",
            "cover": "https://covers.openlibrary.org/b/id/7883999-M.jpg",
            "authors": [
                {
                    "url": "https://openlibrary.org/authors/OL24638A/Charles_Dickens",
                    "name": "Charles Dickens"
                }
            ],
            "olid": "OL24347578M"
        },
        {
            "title": "A Groom With A View",
            "cover": "https://covers.openlibrary.org/b/id/7907989-M.jpg",
            "authors": [
                {
                    "url": "https://openlibrary.org/authors/OL21264A/Jill_Churchill",
                    "name": "Jill Churchill"
                }
            ],
            "olid": "OL33674M"
        },
        {
            "title": "Beowulf",
            "cover": "https://covers.openlibrary.org/b/id/7883977-M.jpg",
            "authors": [
                {
                    "url": "https://openlibrary.org/authors/OL2604010A/Beowulf",
                    "name": "Beowulf"
                }
            ],
            "olid": "OL7193048M"
        },
        {
            "title": "Break No Bones",
            "cover": "https://covers.openlibrary.org/b/id/4698487-M.jpg",
            "authors": [
                {
                    "url": "https://openlibrary.org/authors/OL24769A/Kathy_Reichs",
                    "name": "Kathy Reichs"
                }
            ],
            "olid": "OL7950349M"
        },
        {
            "title": "The Prince And The Pauper",
            "cover": "https://covers.openlibrary.org/b/id/7884580-M.jpg",
            "authors": [
                {
                    "url": "https://openlibrary.org/authors/OL18319A/Mark_Twain",
                    "name": "Mark Twain"
                }
            ],
            "olid": "OL979600M"
        }
    ]
});

function* rootSaga() {
    yield Object.values(sagas).map((saga) => fork(saga));
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(
        sagaMiddleware,
    )),
);

sagaMiddleware.run(rootSaga);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
