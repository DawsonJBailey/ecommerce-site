import { USER_ACTION_TYPES } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
    // Since redux uses all the reducers we return state
    // like this so it knows to keep this one the same and
    // to go through the other reducers without having
    // this one change anything
      return state;
  }
};


