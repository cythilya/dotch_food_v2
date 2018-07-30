import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { Comment, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Comments = ({ data }) => {
  return (
    <div>
      <Comment.Group>
        <Header as="h3" dividing>
          評價
        </Header>
        {
          _.map(data, (item, index) => {
            return (
              <Comment key={index}>
                <Comment.Avatar src={item.image} />
                <Comment.Content>
                  <Link to="/">
                    {item.name}
                  </Link>
                  <Comment.Metadata>
                    <div>
                      {item.time}
                    </div>
                  </Comment.Metadata>
                  <Comment.Text>
                    {item.text}
                  </Comment.Text>
                </Comment.Content>
              </Comment>
            );
          })
        }
      </Comment.Group>
    </div>
  );
};

Comments.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Comments;
