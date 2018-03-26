import { combineReducers } from 'redux';
import schoolsReducer from './schools/reducer';

export default combineReducers({
  schools: schoolsReducer,
});
