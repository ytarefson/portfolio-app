import React from 'react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

function Footer(props) { 

  const linkGrid = props.footer.link_list.map((list, i) => 
    (<div className="grid-cell" key={`list-${i}`}>
      <span className="card-title">
        {list.name}
      </span>
      {list.link.map((link,index) => (
        <Link href={link.url} 
              key={`footer-${i}-${index}`}>
          <a className="text">{link.name}</a>
        </Link>
      ))}
    </div>)
  )

  return (
    <>
      <footer className="footer">
        <div className="wrapper">
          <div className="footer-content section-divider">
            <ReactMarkdown escapeHtml={false} children={props.footer.content} className="markdown"/>
          </div>       
          <div className="link-grid section-divider">
            {linkGrid}
            <div className="grid-cell contacts">
              <ReactMarkdown escapeHtml={false} children={props.footer.contacts} className="markdown"/>
            </div>
          </div>
          <div className="copy-row">
            <div className="logo-container">
              <img src="/img/logos/rzd-logo.png" alt="Логотип РЖД" className="footer-logo" />                
            </div>
            <div className="text-container text mb-0">Все права зарегистрированы (с) 2000 -{`${new Date().getFullYear()}`} г.</div>
          </div>
        </div> 
      </footer>
      <style global jsx>{`
        .footer {
          border-top: 0px solid #353535;
          background-color: var(--c1);
          padding-top: 30px;
          padding-bottom: 30px;
        }
        .footer-content {
          padding-top: 30px;
          padding-bottom: 45px;
          margin-bottom: 45px;
        }
        .footer .link-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
          grid-gap: 15px;
          padding-bottom: 45px;
          margin-bottom: 30px;
        }
        .grid-cell {
          margin-bottom: 30px;
        }
        .footer .card-title {
          color: var(--grey-0);
        }
        .footer .markdown h2,
        .footer .markdown h3 {
          color: var(--grey-0);
        }
        .footer .text, .footer p {
          color: var(--grey-3);
        }
        .footer .copy-row {
          display: grid;
          grid-template-columns: 100px 1fr;
          align-items: center;
          gap: 30px;
        }
        .footer-logo {
          display: block;
          margin: 0 auto;
          width: 100px;
        }
        .footer .text-container {
          color: var(--grey-5);
        }
        @media (min-width: 768px) {
        }
        @media (min-width: 992px) {
        }
        @media (min-width: 1200px) {
          .footer-content .markdown {
            width: 75%;
          }
        }
      `}</style>
    </>
  );
}

export default Footer;
