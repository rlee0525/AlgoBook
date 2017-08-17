import { combineReducers } from 'redux';

import BoardReducer from 'modules/board/reducer';

const rootReducer = combineReducers({
  board: BoardReducer
});

export default rootReducer;
