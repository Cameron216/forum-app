import React from 'react';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import TopNav from '../Navigation/TopNav';

const Layout: React.FC<React.HtmlHTMLAttributes<HTMLDivElement>> = ({
  children,
}) => {
  return (
    <div>
      <Header></Header>
      <TopNav></TopNav>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default Layout;
