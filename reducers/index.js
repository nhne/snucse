import userId from './userId';
import postList from './postList';
import profileList from './profileList';
import profileForm from './profileForm';
import comment from './comment';
// import * as types from '../actions/actionTypes';
// import other reducers

// define other reducers

const reducers = {
  profileList,
  profileForm,
  postList,
  comment,
  userId
  // list up all reducers
};

// this file exports a mere object, which is to be combined at app.js later
export default reducers;
