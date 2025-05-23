import type { Metadata } from "next";
import "./globals.css";
import React from 'react';

import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Recommendations from './components/Recommendations';


const Layout: React.FC = () => {
  return (
    <html>
      <body>
        <div >
          <Sidebar />
          <MainContent />
          <Recommendations />
        </div>
      </body>
   </html>
  );
};

export default Layout;
