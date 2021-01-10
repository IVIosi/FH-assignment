import { Interpolation, Theme } from '@emotion/react';

const styles: { [className: string]: Interpolation<Theme> } = {
  header: {
    display: 'flex',
    position: 'relative',
    height: '64px',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: (theme) => ({
    position: 'absolute',
    left: theme.spacing(1.5),
    top: '50%',
    transform: 'translateY(-50%)',
    width: theme.spacing(3),
    height: theme.spacing(3),
    borderRadius: '50%',
    cursor: 'pointer',
    '&: hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
    },
  }),
  backIcon: {
    position: 'absolute',
    height: '12px',
    width: '7px',
    top: '50%',
    right: '50%',
    transform: 'translate(50%, -50%) rotate(180deg)',
  },
  mainTitleBox: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
  },
  mainTitle: (theme) => ({
    fontSize: '17px',
    lineHeight: '24px',
    margin: '0',
    color: theme.palette.text.primary,
  }),
  mainSubtitle: (theme) => ({
    fontSize: '11px',
    lineHeight: '17px',
    margin: '0',
    textTransform: 'uppercase',
    color: theme.palette.text.secondary,
  }),
  settingsButton: (theme) => ({
    position: 'absolute',
    right: theme.spacing(1.5),
    top: '50%',
    transform: 'translateY(-50%)',
    border: '1px solid',
    borderRadius: '50%',
    width: theme.spacing(3),
    height: theme.spacing(3),
  }),
};

export default styles;
