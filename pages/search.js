import React from 'react';

import { initializeApollo, addApolloState } from '../lib/apolloClient';
import { gql, useQuery } from '@apollo/client';

import Head from '../components/head';
import Layout from '../components/Layout';
import PromoSection from '../components/Common/PromoSection';
import SearchTemplate from '../components/Templates/SearchTemplate';

import {FOOTER_QUERY,MENU_QUERY} from '../queries';

export const QUERY = gql`
query  {  
  ${MENU_QUERY}
  ${FOOTER_QUERY}
}`;

export async function getStaticProps({params}) { 
  const apolloClient = initializeApollo();
  await apolloClient.query({
    query: QUERY
  });
  return addApolloState(apolloClient, {
    props: {},
    revalidate: 1,
  });
};

const Search = ({}) => {
  const { loading, error, data } = useQuery(QUERY);

  if (loading) return "";
  if (error) return `${error.message}`;

  const {menu, footer} = data

  return (
    <>
      <Head  
          title='Поиск документов'
          description='Страница поиска документов по дополнительным фильтрам'
          url="/"
          ogImage="/favicon.ico" />
      <Layout footer={footer} menu={menu}>
        <PromoSection 
          caption='Поиск по документам' 
          subcaption={""} 
          preview={""}
          handle={""}
          bg_image={""}/>
        <SearchTemplate />     
      </Layout>
      <style jsx>{`
      
      `}</style>
    </>
  );
}

export default Search;