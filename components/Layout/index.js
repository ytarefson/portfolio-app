import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import BackToTop from './BackToTop';

function Layout(props) {  
  let m = [];
  props.menu.map(item => m.push(item));
  const menu = m.sort(function (a, b) {
    if (a.sort > b.sort) {
      return 1;
    }
    if (a.sort < b.sort) {
      return -1;
    }

    return 0;
  });
  return (
    <div id="layout">      
      <Nav key='nav' menu={menu}/>
      {props.children}
      <Footer key="footer" footer={props.footer}/>
      <BackToTop key="backToTop"/>
      
      <style jsx>{`
        #layout {
          overflow: hidden;
        } 
      `}</style>
    </div>
  );
}

export default Layout;
