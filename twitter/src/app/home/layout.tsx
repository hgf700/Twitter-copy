// src/app/home/layout.tsx
import React from 'react';
import "./view.css"; // lub "../globals.css" jeśli masz plik bezpośrednio w src/

import Headder from '../components/Headder/Headder';
import LeftSidebar from '../components/LeftSidebar/LeftSidebar';
import MiddleMainContent from '../components/MidlleContent/MiddleMainContent';
import RightSidebar from '../components/RightSidebar/RightSidebar';
import SearchBar from '../components/RightSearchBar/RightSearchBar';
import UserMessage from '../components/UserMessage/UserMessage';

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container">
      <div className="leftsidebar"><LeftSidebar /></div>
      <div className="middleheader"><Headder /></div>
      <div className="usermessage"><UserMessage /></div>
      <div className="main"><MiddleMainContent /></div>
      <div className="searchbar"><SearchBar /></div>
      <div className="rightsidebar"><RightSidebar /></div>
      {children}
    </div>
  );
}
