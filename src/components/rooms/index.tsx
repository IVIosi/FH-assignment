import { FC, Fragment } from 'react';

import hotelRoom from '@assets/mock/hotelroom1.jpg';
import ChevronIcon from '@assets/icons/chevron/chevron XS - rightr.svg';

import MockData from '@assets/mock/sample-hotel-data.json';

import classes from './styles';
import { getRoomPrice } from '@helpers/string-helpers';
import { useSelector } from '@helpers/redux-helpers';

const dealsLength = 1;

const Rooms: FC = () => {
  const filters = useSelector((store) => store.filters.selectedFilters);
  const maxPrice = useSelector((store) => store.filters.maxPrice);

  const filteredRooms = MockData.results[0].offers.filter((room) => {
    if (filters.length === 0) {
      return true;
    }

    const roomOptions = {
      hasWifi: room.tags?.includes('wifi') || false,
      hasBreakfast: room.meals?.includes('breakfast') || false,
      canPayLater: room.canPayLater || false,
      payAtHotel: room.canPayLater || false,
      nonSmoking:
        room.roomName.includes('Non Smoking') || room.roomName.includes('Non-Smoking') || false,
    };

    const isInPriceRange = getRoomPrice(room.rateBreakdown, true) < maxPrice;

    return filters.reduce((res, current) => {
      return res && roomOptions[current];
    }, isInPriceRange);
  });

  return (
    <div css={classes.roomList}>
      {filteredRooms.map((room) => (
        <Fragment key={room.roomID}>
          <div css={classes.roomTitle}>
            <div>
              <span css={classes.roomName}>{room.roomName}</span>
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
              <img alt={room.roomName} css={classes.roomImage} src={hotelRoom as string} />
              <ol css={classes.roomOfferList}>
                {[0].map((item) => (
                  <li key={item} css={classes.roomOffer}>
                    <div css={classes.roomFeatures}>Refundable</div>
                    <div css={classes.roomPriceBox}>
                      <span css={classes.roomPriceBadge}>From $560</span>
                      <span css={classes.roomPrice}>
                        $ {getRoomPrice(room.rateBreakdown, true)}
                      </span>
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
        </Fragment>
      ))}
    </div>
  );
};

export default Rooms;
