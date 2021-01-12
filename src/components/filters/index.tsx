import { FC, createElement, ReactElement } from 'react';
import BreakfastIcon from '@assets/roomfilter/breakfast.svg';
import PaylaterIcon from '@assets/roomfilter/paylater.svg';
import PayhotelIcon from '@assets/roomfilter/payhotel.svg';
import NonsmokingIcon from '@assets/roomfilter/non-smoking.svg';
import WifiIcon from '@assets/roomfilter/wifi.svg';

import classes from './styles';
import { useDispatch } from 'react-redux';
import { setSelectedFilters } from './actions';
import { useSelector } from '@helpers/redux-helpers';
import { FiltersList } from './types';

const Filters: FC = () => {
  const dispatch = useDispatch();
  const filters = useSelector((store) => store.filters.selectedFilters);

  const filterOptions: Array<{ name: FiltersList; label: string; icon: ReactElement }> = [
    { name: 'hasBreakfast', label: 'Breakfast', icon: createElement(BreakfastIcon, null) },
    { name: 'canPayLater', label: 'Pay Later', icon: createElement(PaylaterIcon, null) },
    { name: 'payAtHotel', label: 'Pay at Hotel', icon: createElement(PayhotelIcon, null) },
    { name: 'nonSmoking', label: 'Non Smoking', icon: createElement(NonsmokingIcon, null) },
    { name: 'hasWifi', label: 'Free WiFi', icon: createElement(WifiIcon, null) },
  ];

  const toggleFilters = (option: FiltersList) => {
    const newFilters = [...filters];
    if (newFilters.includes(option)) {
      const index = newFilters.indexOf(option);
      if (index > -1) {
        newFilters.splice(index, 1);
      }
      dispatch(setSelectedFilters(newFilters));
    } else {
      dispatch(setSelectedFilters([...newFilters, option]));
    }
  };

  return (
    <div css={classes.filterSection}>
      <div css={classes.sectionTitle}>Filters</div>
      <ol css={classes.optionCarousel}>
        {filterOptions.map((option) => {
          const isSelected = filters.includes(option.name);
          return (
            <li
              key={option.name}
              css={[classes.filterOption, isSelected && classes.filterOptionSelected]}
              onClick={() => toggleFilters(option.name)}
            >
              <div css={classes.filterIcon}>{option.icon}</div>
              <span css={classes.filterName}>{option.label}</span>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Filters;
