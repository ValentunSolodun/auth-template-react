import {combineReducers} from 'redux';

import user from '../reducers/user';

const allReducers = combineReducers({
  user
});

export default allReducers;
