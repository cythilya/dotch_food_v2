import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TagList = ({ tags }) => {
  return (
    <ul className="unordered-list-circle">
      {
        _.map(tags, (item, index) => {
          return (
            <li key={index}>
              <Link
                to={`/tags/${item}`}
                title={item}
              >
                {item}
              </Link>
            </li>
          );
        })
      }
    </ul>
  );
};

TagList.propTypes = {
  tags: PropTypes.array.isRequired,
};

export default TagList;
