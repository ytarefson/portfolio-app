import React from 'react';
import fetch from 'node-fetch';
import { initializeApollo, addApolloState } from '../../../lib/apolloClient';
import { gql, useQuery } from '@apollo/client';

import Head from '../../../components/head';
import Layout from '../../../components/Layout';
import PostTemplate from '../../../components/Templates/PostTemplate';

import {POST_QUERY, FOOTER_QUERY,MENU_QUERY} from '../../../queries';

export const QUERY = gql`
query ($handle: String) {
  ${POST_QUERY}
  ${MENU_QUERY}
  ${FOOTER_QUERY}
}
`;
function Post({handle}) {
  const { loading, error, data } = useQuery(QUERY, { variables: { handle: handle}});

  if (loading) return <div>Loading...</div>;
  if (error) return `${error.message}`;

  const { posts, menu, footer } = data

  return (
  <>
    <Head  
        title={posts[0].title}
        description={posts[0].description}
        url={`/news/${posts[0].handle}`}
        ogImage="/favicon.ico" />
    <Layout footer={footer} menu={menu}>
      <PostTemplate post={posts[0]}/>      
    </Layout>
    <style jsx>{`
      
    `}</style>
  </>
);
    }

export async function getStaticPaths() {
     
  const res = await fetch(
    `http://localhost:1337/posts/?_limit=-1`
  );
  const posts = await res.json();
  const paths = posts.map(
    (post) => `/news/${post.handle}`
  );
  return { paths, fallback: false };
}

export async function getStaticProps({params}) {
  let handle = params.post;
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

export default Post;