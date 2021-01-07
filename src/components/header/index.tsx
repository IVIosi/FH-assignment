import { FC } from 'react';
import ChevronIcon from '@assets/icons/chevron/chevron XS - rightr.svg';

const Header: FC = () => {
  return (
    <header
      css={(theme) => ({
        display: 'flex',
        position: 'relative',
        height: '64px',
        justifyContent: 'center',
        alignItems: 'center',
      })}
    >
      <span
        css={(theme) => ({
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
        })}
      >
        <ChevronIcon
          height="12px"
          width="7px"
          viewBox="0 0 5 8"
          css={(theme) => ({
            position: 'absolute',
            top: '50%',
            right: '50%',
            transform: 'translate(50%, -50%) rotate(180deg)',
          })}
        />
      </span>
      <div
        css={(theme) => ({
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
        })}
      >
        <h1
          css={(theme) => ({
            fontSize: '17px',
            lineHeight: '24px',
            margin: '0',
            color: theme.palette.text.primary,
          })}
        >
          All Deals
        </h1>
        <h2
          css={(theme) => ({
            fontSize: '11px',
            lineHeight: '17px',
            margin: '0',
            textTransform: 'uppercase',
            color: theme.palette.text.secondary,
          })}
        >
          DoubleTree by Hilton Hotels
        </h2>
      </div>
      <span
        css={(theme) => ({
          position: 'absolute',
          right: theme.spacing(1.5),
          top: '50%',
          transform: 'translateY(-50%)',
          border: '1px solid',
          borderRadius: '50%',
          width: theme.spacing(3),
          height: theme.spacing(3),
        })}
      >
        <ChevronIcon
          height="12px"
          width="7px"
          viewBox="0 0 5 8"
          css={(theme) => ({
            width: '7px',
            height: '12px',
            transform: 'rotate(180deg)',
          })}
        />
      </span>
    </header>
  );
};

export default Header;
