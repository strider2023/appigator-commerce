import '../styles/globals.scss';
import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { APP_THEME } from '../constants/AppTheme.constants';
import { LanguageContext } from '../common/providers/LanguageContext';
import { useRouter } from 'next/router';
import { en } from '../locales/en';
import AppHead from '../common/components/AppHead';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.REACT_APP_SERVER_ENDPOINT,
  cache: new InMemoryCache()
});

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  // TODO: Language switcher
  const t = router.locale === 'en' ? en : en;

  return (
    <>
      <AppHead />
      <ApolloProvider client={client}>
        <LanguageContext.Provider value={t}>
          <ThemeProvider theme={APP_THEME}>
            <Component {...pageProps} />
          </ThemeProvider>
        </LanguageContext.Provider>
      </ApolloProvider>
    </>
  );
}

export default MyApp
