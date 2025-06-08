// src/app/home/layout.tsx
import React from 'react';
import "./view.css"; // lub "../globals.css" jeśli masz plik bezpośrednio w src/

import Headder from '../../aCOMPONENTS/HomeHeadder/Headder';
import LeftSidebar from '../../aCOMPONENTS/LeftSidebar/LeftSidebar';
import MiddleMainContent from '../../aCOMPONENTS/MidlleContent/MiddleMainContent';
import SearchBar from '../../aCOMPONENTS/SearchBar/SearchBar';
import UserMessage from '../../aCOMPONENTS/HomeUserMessage/HomeUserMessage';
import ProfileRecommendations from '../../aCOMPONENTS/ProfileRecommendations/ProfileRecommendations';
import PostRecomendations from '../../aCOMPONENTS/PostRecomendations/PostRecomendations';


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container">
      <div className="leftsidebar"><LeftSidebar /></div>
      <div className="middleheader"><Headder /></div>
      <div className="usermessage"><UserMessage /></div>
      <div className="main"><MiddleMainContent /></div>
      <div className="searchbar"><SearchBar /></div>
      <div className="profileRecommendations"><ProfileRecommendations /></div>
      <div className="postRecomendations"><PostRecomendations /></div>
      {children}
    </div>
  );
}
