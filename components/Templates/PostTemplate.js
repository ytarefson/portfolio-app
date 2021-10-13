import React from 'react';
import ReactMarkdown from 'react-markdown';

export default function PostTemplate(props) {
    return (
      <>
        <section key={`post-${props.post.handle}`} className="section-post">
        <div className="wrapper">
          <div className="text-container">
            <h1 className="section-title">{props.post.caption}</h1>
            <span className="sub-title">{props.post.subcaption ? props.post.subcaption : ''}</span>
            <p className="description big-text mb-0">{props.post.description ? props.post.description : ''}</p>
          </div>
        </div>
      </section>
      <section className="post-content-section">
        <div className="wrapper">
          <div className="text-container">
          <ReactMarkdown children={props.post.content} className="markdown"/>
          </div>
        </div>
      </section>
      <style jsx>{`
      .section-post {
        background-color: var(--grey-8);
      }
      .section-title {
        color: var(--grey-0);
      }
      .sub-title {
        color: var(--main);
      }
      .description {
        color: var(--grey-4);
      }
      @media (min-width: 768px) {}
      @media (min-width: 992px) {}
      @media (min-width: 1200px) {
        .section-post {
          padding-top: 90px;
        }
      }
      @media (min-width: 1600px) {
        .banners-grid {
          gap: 30px;
        }
      }
    `}</style>
    </>
    )
}
