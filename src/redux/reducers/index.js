import {combineReducers} from 'redux';
import counterReducer from './counterReducer';

// reducers combined
const reducers = combineReducers({
    counterReducer:counterReducer
})


export default reducers;