import React from 'react';
import { Link } from 'react-router-dom';
import {
  Header as HeaderSemanticUI,
  Grid,
  Icon,
  Input,
} from 'semantic-ui-react';

const Header = () => {
  return (
    <Grid>
      <Grid.Column width={1} verticalAlign="middle">
        <Link to="/">
          <Icon size="huge" name="food" color="orange" />
        </Link>
      </Grid.Column>
      <Grid.Column width={13}>
        <HeaderSemanticUI
          block
          as="h1"
          content="吃什麼，どっち"
          subheader="今天吃飯，該吃什麼好呢？只要輸入美食欲望，立刻給你最真實、現場、生活化的評價，找餐廳再也不煩惱，就讓吃什麼，どっち幫你決定吃什麼！"
        />
      </Grid.Column>
      <Grid.Column width={2} verticalAlign="middle">
        <Input icon="search" placeholder="有什麼好吃的？" />
      </Grid.Column>
    </Grid>
  );
};

export default Header;
