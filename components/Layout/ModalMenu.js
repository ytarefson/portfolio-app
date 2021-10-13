import React from 'react';
import ActiveLink from './ActiveLink';

export default function ModalMenu(props) {

  const menu = props.menu.map((catalog, index) => (
    <div className="nav-catalog-wrapper" key={`menu-link-${index}`}>
      <ActiveLink              
      href={`/site/${catalog.handle}`}
      activeClassName="active">
      <a className="link-container catalog-link"
         title={catalog.shortname}>
        <span className="card-title" aria-label={catalog.shortname}>{catalog.shortname}</span>      
      </a>
      </ActiveLink>
      {catalog.categories ? <div className="categories">{getCategories(catalog)}</div> :''}
    </div>
    ));
  
  function getCategories(catalog) {
    let sortedCats = [];
    catalog.categories.map(category => sortedCats.push(category));
    const menu = sortedCats.sort(function (a, b) {
      if (a.sort > b.sort) {
        return 1;
      }
      if (a.sort < b.sort) {
        return -1;
      }
  
      return 0;
    });
    let categories = menu.map((category) => (
      <React.Fragment key={`menu-link-${category.handle}`}>
        <ActiveLink              
          href={`/site/${catalog.handle}/${category.handle}`}
          activeClassName="active">
          <a className="link-container category-link"
            title={category.shortname}>
            <span className="title" aria-label={category.shortname}>{category.shortname}</span>          
          </a>
        </ActiveLink>
        {category.subcategories ? <div className='subcategories'>{getSubcategories(category, `/site/${catalog.handle}/${category.handle}`)}</div> : ''}
      </React.Fragment>
    ))
    return categories;
  }
    
  function getSubcategories(category, href) {
    let sortedSubcats = [];
    category.subcategories.map(subcategory => sortedSubcats.push(subcategory));
    const menu = sortedSubcats.sort(function (a, b) {
      if (a.sort > b.sort) {
        return 1;
      }
      if (a.sort < b.sort) {
        return -1;
      }
  
      return 0;
    });
    let subcategories = menu.map((subcategory) => (
      <React.Fragment key={`menu-link-${subcategory.handle}`}>
        <ActiveLink              
          href={`${href}/${subcategory.handle}`}
          activeClassName="active">
          <a
            className="link-container subcategory-link"
            title={subcategory.shortname}>
            <span className="text" aria-label={subcategory.shortname}>{subcategory.shortname}</span>          
          </a>
      </ActiveLink>
      {subcategory.pages.length > 0 ? <details className='pages'><summary className="summary"><div className="arrow-div"></div></summary>{getPages(subcategory, `${href}/${subcategory.handle}`)}</details> : ''}
    </React.Fragment>
    ))
    return subcategories;
  }
    
  function getPages(subcategory, href) {
    let sortedPages = [];
    subcategory.pages.map(page => sortedPages.push(page));
    const menu = sortedPages.sort(function (a, b) {
      if (a.sort > b.sort) {
        return 1;
      }
      if (a.sort < b.sort) {
        return -1;
      }
  
      return 0;
    });

    let pages = menu.map((page) => (

      <ActiveLink              
        href={`${href}/${page.handle}`}
        key={`menu-link-${page.handle}`}
        activeClassName="active">
        <a className="link-container page-link"
            title={page.shortname}>
          <span className="min-text mb-0" aria-label={page.shortname}>{page.shortname}</span>          
        </a>
      </ActiveLink>

    ))
    return pages;
  }
    


    return (
      <>
        {menu}
        <style global jsx>{`
          /* Убираем стандартный маркер Chrome */
          details summary::-webkit-details-marker {
            display: none
          }
          /* Убираем стандартный маркер Firefox */
          details > summary {
            list-style: none;
          }
          {/* .arrow-div {
            cursor: pointer;
            display: block;
            width: 23px;
            height: 23px;
            border-radius: 23px;
            border: 1px solid rgba(255,255,255,1);
            background-image: url('/img/icons/d-4.svg');
            background-position: 53% 60%;
            background-size: 60%;
            background-repeat: no-repeat;
            opacity: 0.3;
          }
          .arrow-div:hover {
            transform: scale(1.1);
            background-position: 52% 60%;
          } */}
          .modal-menu .arrow-div {
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
          .arrow-div:hover {

          }
          .modal-menu details[open] .arrow-div {
            transform: rotateX(0deg);
            background-color: transparent;
            border: none;
            background-image: url('/img/icons/treug-r.svg');
            opacity: 1;
          }
          .pages {
            position: relative;
          }
          details[open] .arrow-div {
            transform: rotateX(180deg);
            background-position: 53% 57%;
            background-color: rgba(255,255,255,0.3);
          }
          .summary {
            top: -32px;
            right: -10px;
            position: absolute;
            list-style-type: none;
            text-align: right;
          }
          .subcategory-link {

          }
          .subcategory-link:hover .text {
            color: white;
          }
          .nav .min-text {
            padding-left: 15px;
            padding-top: 7px;
            padding-bottom: 7px;
          }
          .nav .min-text:hover {
            background-color: rgba(2255,255,255,0.05);
            color: white;
          }
        `}</style>
      </>
    )
}
