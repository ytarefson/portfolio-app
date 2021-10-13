import React from 'react';
import fetch from 'node-fetch';
import { initializeApollo, addApolloState } from '../../../../lib/apolloClient';
import { gql, useQuery } from '@apollo/client';

import Head from '../../../../components/head';
import Layout from '../../../../components/Layout';
import CategoryTemplate from '../../../../components/Templates/CategoryTemplate';

import {CATEGORY_QUERY, FOOTER_QUERY,MENU_QUERY, PAGE_MENU_QUERY} from '../../../../queries';

export const QUERY = gql`
query ($handle: String, $category: String) {
  ${CATEGORY_QUERY}
  ${MENU_QUERY}
  ${FOOTER_QUERY}
  ${PAGE_MENU_QUERY}
}
`;

export async function getStaticProps({params}) {  
  let category = params.category;
  let handle = params.category;
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

function Category({handle, category}) {
  const { loading, error, data } = useQuery(QUERY, { variables: { handle: handle, category: category}});

  if (loading) return <div>Loading...</div>;
  if (error) return `${error.message}`;

  const { categories, menu, pagemenu, footer } = data

  return (
  <>
    <Head  
        title={categories[0].title}
        description={categories[0].description}
        url={`/site/${categories[0].catalog.handle}/${categories[0].handle}`}
        ogImage="/favicon.ico" />
    <Layout footer={footer} menu={menu}>
      <CategoryTemplate category={categories[0]} pagemenu={pagemenu}/>      
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
    `http://localhost:1337/categories/?_limit=-1`
  );
  const categories = await res.json();
  const paths = categories.map(
    (category) => `/site/${category.catalog.handle}/${category.handle}`
  );
  return { paths, fallback: false };
}

export default Category;