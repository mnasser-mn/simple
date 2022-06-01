import { NavLink as Link } from "react-router-dom";
import './style.scss'
type HeaderProps = {
  headerTitle: string;
  links: { to: string; name: string }[];
};

export const Header = ({ headerTitle, links }: HeaderProps) => (
  <div className="header">
    <span>{headerTitle}</span>
    <nav>
      {links.map((link) => (
        <Link
          to={link.to}
          
          className={({isActive}) => `nav-link ${isActive?"active":""}`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  </div>
);
