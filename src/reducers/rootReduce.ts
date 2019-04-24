import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import account from './AccountReducer';

const rootReduce = (history: any) => combineReducers({
    router: connectRouter(history),
    account
});

export default rootReduce;