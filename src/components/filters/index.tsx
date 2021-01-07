import { FC } from 'react';

const Filters: FC = () => {
  return (
    <div
      css={(theme) => ({
        height: '96px',
        borderTop: '1px solid rgba(0, 44, 97, 0.05)',
        borderBottom: '1px solid rgba(0, 44, 97, 0.05)',
      })}
    >
      <div
        css={(theme) => ({
          fontSize: '10px',
          color: theme.palette.text.secondary,
          textAlign: 'center',
        })}
      >
        Filters
      </div>
    </div>
  );
};

export default Filters;
