import App, { Container } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import withReduxStore from '../lib/with-redux-store';
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { CookiesProvider } from 'react-cookie';

class MyApp extends App {
  render() {
    const {
      Component,
      pageProps,
      reduxStore,
    } = this.props;

    return (
      <ThemeProvider>
        <CSSReset />
        <CookiesProvider>
          <Container>
            <Provider store={reduxStore}>
              <Component {...pageProps} />
            </Provider>
          </Container>
        </CookiesProvider>
      </ThemeProvider>
    );
  }
}

export default withReduxStore(MyApp);
