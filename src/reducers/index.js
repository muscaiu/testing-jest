import { combineReducers } from 'redux';
// import commentsReducer from './comments'
import app from './app';

const rootReducer = combineReducers({
    //   comments: commentsReducer
    app,
});

export default rootReducer;
