import { firebaseDb } from '../../firebase/firebase';
import { fetchSchoolsSuccess } from './actions';

export const buildFetchSchools = (dispatch) => {
  const schoolList = {};

  firebaseDb.collection('schools')
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach(doc => schoolList[doc.id] = doc.data());
    })
    .then(() => dispatch(fetchSchoolsSuccess(schoolList)));
};
