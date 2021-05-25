import {createStore,applyMiddleware,compose} from "redux";
import rootReducers from '../reducers'
import thunk from 'redux-thunk';

const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
const store = createStore(rootReducers,composeEnhancer(applyMiddleware(thunk)));

export default store; 