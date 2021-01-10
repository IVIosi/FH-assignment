import { FC } from 'react';

import hotelRoom from '@assets/mock/hotelroom1.jpg';
import ChevronIcon from '@assets/icons/chevron/chevron XS - rightr.svg';

import classes from './styles';

const dealsLength = 3;

const Rooms: FC = () => {
  return (
    <div css={classes.roomList}>
      {[0, 1, 2].map(() => (
        <>
          <div css={classes.roomTitle}>
            <div>
              <span css={classes.roomName}>Deluxe Room</span>
              <span css={classes.roomSurface}>
                23M<sup>2</sup>
              </span>
            </div>
            <a css={classes.roomInfoButton}>
              <span>Room info</span>
              <ChevronIcon />
            </a>
          </div>
          <div css={classes.roomCard}>
            <div css={classes.roomSummaryBox}>
              <img alt="room name" css={classes.roomImage} src={hotelRoom as string} />
              <ol css={classes.roomOfferList}>
                {[0, 1, 2].map((item) => (
                  <li key={item} css={classes.roomOffer}>
                    <div css={classes.roomFeatures}>Refundable</div>
                    <div css={classes.roomPriceBox}>
                      <span css={classes.roomPriceBadge}>From $560</span>
                      <span css={classes.roomPrice}>$ 314</span>
                    </div>
                    <button css={classes.addToBasketButton}>Add</button>
                  </li>
                ))}
              </ol>
              {dealsLength > 2 && (
                <a css={classes.moreDealsButton}>
                  <span>More Deals</span>
                  <ChevronIcon />
                </a>
              )}
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Rooms;
