import { FC, createElement } from 'react';
import BreakfastIcon from '@assets/roomfilter/breakfast.svg';
import PaylaterIcon from '@assets/roomfilter/paylater.svg';
import PayhotelIcon from '@assets/roomfilter/payhotel.svg';
import NonsmokingIcon from '@assets/roomfilter/non-smoking.svg';
import WifiIcon from '@assets/roomfilter/wifi.svg';

import classes from './styles';

const Filters: FC = () => {
  const filterOptions = [
    { name: 'Breakfast', icon: createElement(BreakfastIcon, null) },
    { name: 'Pay Later', icon: createElement(PaylaterIcon, null) },
    { name: 'Pay at Hotel', icon: createElement(PayhotelIcon, null) },
    { name: 'Non Smoking', icon: createElement(NonsmokingIcon, null) },
    { name: 'Free WiFi', icon: createElement(WifiIcon, null) },
  ];
  return (
    <div css={classes.filterSection}>
      <div css={classes.sectionTitle}>Filters</div>
      <ol css={classes.optionCarousel}>
        {filterOptions.map((option) => {
          return (
            <li key={option.name} css={classes.filterOption}>
              <div css={classes.filterIcon}>{option.icon}</div>
              <span css={classes.filterName}>{option.name}</span>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Filters;
