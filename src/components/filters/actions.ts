import { FiltersList, FiltersActionTypes, SET_SELECTED_FILTERS, SET_MAX_PRICE } from './types';

export const setSelectedFilters = (payload: Array<FiltersList>): FiltersActionTypes => {
  return {
    type: SET_SELECTED_FILTERS,
    payload,
  };
};

export const setMaxPrice = (payload: number): FiltersActionTypes => {
  return {
    type: SET_MAX_PRICE,
    payload,
  };
};
