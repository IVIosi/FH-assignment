import { useSelector as useReactReduxSelector, TypedUseSelectorHook } from 'react-redux';

import { AppState } from '@configs/store-configs';

export const useSelector: TypedUseSelectorHook<AppState> = useReactReduxSelector;
