import React from 'react';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';

interface LayoutProps extends React.HtmlHTMLAttributes<HTMLDivElement> {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header></Header>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default Layout;
