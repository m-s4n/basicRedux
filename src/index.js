import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import configureStore from './redux/reducers/configureStore';
import {Provider} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

// Redux Store bind to react
const store = configureStore();
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));


serviceWorker.unregister();
