import type { Metadata } from "next";
import "./globals.css";
import React from 'react';

import Headder from './components/Headder/Headder';
import LeftSidebar from './components/LeftSidebar/LeftSidebar';
import MiddleMainContent from './components/MidlleContent/MiddleMainContent';
import RightSidebar from './components/RightSidebar/RightSidebar';
import SearchBar from './components/RightSearchBar/RightSearchBar';
import UserMessage from './components/UserMessage/UserMessage';


const Layout: React.FC = () => {
  return (
    <html>
      <body>
        <div className="container">
          <div className="leftsidebar"><LeftSidebar /></div>
          <div className="middleheader"><Headder /></div>
          <div className="usermessage"><UserMessage /></div>
          <div className="main"><MiddleMainContent /></div>
          <div className="searchbar"><SearchBar /></div>
          <div className="rightsidebar"><RightSidebar /></div>
        </div>
      </body>

   </html>
  );
};

export default Layout;
