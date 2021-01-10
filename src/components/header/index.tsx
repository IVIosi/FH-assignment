import { FC } from 'react';
import ChevronIcon from '@assets/icons/chevron/chevron XS - rightr.svg';

import classes from './styles';

const Header: FC = () => {
  return (
    <header css={classes.header}>
      <span css={classes.backButton}>
        <ChevronIcon css={classes.backIcon} />
      </span>
      <div css={classes.mainTitleBox}>
        <h1 css={classes.mainTitle}>All Deals</h1>
        <h2 css={classes.mainSubtitle}>DoubleTree by Hilton Hotels</h2>
      </div>
      <span css={classes.settingsButton}>settings</span>
    </header>
  );
};

export default Header;
