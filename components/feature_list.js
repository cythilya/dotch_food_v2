import React from 'react';
import PropTypes from 'prop-types';
import { features as featureData } from '../data/locale_tw';
import '../style/components/feature_list.css';

const FeatureList = ({ features }) => {
  const {
    cashOnly,
    customService,
    family,
    mrt,
    noTimeLimit,
    pokemon,
    parking,
    pet,
    socket,
    takeout,
    twentyfourhr,
    wifi,
  } = features;

  return (
    <div className="feature-list">
      { twentyfourhr
        && (
        <span
          title={featureData.twentyfourhr}
          className="feature-list__icon icon-24-hours"
        />
        )
      }

      { mrt
        && (
        <span
          title={featureData.mrt}
          className="feature-list__icon icon-train"
        />
        )
      }

      { noTimeLimit
        && (
        <span
          title={featureData.noTimeLimit}
          className="feature-list__text"
        >
            {featureData.noTimeLimit}
        </span>
        )
      }

      { parking
        && (
        <span
          title={featureData.parking}
          className="feature-list__icon icon-parking-yellow"
        />
        )
      }

      { socket
        && (
        <span
          title={featureData.socket}
          className="feature-list__icon icon-plug"
        />
        )
      }

      { takeout
        && (
        <span
          title={featureData.takeout}
          className="feature-list__icon icon-takeaway"
        />
        )
      }

      {
        wifi
        && (
        <span
          title={featureData.wifi}
          className="feature-list__icon icon-wifi"
        />
        )
      }

      { cashOnly
        && (
        <span
          title={featureData.cashOnly}
          className="feature-list__icon icon-cash"
        />
        )
      }

      { customService
        && (
        <span
          title={featureData.customService}
          className="feature-list__icon icon-pc-mechanic"
        />
        )
      }

      { family
        && (
        <span
          title={featureData.family}
          className="feature-list__icon icon-baby-boy"
        />
        )
      }

      { pet
        && (
        <span
          title={featureData.pet}
          className="feature-list__icon icon-pets"
        />
        )
      }

      { pokemon
        && (
        <span
          title={featureData.pokemon}
          className="feature-list__icon icon-pokecoin"
        />
        )
      }

    </div>
  );
};

FeatureList.propTypes = {
  features: PropTypes.array,
};

FeatureList.defaultProps = {
  features: [],
};

export default FeatureList;
