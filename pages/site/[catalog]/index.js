import React from 'react';
import fetch from 'node-fetch';
import { initializeApollo, addApolloState } from '../../../lib/apolloClient';
import { gql, useQuery } from '@apollo/client';

import Head from '../../../components/head';
import Layout from '../../../components/Layout';
import CatalogTemplate from '../../../components/Templates/CatalogTemplate';

import {CATALOG_QUERY, FOOTER_QUERY,MENU_QUERY, PAGE_MENU_QUERY} from '../../../queries';

export const QUERY = gql`
query ($handle: String) {
  ${CATALOG_QUERY}
  ${MENU_QUERY}
  
  ${FOOTER_QUERY}
}
`;

export async function getStaticProps({params}) {
  // let catalog = params.catalog;
  let handle = params.catalog;
  const apolloClient = initializeApollo();
  await apolloClient.query({
    query: QUERY,
    variables: {
      handle: handle
    }
  });
  return addApolloState(apolloClient, {
    props: { handle },
    revalidate: 1,
  });
};

function Catalog({handle}) {
  const { loading, error, data } = useQuery(QUERY, { variables: { 
    handle: handle
  }});

  if (loading) return <div>Loading...</div>;
  if (error) return `${error.message}`;

  const { catalogs, menu, footer } = data

  return (
  <>
    <Head  
        title={catalogs[0].title}
        description={catalogs[0].description}
        url={`/site/${catalogs[0].handle}`}
        ogImage="/favicon.ico" />
    <Layout footer={footer} menu={menu}>
      <CatalogTemplate catalog={catalogs[0]} pagemenu={undefined}/>      
    </Layout>
    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        padding-bottom: 12px;
        line-height: 1.15;
        font-size: 37px;
      }
      .title, .description {
        text-align: center;
      }
     
    `}</style>
  </>
);
    }

export async function getStaticPaths({params}) {
  const res = await fetch(
    `http://localhost:1337/catalogs/?_limit=-1`
  );
  const catalogs = await res.json();
  const paths = catalogs.map(
    (catalog) => `/site/${catalog.handle}`
  );
  return { paths, fallback: false };
}

export default Catalog;