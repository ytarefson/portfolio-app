import React from 'react';
import ReactMarkdown from 'react-markdown';
import PostCard from './PostCard';

const NewsList = (props) => {

  let news = props.newslist.posts.map((post) => <PostCard post={post} key={`pord-${post.handle}`}/>)
  
  return (
    <>
      <div className="news-list-section component-paddings">
        <div className="news-list">
          <span className="section-title">{props.newslist.name}</span>
          <ReactMarkdown escapeHtml={false} children={props.newslist.content} className="markdown"/>
          <div className="news">
            {news}
          </div>
        </div>
      </div>
      <style jsx>{`
        .news {
          display: grid;
          gap: 12px;
        }
        @media (min-width: 778px) {
          .news {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
          }
        }
        @media (min-width: 1200px) {
          .news {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 12px;
          }
        }
        @media (min-width: 1600px) {
          .news {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 12px;
          }
        }
      `}</style>
    </>
  )
}
export default NewsList;
