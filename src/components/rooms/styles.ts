import { Interpolation, Theme } from '@emotion/react';

const styles: { [className: string]: Interpolation<Theme> } = {
  roomList: (theme) => ({ padding: theme.spacing(2) }),
  roomCard: (theme) => ({
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    borderRadius: '6px',
    boxShadow: '0 1px 4px 0 rgba(145, 175, 209, 0.24), 0 0 1px 0 rgba(145, 175, 209, 0.24)',
    marginBottom: theme.spacing(4),
  }),
  roomTitle: (theme) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(1),
  }),
  roomName: { fontSize: '17px', lineHeight: '24px', fontWeight: 'bold' },
  roomSurface: { fontSize: '10px', color: '#a3acb8', margin: '4px' },
  roomImage: { borderRadius: '6px 6px 0 0' },
  roomInfoButton: {
    fontSize: '13px',
    lineHeight: '24px',
    fontWeight: 'bold',
    color: '#525f6f',
    '& svg': { width: '8px', height: '8px' },
    '&:hover': {
      opacity: 0.6,
    },
  },
  roomSummaryBox: {},
  roomOfferList: (theme) => ({
    overflow: 'hidden',
    height: '156px',
    padding: theme.spacing(1),
    '& > :not(:last-child)': {
      borderBottom: '1px solid #dae9fa',
    },
  }),
  roomOffer: {
    display: 'flex',
    padding: '8px 0',
  },
  roomFeatures: {
    flex: '5 1 0px',
    fontSize: '14px',
    lineHeight: '16px',
    color: '#525f6f',
  },
  roomPriceBox: { display: 'flex', flexDirection: 'column', textAlign: 'right', padding: '0 8px' },
  roomPriceBadge: {
    fontSize: '10px',
    lineHeight: '14px',
    color: '#a3acb8',
    textDecoration: 'line-through',
  },
  roomPrice: { fontSize: '16px', lineHeight: '22px', fontWeight: 'bold' },
  addToBasketButton: (theme) => ({
    backgroundColor: theme.palette.primary,
    color: theme.palette.common.white,
    fontSize: '18px',
    lineHeight: '20px',
    padding: '10px 13px',
    borderRadius: '4px',
    '&:hover': {
      backgroundColor: `${theme.palette.primary}80`,
    },
  }),
  moreDealsButton: {
    position: 'absolute',
    bottom: '0',
    width: '100%',
    textAlign: 'center',
    fontSize: '12px',
    lineHeight: '34px',
    color: '#525f6f',
    background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 1) 100%)',
    borderRadius: '0 0 6px 6px',
    '& svg': {
      width: '20px',
      height: '10px',
      transform: 'rotate(90deg)',
    },
    '&:hover': {
      opacity: 0.6,
    },
  },
};

export default styles;
