import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { Dropdown } from "./Dropdown";
import "./Navbar.css";

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
  return (
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
    </nav>
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
