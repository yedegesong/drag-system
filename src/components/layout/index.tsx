import React from 'react';
import Header from 'components/header'
import Content from 'components/content'
import './index.scss';
const Layout = () => {
  return (
    <div className="sys-layout">
      <Header />
      <Content />
    </div>
  );
}
export default Layout

