import {
  FETCH_SCHOOLS,
  FETCH_SCHOOLS_SUCCESS,
} from './action-types';

// Schools reducer
export const schoolsReducer = (state = {}, { payload, type }) => {
  switch (type) {
    case FETCH_SCHOOLS:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SCHOOLS_SUCCESS:
      return {
        ...state,
        list: payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default schoolsReducer;
