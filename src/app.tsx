import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@emotion/react';

import { storeConfigs, themeConfigs } from './configs';
import './configs/i18n-configs';

const store = storeConfigs();

const App: FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={themeConfigs}>FindHotel</ThemeProvider>
    </Provider>
  );
};

export default App;
