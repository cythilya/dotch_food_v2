import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Icon from './icon';
import '../../style/components/tag_list.css';

const TagList = ({ tags }) => {
  return (
    <div styleName="tag-list">
      {
        _.map(tags, (item) => {
          return (
            <div
              key={item.id}
              styleName="tag-list__item"
            >
              <Link
                to={`/tags/${item.tag}`}
                title={item.title}
                styleName="tag-list__item__link"
              >
                <Icon
                  name={item.className}
                  title={item.title}
                  size={50}
                  fill=""
                />
                <span
                  styleName="tag-list__item__title"
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
