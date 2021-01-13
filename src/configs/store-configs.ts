import { createStore, combineReducers } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import { filtersReducer } from '@components/filters/reducers';
import { nightlyPriceReducer } from '@components/nightly-price-slider/reducers';

const rootReducer = combineReducers({
  filters: filtersReducer,
  nightlyPrice: nightlyPriceReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, composeWithDevTools());

export default store;
