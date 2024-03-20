
import rootRedusers from "../reducers/rootRedusers"
import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
// import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';



// const store = createStore(rootRedusers, applyMiddleware(thunk));

 const initialState = {

 }
 const middleware = [thunk]

const store = configureStore({
   
    reducer: rootRedusers, 
    preloadedState: initialState, 
    middleware: applyMiddleware(...middleware)
})

export default store;

