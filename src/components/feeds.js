import React from 'react';
import { Feed } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import _ from 'lodash';

const Feeds = ({ data }) => {
  return(
    <div>
      有什麼新鮮事？
      <Feed>
        {
          _.map(data, (item, index) => {
            return (
              <Feed.Event key={index}>
                <Feed.Label>
                  <img src={item.image} />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Summary>
                    <Feed.User>{item.name}</Feed.User>&nbsp;在「
                    <Link to={`/store/${item.store.id}`}>{item.store.name}</Link>」享受美食。
                    <Feed.Date>{item.time}</Feed.Date>
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>
            )
          })
        }
      </Feed>
    </div>
  )
}

export default Feeds;