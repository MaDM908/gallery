import { applyMiddleware, combineReducers, createStore } from 'redux';
import galleryReducer from './gallery-reducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

const reducersBatch = combineReducers({
    gallery: galleryReducer,
    form: formReducer
});

const store = createStore(reducersBatch, applyMiddleware(thunkMiddleware));




export default store;