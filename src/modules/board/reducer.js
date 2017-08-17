import merge from 'lodash/merge';

const BoardReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    default:
      return state;
  }
};

export default BoardReducer;