import { FC } from 'react';

import classes from './styles';

const NightlyPriceSlider: FC = () => {
  return (
    <div css={classes.nightlyPriceSlider}>
      <div css={classes.titleValue}>
        <span css={classes.sliderTitle}>Nightly Price</span>
        <span css={classes.sliderValue}>$ 500</span>
      </div>
      <div css={classes.sliderContainer}>
        <input type="range" min="1" max="100" defaultValue="50" css={classes.slider} />
      </div>
    </div>
  );
};

export default NightlyPriceSlider;
