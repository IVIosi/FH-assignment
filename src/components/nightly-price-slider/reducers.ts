import { NightlyPriceState, NightlyPriceActionTypes, SET_MAX_PRICE } from './types';

const initialState: NightlyPriceState = {
  maxPrice: 100,
};

export function nightlyPriceReducer(
  state = initialState,
  action: NightlyPriceActionTypes,
): NightlyPriceState {
  switch (action.type) {
    case SET_MAX_PRICE:
      return {
        ...state,
        maxPrice: action.payload,
      };
    default:
      return state;
  }
}
