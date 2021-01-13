import { Action } from 'redux';

// Describing the shape of this slice of state
export type FiltersList = 'hasWifi' | 'hasBreakfast' | 'canPayLater' | 'payAtHotel' | 'nonSmoking';

export interface FiltersState {
  selectedFilters: Array<FiltersList>;
}

// Describing the different ACTION NAMES available
export const SET_SELECTED_FILTERS = 'SET_SELECTED_FILTERS';

export interface SetSelectedFilters extends Action {
  type: typeof SET_SELECTED_FILTERS;
  payload: Array<FiltersList>;
}

export type FiltersActionTypes = SetSelectedFilters;
