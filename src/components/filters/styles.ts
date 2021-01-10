import { Interpolation, Theme } from '@emotion/react';

const styles: { [className: string]: Interpolation<Theme> } = {
  filterSection: {
    height: '96px',
    borderTop: '1px solid #e4e8ef',
    borderBottom: '1px solid #e4e8ef',
    backgroundColor: 'rgba(254, 254, 255, 0.95)',
  },
  sectionTitle: (theme) => ({
    fontSize: '10px',
    lineHeight: '14px',
    color: theme.palette.text.secondary,
    textAlign: 'center',
  }),
  optionCarousel: {
    display: 'flex',
    listStyle: 'none',
    margin: '10px 0',
    padding: '0',
    overflow: 'scroll',
  },
  filterOption: (theme) => ({
    position: 'relative',
    height: theme.spacing(8),
    margin: `0 ${theme.spacing(2)}px`,
    cursor: 'pointer',
    color: theme.palette.primary,
    backgroundColor: theme.palette.background.default,
    '&:hover': {
      color: theme.palette.background.default,
      '& div': {
        backgroundColor: theme.palette.secondary,
        border: `2px solid ${theme.palette.primary}`,
      },
    },
  }),
  filterIcon: {
    borderRadius: '50%',
    border: `2px solid #bed2e9`,
    width: '40px',
    height: '40px',
  },
  filterName: (theme) => ({
    position: 'absolute',
    fontSize: '10px',
    lineHeight: '20px',
    right: '50%',
    transform: 'translateX(50%)',
    width: theme.spacing(8),
    textAlign: 'center',
    color: theme.palette.primary,
  }),
};

export default styles;
