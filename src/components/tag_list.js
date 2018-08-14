import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TagList = ({ tags }) => {
  return (
    <div>
      熱門推薦
      <ul className="unordered-list-circle">
        {
          _.map(tags, (item, index) => {
            return (
              <li key={index}>
                <Link to={`/tags/${item}`}>
                  {item}
                </Link>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};

TagList.propTypes = {
  tags: PropTypes.array.isRequired,
};

export default TagList;
