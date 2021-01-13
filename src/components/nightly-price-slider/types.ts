import { Action } from 'redux';

// Describing the shape of this slice of state
export interface NightlyPriceState {
  maxPrice: number;
}

// Describing the different ACTION NAMES available
export const SET_MAX_PRICE = 'SET_MAX_PRICE';

export interface SetMaxPrice extends Action {
  type: typeof SET_MAX_PRICE;
  payload: number;
}

export type NightlyPriceActionTypes = SetMaxPrice;
