// src/app/home/layout.tsx
import React from 'react';
import "./view.css"; // lub "../globals.css" jeśli masz plik bezpośrednio w src/
import LeftSidebar from '../../aCOMPONENTS/LeftSidebar/LeftSidebar';
import HeadderExplore from '../../aCOMPONENTS/HeadderExplore/HeadderExplore';
import SearchBar from '../../aCOMPONENTS/SearchBar/SearchBar';


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container">
        <LeftSidebar/>
        <SearchBar/>
        <HeadderExplore/>
        
    </div>
  );
}
