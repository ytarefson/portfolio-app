import React from 'react';
import fetch from 'node-fetch';
import { initializeApollo, addApolloState } from '../../../../../lib/apolloClient';
import { gql, useQuery } from '@apollo/client';

import Head from '../../../../../components/head';
import Layout from '../../../../../components/Layout';
import SubcategoryTemplate from '../../../../../components/Templates/SubcategoryTemplate';

import {SUBCATEGORY_QUERY, FOOTER_QUERY,MENU_QUERY, PAGE_MENU_QUERY} from '../../../../../queries';

export const QUERY = gql`
query ($handle: String, $category: String) {
  ${SUBCATEGORY_QUERY}
  ${MENU_QUERY}
  ${PAGE_MENU_QUERY}
  ${FOOTER_QUERY}}`;

export async function getStaticProps({params}) {
  let category = params.category;
  let handle = params.subcategory;
  const apolloClient = initializeApollo();
  await apolloClient.query({
    query: QUERY,
    variables: {
      handle: handle,
      category: category,
    }
  });
  return addApolloState(apolloClient, {
    props: { handle, category },
    revalidate: 1,
  });
};


function Subcategory({handle, category}) {
  const { loading, error, data } = useQuery(QUERY, { variables: { handle: handle, category: category}});

  if (loading) return <div>Loading...</div>;
  if (error) return `${error.message}`;

  const { subcategories, menu, pagemenu, footer } = data

  return (
  <>
    <Head  
        title={subcategories[0].title}
        description={subcategories[0].description}
        url={`/site/${subcategories[0].catalog.handle}/${subcategories[0].category.handle}/${subcategories[0].handle}`}
        ogImage="/favicon.ico" />
    <Layout footer={footer} menu={menu}>
      <SubcategoryTemplate subcategory={subcategories[0]} pagemenu={pagemenu}/>      
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
    `http://localhost:1337/subcategories/?_limit=-1`
  );
  const subcategories = await res.json();
  const paths = subcategories.map(
    (subcategory) => `/site/${subcategory.catalog.handle}/${subcategory.category.handle}/${subcategory.handle}`
  );  
  return { paths, fallback: false };
}

export default Subcategory;