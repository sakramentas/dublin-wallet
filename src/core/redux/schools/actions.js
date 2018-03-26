import { buildFetchSchools } from './firebaseBuild';
import {
  FETCH_SCHOOLS,
  FETCH_SCHOOLS_SUCCESS,
} from './action-types';

export const fetchSchools = () => (dispatch) => {
  dispatch(fetchSchoolsAction);
  buildFetchSchools(dispatch);
};

export const fetchSchoolsAction = {
  type: FETCH_SCHOOLS,
};

export const fetchSchoolsSuccess = data => ({
  type: FETCH_SCHOOLS_SUCCESS,
  payload: data,
});
