import { createStore, applyMiddleware, compose } from 'redux';
import rootReduce from './../reducers/rootReduce';
import thunk from 'redux-thunk';
import {createBrowserHistory} from 'history';
import {routerMiddleware} from 'connected-react-router';

export const history = createBrowserHistory();

export default function ConfigureStore(initialState: any){
    const composeEnhancers = (<any>window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return createStore(
        rootReduce(history),
        initialState,
        composeEnhancers(
            applyMiddleware(
                thunk,
                routerMiddleware(history))
        )
    );
}