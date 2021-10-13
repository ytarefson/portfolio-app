import React from 'react';
import ReactMarkdown from 'react-markdown';
import FileCard from './FileCard';

const FileList = (props) => {

  let files = props.filelist.documents.map((document,idx) => <FileCard document={document} key={`file-order-${idx}`}/>)

  return (
    <>
    <div className="file-list-section component-paddings">
      <div className="file-list">
        <span className="section-title">{props.filelist.name}</span>
        <ReactMarkdown escapeHtml={false} children={props.filelist.content} className="markdown"/>
        <div className="files">
          {files}
        </div>
      </div>
    </div>
    <style jsx>{`
        .files {
          display: grid;
          gap: 12px;
        }
        @media (min-width: 768px) {
          .files {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </>
  )
}

export default FileList;