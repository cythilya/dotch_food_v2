import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import '../style/components/store_comments.css';

const StoreComments = ({ comments }) => {
  const commentList = comments[0].comments || [];

  return (
    <div className="store-comments">
      {
        _.map(commentList, (item) => {
          const { user, content } = item;

          return (
            <div
              key={item.id}
              className="store-comments__item"
            >
              <div className="store-comments__item__user-image icon-kitty" />
              <div className="store-comments__item__detail">
                <div className="store-comments__item__user-name">
                  {user.name}
                </div>
                <div className="store-comments__item__content">
                  {content}
                </div>
              </div>
            </div>
          );
        })
      }
    </div>
  );
};

StoreComments.propTypes = {
  comments: PropTypes.array,
};

StoreComments.defaultProps = {
  comments: [],
};

export default StoreComments;
