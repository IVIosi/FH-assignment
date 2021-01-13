import { FiltersList, FiltersActionTypes, SET_SELECTED_FILTERS } from './types';

export const setSelectedFilters = (payload: Array<FiltersList>): FiltersActionTypes => {
  return {
    type: SET_SELECTED_FILTERS,
    payload,
  };
};
