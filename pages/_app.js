import React from 'react';
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../lib/apolloClient'
import globalStyles from '../styles/global';
import 'lazysizes';
import 'react-image-lightbox/style.css';

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps)
  return (
    <ApolloProvider client={apolloClient}>      
      <Component {...pageProps} />
      <style global jsx>
        {globalStyles}
      </style>
    </ApolloProvider>
  )
}