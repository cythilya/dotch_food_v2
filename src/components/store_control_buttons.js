import React from 'react';
import PropTypes from 'prop-types';
import '../../style/components/store_control_buttons.css';
import Icon from './icon';
import { icon as iconData } from '../data/locale_tw';

const StoreControlButtons = ({ store }) => {
  return (
    <div styleName="store_control_buttons ">
      { store.booking.phone
        && (
        <a
          title={iconData.phoneBooking}
          href={`tel:${store.booking.phone}`}
          className="button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            name="phone"
            title={iconData.phoneBooking}
          />
          <span className="button-with-line-breaks-text">
            {iconData.phoneBooking}
          </span>
        </a>
        )
      }
      { store.booking.online
        && (
        <a
          title={iconData.onlineBooking}
          href={`${store.booking.online}`}
          className="button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            name="online-booking"
            title={iconData.onlineBooking}
          />
          <span className="button-with-line-breaks-text">
            {iconData.onlineBooking}
          </span>
        </a>
        )
      }
      <a
        title={iconData.navigation}
        href={`https://www.google.com.tw/maps/search/${store.location.address}`}
        className="button"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon
          name="pin-on-map"
          title={iconData.navigation}
        />
        <span className="button-with-line-breaks-text short-word">
          {iconData.navigation}
        </span>
      </a>
    </div>
  );
};

StoreControlButtons.propTypes = {
  store: PropTypes.object.isRequired,
};

export default StoreControlButtons;
