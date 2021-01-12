import { createStore, combineReducers, Store } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import { filtersReducer } from '@components/filters/reducers';

const rootReducer = combineReducers({
  filters: filtersReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

const storeConfigs = (): Store => {
  const store = createStore(rootReducer, composeWithDevTools());
  return store;
};

export default storeConfigs;
