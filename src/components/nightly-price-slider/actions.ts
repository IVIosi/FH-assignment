import { NightlyPriceActionTypes, SET_MAX_PRICE } from './types';

export const setMaxPrice = (payload: number): NightlyPriceActionTypes => {
  return {
    type: SET_MAX_PRICE,
    payload,
  };
};
