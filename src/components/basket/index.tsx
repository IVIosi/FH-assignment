import { FC, useState } from 'react';

import ChevronIcon from '@assets/icons/chevron/chevron XS - rightr.svg';
import hotelRoom from '@assets/mock/hotelroom1.jpg';

import classes from './styles';

const RoomBasket: FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleOpenBasket = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      {isOpen && <div css={classes.roomBasketOverlay} onClick={toggleOpenBasket} />}
      <div css={classes.basket}>
        {isOpen && (
          <>
            <div css={classes.basketListTitle}>Room Selection</div>
            <ul css={classes.basketList}>
              {[0, 1].map(() => (
                <li css={classes.basketListItem}>
                  <div css={classes.basketListItemImage}>
                    <img src={hotelRoom as string} />
                  </div>
                  <div css={classes.totalOrder}>
                    <span css={classes.totalCount}>Deluxe room</span>
                    <span css={classes.totalPrice}>4 x $314</span>
                  </div>
                  <div css={classes.basketListItemCounter}>
                    <button>-</button>
                    <input type="number" min={0} max={5} />
                    <button>+</button>
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}
        <div css={classes.basketSummary} onClick={toggleOpenBasket}>
          <span css={classes.basketChevron}>
            <ChevronIcon css={{ transform: `rotate(${isOpen ? '90deg' : '-90deg'})` }} />
          </span>
          <div css={classes.totalOrder}>
            <span css={classes.totalCount}>5 rooms</span>
            <span css={classes.totalPrice}>Total $ 1740</span>
          </div>
          <button css={classes.bookButton}>Book</button>
        </div>
      </div>
    </>
  );
};

export default RoomBasket;
