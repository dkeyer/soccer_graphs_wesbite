import { Link } from "react-router-dom";

type submenu = {
  linkName: string;
  to: string;
};

export const Dropdown = ({
  submenus,
  // comment
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
