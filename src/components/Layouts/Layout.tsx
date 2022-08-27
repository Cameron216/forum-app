import React from 'react';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import TopNav from '../Navigation/TopNav';

interface LayoutProps extends React.HtmlHTMLAttributes<HTMLDivElement> {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
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
