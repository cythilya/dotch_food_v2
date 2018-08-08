import React from 'react';
import { Link } from 'react-router-dom';
import { Header as HeaderSemanticUI, Grid, Icon } from 'semantic-ui-react';
// import SearchBar from '../containers/search_bar';

const Header = () => {
  return (
    <Grid>
      <Grid.Column width={1} verticalAlign="middle">
        <Link to="/">
          <Icon size="huge" name="food" color="orange" />
        </Link>
      </Grid.Column>
      <Grid.Column width={12}>
        <HeaderSemanticUI
          block
          as="h1"
          content="吃什麼，どっち"
          subheader="今天吃飯，該吃什麼好呢？只要輸入美食欲望，立刻給你最真實、現場、生活化的評價，找餐廳再也不煩惱，就讓吃什麼，どっち幫你決定吃什麼！"
        />
      </Grid.Column>
      <Grid.Column width={3} verticalAlign="middle">
        {/* <SearchBar /> */}
      </Grid.Column>
    </Grid>
  );
};

export default Header;
