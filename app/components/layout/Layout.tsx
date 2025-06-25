import React from 'react';
import { Outlet } from 'react-router-dom';
import ScrollToTop from '../ScrollToTop';
import Header from './Header';
import Footer from './Footer';
import SEOHead from '../SEOHead';

const Layout: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-gray-50">
        <SEOHead />
        <Header />
        <main className="grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout; 