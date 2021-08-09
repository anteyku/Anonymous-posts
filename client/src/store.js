import { composeWithDevTools } from 'redux-devtools-extension';
import postReducer from "./reducers/PostReducer";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';



export const store = createStore(postReducer, composeWithDevTools(applyMiddleware(thunk)))