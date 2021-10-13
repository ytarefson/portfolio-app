import React from 'react';

import { initializeApollo, addApolloState } from '../../lib/apolloClient';
import { gql, useQuery } from '@apollo/client';

import Head from '../../components/head';
import Layout from '../../components/Layout';
import PostCard from '../../components/Common/PostCard';

import {POSTS_QUERY, FOOTER_QUERY,MENU_QUERY} from '../../queries';

export const QUERY = gql`
query {
  ${POSTS_QUERY}
  ${MENU_QUERY}
  ${FOOTER_QUERY}
}
`;
function News({}) {
  const { loading, error, data } = useQuery(QUERY);

  if (loading) return <div>Loading...</div>;
  if (error) return `${error.message}`;

  const { posts, menu, footer } = data

  let news = posts.map(post => (
    <PostCard key={`post-card-${post.handle}`} post={post}/>
  ))

  return (
  <>
    <Head  
        title='Все новости'
        description='Все новости портала'
        url="/news"
        ogImage="/favicon.ico" />
    <Layout footer={footer} menu={menu}>
      <section className="section-news" key='news-section'>
        <div className="wrapper">    
          <div className="hero">
            <h1 className="title">Все новости</h1>
            {/* <p className="description">{posts.subcaption ? posts.subcaption : ''}</p>           */}
          </div>
          <div className='all-news'>{news}</div>
        </div>
      </section>
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

export default News;