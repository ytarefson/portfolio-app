import React from 'react';
import { useRouter } from 'next/router';
import ActiveLink from '../Layout/ActiveLink';

export default function PageMenu(props) {
  const router = useRouter();
  let sortedSubcats = [];
  props.pagemenu[0].subcategories.map(subcategory => sortedSubcats.push(subcategory));
  const subcats = sortedSubcats.sort(function (a, b) {
    if (a.sort > b.sort) {
      return 1;
    }
    if (a.sort < b.sort) {
      return -1;
    }

    return 0;
  });

  function getSubMenu(array) {
    let sortedPages = [];
    array.map(item => sortedPages.push(item));
    const sortedArray = sortedPages.sort(function (a, b) {
      if (a.sort > b.sort) {
        return 1;
      }
      if (a.sort < b.sort) {
        return -1;
      }
      return 0;
    });
    
    return sortedArray;  
  }
  
  const menu = subcats.map((subcategory,index) => (
    <div className="menu-subcategory" key={`mesu-${index}`}>
      {subcategory.pages && subcategory.pages.length > 0 ? 

        (<details open={router.asPath.indexOf(`${props.pagemenu[0].catalog.handle}/${props.pagemenu[0].handle}/${subcategory.handle}`) < 0 ? false:true}>
          
          <summary>
          <ActiveLink activeClassName="active" style={{position: 'relative'}} href={`/site/${props.pagemenu[0].catalog.handle}/${props.pagemenu[0].handle}/${subcategory.handle}/`}>
            <a className="menu-link mid-text mb-0 with-pages">{subcategory.shortname}</a>
          </ActiveLink>
          <div className="arrow-div"></div>
          </summary>
          {subcategory.pages.length > 0 ? getSubMenu(subcategory.pages).map((page, idx) => 
            <div className="menu-page" key={`mepa-${idx}`}>
              <ActiveLink activeClassName="active" href={`/site/${props.pagemenu[0].catalog.handle}/${props.pagemenu[0].handle}/${subcategory.handle}/${page.handle}`}>
                <a className="menu-link text mb-0">{page.shortname}</a>
              </ActiveLink>
            </div>
          ) : ''}
      </details>)
        : <ActiveLink activeClassName="active" href={`/site/${props.pagemenu[0].catalog.handle}/${props.pagemenu[0].handle}/${subcategory.handle}/`}>
            <a className="menu-link mid-text mb-0">{subcategory.shortname}</a>
          </ActiveLink>}
      <style jsx>{`
      {/* .sub-title {
        font-weight: 700;
        opacity: 0.5;
      } */}
      .active {
        color: var(--main)!important;
      }
      .menu-subcategory {

      }
      .menu-page {
        margin-left: 30px;
      }
      details {
        outline: none;
      }
      summary {
        position: relative;
        outline: none;
      }
      .menu-link {
        text-decoration: none;
        padding: 5px 0;
        color: var(--grey-8);
        outline: none;
      }
      .menu-link:hover {
        color: var(--main);
        text-decoration: underline;
      }
      .text {
        color: var(--grey-6);
      }
      .arrow-div {
        position: absolute;
        top: 5px;
        right: 0;
        content: "";
        display: block;
        width: 21px;
        height: 21px;
        border: none;
        //border-radius: 100px;
        background-image: url('/img/icons/treug-d.svg');
        background-position: 53% 57%;
        background-size: 60%;
        background-repeat: no-repeat;
        opacity: 0.25;
      }
      details[open] .arrow-div {
        transform: rotateX(0deg);
        background-position: 53% 57%;
        background-color: none;
        border: none;
        background-image: url('/img/icons/treug-r.svg');
        opacity: 1;
      }
      @media (min-width: 992px) {
        .arrow-div {
          right: -23px;
        } 
      }
      @media (min-width: 1200px) {
        .arrow-div {
          right: -20px;
        } 
      }
      @media (min-width: 1600px) {
        .arrow-div {
          right: -23px;
          top: 6px;
        } 
      }
      @media (min-width: 1900px) {
        .arrow-div {
          right: -13px;
        } 
      }
        `}</style>
      </div>
  ))
  return (
    <>
    <div className="pm-wrapper mb-5">
      <span className="custom-text">Навигация по разделу</span>
      {menu}
    </div>
      <style jsx>{`
      .custom-text {
        text-transform: uppercase;
        font-weight: 900;
        color: var(--grey-4);
        display: block;
        margin-bottom: 15px;
      }
        `}</style>
    </>
  )
}
