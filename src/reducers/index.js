import {combineReducers} from 'redux';

import user from './user';
import home from "./home";

const allReducers = combineReducers({
  user,
  home
});

export default allReducers;
