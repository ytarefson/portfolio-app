// компонент отвечает только за разметку
// | Контент | Баннеры |
import React from 'react';
import Banners from './Banners';
import PageMenu from './PageMenu';
import DocumentSearch from '../Dynamic/DocumentSearch';


const PageWrapper = (props) => {
  let bannersFlag = props.banners && props.banners.length > 0 ? true : false;
  const banners = props.banners?.banners?.length > 0 ? <Banners banners={props.banners.banners}/> : '';
  const menu = props.pagemenu ? <PageMenu pagemenu={props.pagemenu}/> : '';
  // Проверяем нужно ли включать строку поиска
  let smartSearch = props.search;
  if (smartSearch === undefined) {
    smartSearch = true; 
  };  
  return (
    <>
    <section className={`page-wrapper ${bannersFlag ? "wo-banners" : "with-banners"}`}>
      <div className="wrapper">
        <div className="page-wrapper-grid">
          <nav className="page-menu">
            {menu}
            {smartSearch !== false ? <DocumentSearch /> : ''}
          </nav>
          <main className="page-content">{props.children}</main>
          <div className="page-banners">{banners}</div>
        </div>
      </div>
    </section>
    <style jsx>{`
      .page-wrapper-grid {
        display: grid;
        grid-template: auto auto auto / 1fr;
        gap: 30px;
      }
      .page-menu {
        //display: grid;
        //gap: 20px;
      }
      .page-banners {
        //background-color: var(--grey-2);
      }
      @media (min-width: 768px) {}
      @media (min-width: 992px) {
        .page-wrapper-grid {
          display: grid;
          grid-template: 1fr 300px / 1fr 4fr;
          gap: 45px;
        }
        .page-banners {
          grid-column: 1 / 3;
        }
      }
      @media (min-width: 1200px) {
        .page-wrapper-grid {
          gap: 45px;
        }
      }
      @media (min-width: 1600px) {
        .page-wrapper-grid {
          display: grid;
          grid-template: 1fr / 1fr 4fr 1fr;
          gap: 60px;
        }
        .page-banners {
          grid-column: 3 / 4;
          height: 100%;
        }
      }
      @media (min-width: 1900px) {
        .page-wrapper-grid {
          gap: 90px;
        }
      }
    `}</style>
    </>
  )
}

export default PageWrapper;