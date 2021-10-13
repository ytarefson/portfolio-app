import React from 'react';
import ReactMarkdown from 'react-markdown';

const ContentBlock = (props) => {
  return (
    <section className="content-section">
      <div className="wrapper">
        <ReactMarkdown escapeHtml={false} children={props.content} className="markdown"/>
      </div>
    </section>
  )
}
export default ContentBlock;