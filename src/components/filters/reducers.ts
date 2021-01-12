import { FiltersState, FiltersActionTypes, SET_SELECTED_FILTERS, SET_MAX_PRICE } from './types';

const initialState: FiltersState = {
  selectedFilters: [],
  maxPrice: 500,
};

export function filtersReducer(state = initialState, action: FiltersActionTypes): FiltersState {
  switch (action.type) {
    case SET_SELECTED_FILTERS:
      return {
        ...state,
        selectedFilters: action.payload,
      };
    case SET_MAX_PRICE:
      return {
        ...state,
        maxPrice: action.payload,
      };
    default:
      return state;
  }
}
