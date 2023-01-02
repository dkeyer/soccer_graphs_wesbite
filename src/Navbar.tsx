import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { Dropdown } from "./Dropdown";
import Hamburger from "./pages/Hamburger";
import "./Navbar.css";
import { useState } from 'react';


const submenuItems = [
  {
    linkName: "EPL",
    to: "/epl",
  },
  {
    linkName: "Laliga",
    to: "/laliga",
  },
  {
    linkName: "Bundesliga",
    to: "/bundesliga",
  },
];

export default function Navbar() {  

  const [hamburgerOpen, setHamburgerOpen] = useState(false);
//
  const toggleHamburger = () =>{
      setHamburgerOpen(!hamburgerOpen)
  }
    
  return (
    <>
    <nav className="nav">
      <Link to="/" className="site-title">
        Sports Graphs
      </Link>
      <ul className="navbar-links">
        <div className="football">
          <li className="football-link">Football</li>
          <Dropdown className="football-dropdown" submenus={submenuItems} />
        </div>
        <CustomLink to="/nba">NBA</CustomLink>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/contact">Contact</CustomLink>
      </ul>
      {/* <ul className="layover-navbar-links">
        <div className="football">
          <li className="football-link">Football</li>
          <Dropdown className="football-dropdown" submenus={submenuItems} />
        </div>
        <CustomLink to="/nba">NBA</CustomLink>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/contact">Contact</CustomLink>
      </ul> */}
      <div className="hamburger" onClick={toggleHamburger}>
      <Hamburger isOpen={hamburgerOpen}/>
      </div>
    </nav>
    <style>
      
    {`
    @media screen and (max-width: 768px){

     .navbar-links{
      display: ${hamburgerOpen ? 'inline' : 'none'};
  }
}
    `}
    </style>   
    </>         
  );

}

function CustomLink({
  to,
  children,
  ...props
}: {
  to: string;
  children: string;
}) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
