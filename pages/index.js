import React from 'react';

import { initializeApollo, addApolloState } from '../lib/apolloClient';
import { gql, useQuery } from '@apollo/client';

import Head from '../components/head';
import Layout from '../components/Layout';
import CatalogTemplate from '../components/Templates/CatalogTemplate';
import {HOME_QUERY, FOOTER_QUERY,MENU_QUERY, HOMEPAGE_MENU_QUERY} from '../queries';

export const QUERY = gql`
query  {
  ${HOME_QUERY}
  ${MENU_QUERY}
  ${FOOTER_QUERY}
}`;

export async function getStaticProps() {  
  const apolloClient = initializeApollo();
  await apolloClient.query({
    query: QUERY
  });
  return addApolloState(apolloClient, {
    props: {},
    revalidate: 1,
  });
};

const Home = ({}) => {
  const { loading, error, data } = useQuery(QUERY);

  if (loading) return "";
  if (error) return `${error.message}`;

  const { catalogs:home, menu, footer} = data

  return (
    <>
      <Head  
          title={home[0].title}
          description={home[0].description}
          url="/"
          ogImage="/favicon.ico" />
      <Layout footer={footer} menu={menu}>
        <CatalogTemplate catalog={home[0]} pagemenu={undefined}/>
      </Layout>
      <style jsx>{`
      
      `}</style>
    </>
  );
}

export default Home;