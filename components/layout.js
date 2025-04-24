import React from 'react';
// import Header from './common/Header';
import Navbar from './navbar.js';
import Footer from './footer.js';
import styles from './layout.module.css';

const { layoutWrapper } = styles;

const Layout = ({ children }) => {
  return (
    <div className={layoutWrapper}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
