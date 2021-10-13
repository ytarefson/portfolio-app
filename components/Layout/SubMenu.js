import React from 'react';
import ActiveLink from './ActiveLink';

export default function SubMenu(props) {
  const menu =  props.menu.map((cat, index) => (
    <React.Fragment key={`submenu-link-${index}`}>
      <ActiveLink              
        href={`/site/${props.catalog}/${cat.handle}`}
        activeClassName="active">
        <a className="catalog-link"
           title={cat.shortname}>
          <span className="nav-link text mb-0" aria-label={cat.shortname}>{cat.shortname}</span>      
        </a>
      </ActiveLink>
    </React.Fragment>
  ))
  return (
    <div className="sub-menu">
      {menu}
      <style global jsx>{`
          .sub-menu {
            display: none;
          }
          @media (min-width: 768px) {
          }
          @media (min-width: 992px) {
          }
          @media (min-width: 1200px) {
            .sub-menu {
              width: 100%;
              padding-left: 150px;
              position: absolute;
              z-index: 1;
              height: 45px;
              display: flex;
              align-items: center;
              border-bottom: 1px solid rgba(255,255,255,0.1);
            }
            .sub-menu .catalog-link {
              margin-right: 20px;
              display: block;
              text-decoration: none!important;
            }
            .sub-menu .nav-link {
              color: white;
            }
            .sub-menu .active {
              position: relative;
            }
            .sub-menu .active::after {
              display: block;
              content: "";
              position: absolute;
              bottom: -13px;
              width: 100%;
              height: 2px;
              background-color: white;
            }
          }
          @media (min-width: 1600px) {
            .sub-menu .catalog-link {
              margin-right: 30px;
            }
          }
        `}</style>
    </div>
  )
}
