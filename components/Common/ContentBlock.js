import React from 'react';
import ReactMarkdown from 'react-markdown';

const ContentBlock = (props) => {
  return (
    <ReactMarkdown escapeHtml={false} children={props.content} className="markdown"/>
  )
}
export default ContentBlock;