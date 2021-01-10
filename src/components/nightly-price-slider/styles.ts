import { Interpolation, Theme } from '@emotion/react';

const styles: { [className: string]: Interpolation<Theme> } = {
  nightlyPriceSlider: (theme) => ({
    height: '64px',
    padding: theme.spacing(2),
    backgroundColor: 'rgba(254, 254, 255, 0.95)',
  }),
  titleValue: (theme) => ({
    display: 'flex',
    justifyContent: 'space-between',
    color: theme.palette.primary,
    fontWeight: 'bold',
  }),
  sliderTitle: {
    fontSize: '12px',
  },
  sliderValue: {
    fontSize: '14px',
  },
  slider: (theme) => ({
    appearance: 'none',
    width: '100%',
    height: '2px',
    borderRadius: '5px',
    background: '#bed2e9',
    outline: 'none',
    opacity: '0.7',
    transition: 'opacity .2s',
    '&: hover': {
      opacity: 1,
    },
    '&::-webkit-slider-thumb': {
      appearance: 'none',
      width: '26px',
      height: '26px',
      borderRadius: '50%',
      border: `2px solid ${theme.palette.primary}`,
      background: theme.palette.secondary,
      cursor: 'pointer',
    },
    '&::-moz-range-thumb': {
      width: '26px',
      height: '26px',
      borderRadius: '50%',
      border: `2px solid ${theme.palette.primary}`,
      background: theme.palette.secondary,
      cursor: 'pointer',
    },
  }),
  sliderContainer: {
    width: '100%',
  },
};

export default styles;
