import { Action } from 'redux';

// Describing the shape of this slice of state
export type FiltersList = 'hasWifi' | 'hasBreakfast' | 'canPayLater' | 'payAtHotel' | 'nonSmoking';

export interface FiltersState {
  selectedFilters: Array<FiltersList>;
  maxPrice: number;
}

// Describing the different ACTION NAMES available
export const SET_SELECTED_FILTERS = 'SET_SELECTED_FILTERS';
export const SET_MAX_PRICE = 'SET_MAX_PRICE';

export interface SetSelectedFilters extends Action {
  type: typeof SET_SELECTED_FILTERS;
  payload: Array<FiltersList>;
}

export interface SetMaxPrice extends Action {
  type: typeof SET_MAX_PRICE;
  payload: number;
}

export type FiltersActionTypes = SetSelectedFilters | SetMaxPrice;
