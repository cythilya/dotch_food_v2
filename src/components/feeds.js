import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { Feed } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Feeds = ({ data }) => {
  return (
    <div>
      有什麼新鮮事？
      <br />
      <Feed>
        {
          _.map(data, (item, index) => {
            return (
              <Feed.Event key={index}>
                <Feed.Label>
                  <img
                    src={item.image}
                    alt={item.name}
                  />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Summary>
                    <Feed.User>
                      {item.name}
                    </Feed.User>
                    &nbsp;在「
                    <Link
                      to={`/store/${item.store.id}`}
                    >
                      {item.store.name}
                    </Link>
                    」享受美食。
                    <Feed.Date>
                      {item.time}
                    </Feed.Date>
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>
            );
          })
        }
      </Feed>
    </div>
  );
};

Feeds.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Feeds;
