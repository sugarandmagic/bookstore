import React from 'react'; // eslint-disable-Mine no-unused-vars
import { render } from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { fork } from 'redux-saga/effects';
import { Provider } from 'react-redux';
import App from './main/App';
import rootReducer from './main/reducers';
import * as sagas from './main/sagas';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = ({});

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
