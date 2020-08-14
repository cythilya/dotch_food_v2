import App, { Container } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import withReduxStore from '../lib/with-redux-store';
import { ThemeProvider, CSSReset } from "@chakra-ui/core";

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <ThemeProvider>
        <CSSReset />
        <Container>
          <Provider store={reduxStore}>
            <Component {...pageProps} />
          </Provider>
        </Container>
      </ThemeProvider>
    );
  }
}

export default withReduxStore(MyApp);
