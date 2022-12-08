import { Link } from "react-router-dom";
import "./Dropdown.css";


type submenu = {
  linkName: string;
  to: string;
};

export const Dropdown = ({
  submenus,
  className,
}: {
  submenus: submenu[];
  className: string;
}) => {
  return (
    <ul className={className}>
      {submenus.map((submenu) => {
        return (
          <li className="dropdown-item">
            <Link to={submenu.to}>{submenu.linkName}</Link>
          </li>
        );
      })}
    </ul>
  );
};
