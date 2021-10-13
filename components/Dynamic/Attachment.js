import React from 'react'

const Attachment = (props) => {
  return (
    <>
      <a className={`attachment-card ext-${props.file.ext.slice(1)}`} href={`http://localhost:1337${props.file.url}`}>
        <div className="icon-container"></div>
        <div className="content-container">
          <span className="file-name title mb-2">
              {props.file.name}{` `}
          </span>
          <span className="file-size mid-text mb-0">{props.file.size} kb</span>
        </div>
      </a>
      <style jsx>{`
        .attachment-card {
          position: relative;
          text-decoration: none;
          display: grid;
          grid-template-columns: 60px 1fr;
          gap: 12px;
        }
        .attachment-card::before {
          position: absolute;
          display: block;
          content: "";
          top: -15px;
          bottom: -15px;
          left: -10px;
          right: -10px;
          box-shadow: 5px 5px 30px rgba(0,0,0,0);
          transition: box-shadow 0.2s ease-out;
          border-radius: 7px;
        }
        .attachment-card:hover::before {
          box-shadow: 5px 5px 30px rgba(0,0,0,0.2);
        }
        .attachment-card:hover .file-size {
          color: var(--main);
        }
        .file-name {
          color: var(--grey-7);
        }
        .file-size {
          color: var(--grey-4);
        }
        .ext-pptx  .icon-container {
          background: url('/img/icons/pptx.svg') 50% 50% no-repeat;
          background-size: contain;
        }
        .ext-txt .icon-container {
          background: url('/img/icons/txt.svg') 50% 50% no-repeat;
          background-size: contain;
        }
        .ext-png .icon-container {
          background: url('/img/icons/png.svg') 50% 50% no-repeat;
          background-size: contain;
        }
        .ext-doc .icon-container {
          background: url('/img/icons/doc.svg') 50% 50% no-repeat;
          background-size: contain;
        }
        .ext-mp3 .icon-container {
          background: url('/img/icons/mp3.svg') 50% 50% no-repeat;
          background-size: contain;
        }
        .ext-jpg .icon-container {
          background: url('/img/icons/jpg.svg') 50% 50% no-repeat;
          background-size: contain;
        }
        .ext-xls .icon-container {
          background: url('/img/icons/xls.svg') 50% 50% no-repeat;
          background-size: contain;
        }
        .ext-pdf .icon-container {
          background: url('/img/icons/pdf.svg') 50% 50% no-repeat;
          background-size: contain;
        }
        .ext-mp4 .icon-container {
          background: url('/img/icons/mp4.svg') 50% 50% no-repeat;
          background-size: contain;
        }
        .ext-file .icon-container {
          background: url('/img/icons/file.svg') 50% 50% no-repeat;
          background-size: contain;
        }
        .icon-container {
          filter: drop-shadow(3px 3px 3px rgba(0,0,0,0.3));
        }
      @media (min-width: 768px) {}
      @media (min-width: 992px) {}
      @media (min-width: 1200px) {}
      @media (min-width: 1600px) {}
    `}</style>
    </>
  )
}
export default Attachment;
