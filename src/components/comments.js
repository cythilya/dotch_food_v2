import React from 'react';
import { Button, Comment, Header, } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import _ from 'lodash';

const Comments = ({ data }) => {
  return (
    <div>
      <Comment.Group>
        <Header as='h3' dividing>評價</Header>
        {
          _.map(data, (item, index) => {
            return (
              <Comment key={index}>
                <Comment.Avatar src={item.image} />
                <Comment.Content>
                  <Link to='/'>{item.name}</Link>
                  <Comment.Metadata>
                    <div>{item.time}</div>
                  </Comment.Metadata>
                  <Comment.Text>{item.text}</Comment.Text>
                </Comment.Content>
              </Comment>
            )
          })
        }
      </Comment.Group>
    </div>
  );
}

export default Comments;