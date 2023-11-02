'use client';

import React, { useState, useEffect } from 'react';
import "../styles/components/Navbar.css";
import { useRouter } from 'next/navigation';


type MenuItem = {
  name: string;
  route: string;
};

const navOptions: MenuItem[] = [
  {name: "Home", route: ""},
  {name: "About", route: "about"},
  {name: "Projects", route: "projects"},
  {name: "Resume", route: "resume"},
  {name: "Contact", route: "contact"}
]

const Navbar = () => {
  const [selectedNavItem, setSelectedNavItem] = useState("Home");

  useEffect (() => {
    function parseRoute(): string {
      const pathnameArr = window.location.pathname.split('/');
      return pathnameArr[1] ?? "";
    };
    const currentUrl = navOptions.find((item) => parseRoute() === item.route);
    setSelectedNavItem(currentUrl!.name);
  }, []);
  
  const router = useRouter();
  
  const handleNavItemClick = (item: MenuItem) => {
    router.push(`/${item.route}`);
    setSelectedNavItem(item.name);
  };

  


  const handleLogoClick = () => {
    setSelectedNavItem('Home');
  };
  return (
    <nav className="navbar">
      <div className="nav-wrapper">
      <div className="logo" onClick={handleLogoClick}>
        <img src="logo-no-portfolio.png" alt="Logo" />
        {/* <div className="vertical"></div> */}
        {/* <h1>Professional Portfolio</h1> */}
      </div>
      <ul className="nav-list">
        {navOptions.map((item, index)=> {
          return <li key={`nav-option-${index}`}
          className={`nav-item${selectedNavItem === item.name ? ' selected' : ''}`}
          onClick={() => handleNavItemClick(item)}
          >
            {item.name}
          </li>
        })}
      </ul>
      <div className="menu-icon">&#9776;</div>
        </div>
    </nav>
  );
};

export default Navbar;

