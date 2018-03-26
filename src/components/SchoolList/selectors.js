import { get } from 'lodash';

export const getSchoolList = state => get(state, 'schools.list', {});
export const isLoading = state => get(state, 'schools.loading', false);
