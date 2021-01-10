import { FC } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider, Global } from '@emotion/react';

import globalStyles from '@assets/styles/global';
import resetStyles from '@assets/styles/reset';
import { storeConfigs, themeConfigs } from '@configs/index';
import '@configs/i18n-configs';
import Header from '@components/header';
import Filters from '@components/filters';
import NightlyPriceSlider from '@components/nightly-price-slider';
import Rooms from '@components/rooms';

const store = storeConfigs();

const App: FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={themeConfigs}>
        <Global styles={[globalStyles, resetStyles]} />
        <Header />
        <Filters />
        <NightlyPriceSlider />
        <Rooms />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
