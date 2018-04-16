import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router-dom';

const TagList = ({ tags }) => {
  return (
    <div>
      看更多...
      <ul>
        {
          _.map(tags, (item, index) => {
            return (
              <li key={index}>
                <Link to={`/tags/${item}`}>{item}</Link>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default TagList;