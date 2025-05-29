// src/app/home/layout.tsx
import React from 'react';
import "./view.css"; // lub "../globals.css" jeśli masz plik bezpośrednio w src/
import LeftSidebar from '../../aCOMPONENTS/LeftSidebar/LeftSidebar';


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container">
        <h1>asd</h1>
        <LeftSidebar/>
    </div>
  );
}
