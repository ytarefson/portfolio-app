import React from 'react';
import ReactMarkdown from 'react-markdown';
import Attachment from './Attachment';

const Attachments = (props) => {

let files = props.attachments.files.map((file) => <Attachment file={file} key={`atat-${file.hash}`}/>)
  
  return (
    <>
      <div className="attachments-section component-paddings">
          <div className="attachments-list">
            <span className="section-title">{props.attachments.name}</span>
            <ReactMarkdown escapeHtml={false} children={props.attachments.content} className="markdown"/>
            <div className="attachments">
              {files}
            </div>
          </div>
      </div>
      <style jsx>{`
      .attachments {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px;
      }
      @media (min-width: 1200px) {
        .attachments {
          gap: 24px 75px;
        }
      }
    `}</style>
   </>
  )
}
export default Attachments;
