// src/app/home/layout.tsx
import React from 'react';
import "./view.css"; // lub "../globals.css" jeśli masz plik bezpośrednio w src/

import Headder from '../Acomponents/Headder/Headder';
import LeftSidebar from '../Acomponents/LeftSidebar/LeftSidebar';
import MiddleMainContent from '../Acomponents/MidlleContent/MiddleMainContent';
import RightSidebar from '../Acomponents/RightSidebar/RightSidebar';
import SearchBar from '../Acomponents/RightSearchBar/RightSearchBar';
import UserMessage from '../Acomponents/UserMessage/UserMessage';

export default function Layout({ children }: { children: React.ReactNode }) {
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
