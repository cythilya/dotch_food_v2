import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { icon as iconData } from '../data/locale_tw';
import '../style/components/store_control_button.css';

const StoreControlButtons = ({ store }) => {
  return (
    <div className="store-control-buttons">
      { store.booking.phone
        && (
        <Link href={`tel:${store.booking.phone}`}>
          <a
            title={iconData.phoneBooking}
            className="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span
              className="store-control-buttons__icon icon-phone-white"
              title={iconData.phoneBooking}
            />
            <span className="button-with-line-breaks-text">
              {iconData.phoneBooking}
            </span>
          </a>
        </Link>
        )
      }
      { store.booking.online
        && (
        <Link href={`${store.booking.online}`}>
          <a
            title={iconData.onlineBooking}
            className="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span
              className="store-control-buttons__icon icon-online-booking"
              title={iconData.onlineBooking}
            />
            <span className="button-with-line-breaks-text">
              {iconData.onlineBooking}
            </span>
          </a>
        </Link>
        )
      }
      <Link href={`https://www.google.com.tw/maps/search/${store.location.address}`}>
        <a
          title={iconData.navigation}
          className="button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span
            className="store-control-buttons__icon icon-pin-on-map"
            title={iconData.navigation}
          />
          <span className="button-with-line-breaks-text short-word">
            {iconData.navigation}
          </span>
        </a>
      </Link>
    </div>
  );
};

StoreControlButtons.propTypes = {
  store: PropTypes.object.isRequired,
};

export default StoreControlButtons;
