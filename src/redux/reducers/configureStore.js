import {createStore} from 'redux';
import reducers from './index';

// created redux store and gived reducers.
export default function configureStore(){
    return createStore(reducers);
}