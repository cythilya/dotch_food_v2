import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Icon from './icon';
import '../../style/components/tag_list.css';

const TagList = ({ tags }) => {
  return (
    <div className="tag-list">
      {
        _.map(tags, (item) => {
          return (
            <div
              key={item.id}
              className="tag-list__item"
            >
              <Link
                to={`/tags/${item.tag}`}
                title={item.title}
                className="tag-list__item__link"
              >
                <Icon
                  name={item.className}
                  title={item.title}
                  size={50}
                  fill=""
                />
                <span
                  className="tag-list__item__title"
                >
                  {item.title}
                </span>
              </Link>
            </div>
          );
        })
      }
    </div>
  );
};

TagList.propTypes = {
  tags: PropTypes.array.isRequired,
};

export default TagList;
