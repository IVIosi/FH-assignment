import { FiltersState, FiltersActionTypes, SET_SELECTED_FILTERS } from './types';

const initialState: FiltersState = {
  selectedFilters: [],
};

export function filtersReducer(state = initialState, action: FiltersActionTypes): FiltersState {
  switch (action.type) {
    case SET_SELECTED_FILTERS:
      return {
        ...state,
        selectedFilters: action.payload,
      };
    default:
      return state;
  }
}
