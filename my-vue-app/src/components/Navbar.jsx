import logo from "../assets/images/logo.svg";
import { menu, socialIcons } from "./data";
const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} className="nav-logo" alt="backroads" />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>

          <ul className="nav-links" id="nav-links">
            {menu.map((item) => {
              const { text, link } = item;
              return (
                <li>
                  <a href={link} className="nav-link">
                    {text}
                  </a>
                </li>
              );
            })}
          </ul>

          <ul className="nav-icons">
            {socialIcons.map((item) => {
              const { id, url, icon } = item;
              return (
                <li key={id}>
                  <a href={url} className="nav-icon">
                    <i className={icon}></i>
                  </a>
                </li>
              );
            })}
            {/* <li>
              <a
                href="https://www.twitter.com"
                target="_blank"
                className="nav-icon"
              >
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com"
                target="_blank"
                className="nav-icon"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com"
                target="_blank"
                className="nav-icon"
              >
                <i className="fab fa-squarespace"></i>
              </a>
            </li> */}
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
