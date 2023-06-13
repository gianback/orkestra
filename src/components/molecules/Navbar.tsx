import {
  IconCart,
  IconLogo,
  IconNotifications,
  IconUser,
  Logo,
} from "../atoms";

export function Navbar() {
  return (
    <nav className="Navbar">
      <ul className="Navbar-list">
        <li className="Navbar-icon logo">
          <IconLogo />
        </li>
        <li className="Navbar-icon">
          <Logo />
        </li>
        <li className="Navbar-icon">
          <IconUser />
        </li>
        <li className="Navbar-icon">
          <IconCart />
        </li>
        <li className="Navbar-icon">
          <IconNotifications />
        </li>
      </ul>
    </nav>
  );
}
