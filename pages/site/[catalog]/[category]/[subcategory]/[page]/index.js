import React from 'react';
import fetch from 'node-fetch';
import { initializeApollo, addApolloState } from '../../../../../../lib/apolloClient';
import { gql, useQuery } from '@apollo/client';

import Head from '../../../../../../components/head';
import Layout from '../../../../../../components/Layout';
import PageTemplate from '../../../../../../components/Templates/PageTemplate';

import {PAGE_QUERY, FOOTER_QUERY,MENU_QUERY, PAGE_MENU_QUERY} from '../../../../../../queries';

export const QUERY = gql`
query ($handle: String, $category: String) {
  ${PAGE_QUERY}
  ${MENU_QUERY}
  ${PAGE_MENU_QUERY}
  ${FOOTER_QUERY}}`;

export async function getStaticProps({params}) {
  let category = params.category;
  let handle = params.page;
  const apolloClient = initializeApollo();
  await apolloClient.query({
    query: QUERY,
    variables: {
      handle: handle,
      category: category
    }
  });
  return addApolloState(apolloClient, {
    props: { handle, category },
    revalidate: 1,
  });
};

function Page({handle, category}) {
  const { loading, error, data } = useQuery(QUERY, { variables: { handle: handle, category: category}});

  if (loading) return <div>Loading...</div>;
  if (error) return `${error.message}`;

  const { pages, menu, pagemenu, footer } = data

  return (
  <>
    <Head  
        title={pages[0].title}
        description={pages[0].description}
        url={`/site/${pages[0].catalog.handle}/${pages[0].category.handle}/${pages[0].subcategory.handle}/${pages[0].handle}`}
        ogImage="/favicon.ico" />
    <Layout footer={footer} menu={menu}>
      <PageTemplate page={pages[0]} pagemenu={pagemenu}/>      
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
    `http://localhost:1337/pages/?_limit=-1`
  );
  const pages = await res.json();
  const paths = pages.map(
    (page) => `/site/${page.catalog.handle}/${page.category.handle}/${page.subcategory.handle}/${page.handle}`
  );
  return { paths, fallback: false };
}

export default Page;