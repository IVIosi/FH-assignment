import { setMaxPrice } from '@components/nightly-price-slider/actions';
import { useSelector } from '@helpers/redux-helpers';
import { FC, MouseEvent } from 'react';
import { useDispatch } from 'react-redux';

import classes from './styles';

const NightlyPriceSlider: FC = () => {
  const dispatch = useDispatch();

  const maxPrice = useSelector((store) => store.nightlyPrice.maxPrice);

  const handleSliderChange = (e: MouseEvent) => {
    const target = e.target as HTMLInputElement;
    dispatch(setMaxPrice(Number(target.value)));
  };

  return (
    <div css={classes.nightlyPriceSlider}>
      <div css={classes.titleValue}>
        <span css={classes.sliderTitle}>Nightly Price</span>
        <span css={classes.sliderValue}>$ {maxPrice}</span>
      </div>
      <div css={classes.sliderContainer}>
        <input
          type="range"
          min="1"
          max="200"
          defaultValue={maxPrice}
          css={classes.slider}
          onMouseUp={handleSliderChange}
        />
      </div>
    </div>
  );
};

export default NightlyPriceSlider;
