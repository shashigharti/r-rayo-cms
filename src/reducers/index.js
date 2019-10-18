import { combineReducers } from 'redux';

import { authentication } from './authentication';
import { registration } from './registration';
import { users } from './users';
import { alert } from './alert';
import { pages } from './pages';

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert,
  pages,
});

export default rootReducer;
