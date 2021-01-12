import { Interpolation, Theme } from '@emotion/react';

const styles: { [className: string]: Interpolation<Theme> } = {
  basket: {
    position: 'sticky',
    bottom: 0,
    backgroundColor: '#ffffff',
    borderRadius: '12px 12px 0 0',
  },
  basketListTitle: {
    textAlign: 'center',
    fontSize: '20px',
    lineHeight: '24px',
    fontWeight: 'bold',
    padding: '16px',
    color: '#2a333d',
    borderBottom: '1px solid #e4e8ef',
  },
  basketList: (theme) => ({
    padding: `0 ${theme.spacing(2)}px`,
    // backgroundColor: '#dae9fa',
    '& > :not(:last-child)': {
      borderBottom: '1px solid #dae9fa',
    },
  }),
  basketListItem: {
    display: 'flex',
    padding: '16px 0',
  },
  basketListItemImage: {
    borderRadius: '4px',
    overflow: 'hidden',
    width: '40px',
    height: '40px',
    marginRight: '12px',
    '& img': {
      height: '100%',
      width: 'auto',
    },
  },
  basketListItemCounter: (theme) => ({
    display: 'flex',
    width: '142px',
    borderRadius: '4px',
    border: '1px solid #dae9fa',
    color: theme.palette.primary,
    height: '48px',
    '& button': {
      width: '47px',
      fontSize: '30px',
      lineHeight: '30px',
      '&:hover': {
        opacity: 0.8,
      },
    },
    '& input': {
      width: '47px',
      border: 'none',
      textAlign: 'center',
      borderRight: '1px solid #dae9fa',
      borderLeft: '1px solid #dae9fa',
      '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
        appearance: 'none',
        margin: 0,
      },
    },
  }),
  basketSummary: {
    display: 'flex',
    height: '72px',
    borderTop: '1px solid #e4e8ef',
    padding: '12px 16px',
    cursor: 'pointer',
  },
  basketChevron: {
    padding: '16px 16px 16px 0',
    '& svg': {
      width: '10px',
      height: '16px',
    },
  },
  totalOrder: {
    flex: '5 1 0px',
    display: 'flex',
    flexDirection: 'column',
  },
  totalCount: { fontSize: '13px', lineHeight: '20px', fontWeight: 'bold', color: '#2a333d' },
  totalPrice: { fontSize: '13px', lineHeight: '20px', color: '#525f6f' },
  bookButton: (theme) => ({
    backgroundColor: theme.palette.primary,
    color: theme.palette.common.white,
    fontSize: '18px',
    lineHeight: '20px',
    padding: '10px 13px',
    borderRadius: '4px',
    width: '142px',
    '&:hover': {
      backgroundColor: `${theme.palette.primary}80`,
    },
  }),
  roomBasketOverlay: {
    position: 'fixed',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: '#002c61',
    opacity: 0.7,
  },
};

export default styles;
