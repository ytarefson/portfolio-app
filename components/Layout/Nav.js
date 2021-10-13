import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ActiveLink from './ActiveLink';
import ModalMenu from './ModalMenu';
import SubMenu from './SubMenu';

function Nav(props) {
  const router = useRouter();  
  const home = router.asPath === "/" ? true : false;
  let subNav = props.menu.filter(catalog => router.asPath.includes(catalog.handle))[0] || props.menu.filter(catalog => catalog.homepage)[0];
  let m = [];
  subNav.categories.map(item => m.push(item));  
  let subMenu = m.sort(function (a, b) {
    if (a.sort > b.sort) {
      return 1;
    }
    if (a.sort < b.sort) {
      return -1;
    }

    return 0;
  });
  const menu = props.menu.map((catalog, index) => (
    <React.Fragment key={`menu-link-${index}`}>
      {catalog.url && catalog.url.includes('http') ? 
      <a href={catalog.url} className={`link-container catalog-link ${home && catalog.homepage ? "home": ""}`}
      title={catalog.shortname}>
        <span className="nav-link text mb-0" aria-label={catalog.shortname}>{catalog.shortname}</span>      
      </a>
      : 
    <ActiveLink              
      href={`/site/${catalog.handle}`}
      activeClassName="active">
      <a className={`link-container catalog-link ${home && catalog.homepage ? "home": ""}`}
         title={catalog.shortname}>
        <span className="nav-link text mb-0" aria-label={catalog.shortname}>{catalog.shortname}</span>      
      </a>
    </ActiveLink>
      }
    </React.Fragment>
  ));
  
  return (
    <header>
      <div className="top-container">
        <div className="left-container">
          <div className="logo-container">
            <Link href="/">
              <a className="logo-link" title="На главную">
                <img
                  data-sizes="auto"
                  className="logo-img"
                  src="/img/logos/rzd-logo.png"
                  alt="Логотип РЖД"
                  title="РЖД"
                />
              </a>
            </Link>        
          </div>
          <div className="main-menu">
            {menu}
          </div>
        </div>
        <div className="right-container">
          
          <input name="modal-menu-toggler" id="modal-menu-toggler" type="checkbox" defaultChecked={false}/>
          
          <div className="modal-menu">
            <nav className="nav">
              <ModalMenu menu={props.menu}/>
            </nav>
          </div>
        </div>
      </div>
      <SubMenu menu={subMenu} catalog={subNav.handle}/>
    <style global jsx>{`
      {/* Modal menu */}
      header {
        position: relative;
        background-color: white;
      }
      .top-container {
        height: 75px;
        display: block;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }
      .left-container {
        display: flex;
        flex-direction: row;
        align-items: center;
      }
      .logo-container {
        background-color: var(--main);
        margin-right: 30px;
      }
      .home .nav-link {
        color: var(--main)!important;
      }
      .logo-link {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .logo-img {
        height: 75px;
        object-fit: cover;
      }
      .main-menu {
        display: none;
      }
      .nav {
        display: grid;
        gap: 45px;
      }
      .nav .link-container {
        text-decoration: none;
      }
      .nav .categories {
        margin-left: 10px;
      }
      .nav .subcategories{
        margin-left: 20px;
      }
      .nav .pages{
        margin-left: 15px;
        margin-right: 15px;
        margin-bottom: 15px;
        border-radius: 0 0 3px 3px;
        background-color: rgba(255,255,255,0.03);
        border-bottom: 1px solid rgba(255,255,255,0.075);
        //border-right: 1px solid rgba(255,255,255,0.1);
      }
      .modal-menu {
        width: 100%;
        height: 100%;
        z-index: 0;
        display: none;
        opacity: 0;
        visibility: hidden;
        overflow-x: hidden;
        background: var(--c1);
        padding: 45px;
        padding-top: 60px;
      }
      .modal-menu .link-container {
        text-decoration: none;
      }
      .modal-menu .card-title {
        color: white;
      }
      .modal-menu .title {
        color: white;
      }
      .modal-menu .text {
        color: var(--grey-2);
      }
      .modal-menu .min-text {
        color: var(--grey-4);
      }
      #modal-menu-toggler {
       position: relative;
       transform: translateY(50%);
       visibility: hidden;
      }
      #modal-menu-toggler::after {
        content: "";
        position: absolute;
        top: 2px;
        left: -52px;
        transform: translateY(-50%);
        visibility: visible;
        cursor: pointer;
        display: block;
        background-color: transparent;
        background-image: url('/img/icons/menu-light.svg');
        background-size: 73%;
        background-position: 50% 50%;
        background-repeat: no-repeat;
        border-radius: var(--br-mid);
        border: 2px solid var(--grey-9);
        width: 41px;
        height: 40px;
        opacity: 0.5;
      }
      #modal-menu-toggler:checked::after {
        background-image: url('/img/icons/close-white.svg');
        background-size: 52%;
        border: 2px solid var(--grey-0);
        opacity: 0.75;
      }
      #modal-menu-toggler:checked + .modal-menu{        
        z-index: 100!important;
        display: block;
        opacity: 1;
        visibility: visible;
        position: fixed;
        left: 0;
        top:0;
        bottom:0;
        right: 0;
        
      }
      #modal-menu-toggler {
        z-index: 101;
      }

      @media (min-width: 992px) {
        nav {
          grid-template-columns: 1fr 1fr;
        }
      }
      @media (min-width: 1200px) {
        .main-menu {
          display: flex;
          flex-direction: row;
          align-items: center;
        }
        .main-menu .link-container {
          margin-right: 15px;
          text-decoration: none;
          color:
        }
        .main-menu .nav-link {
          color: var(--grey-9);
        }
        .main-menu .active span{
          color: var(--main);
          font-weight: 700;
        }
        #modal-menu-toggler {
        display: none;
        }
      }
      @media (min-width: 1600px) {
        .main-menu .link-container {
          margin-right: 30px;
        }
        nav {
          
        }
      }
      `}</style>
    </header>
  );
}

export default Nav;
