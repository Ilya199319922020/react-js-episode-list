import thunk from 'redux-thunk';
import { applyMiddleware, combineReducers, compose } from 'redux';
import { legacy_createStore as createStore } from 'redux';
import episodesReducer from './reducers/episodesReducer';

const reducers = combineReducers({
	episodes: episodesReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
