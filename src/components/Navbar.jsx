import { NavLink } from "react-router-dom";
import { SlMenu } from "react-icons/sl";
import "./css/Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleOpenMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <>
      <div className="container-fluid my-nav">
        <div className="row">
          <div className="col-12">
            <div className="large-screen">
              <ul className="mb-0 d-flex flex-wrap justify-content-start align-items-center gap-4 py-2 my-navbar">
                <li>
                  <NavLink className="my-navlink" to="/">
                    All News
                  </NavLink>
                </li>
                <li>
                  <NavLink className="my-navlink" to="/busniess">
                    Busniess
                  </NavLink>
                </li>
                <li>
                  <NavLink className="my-navlink" to="/science">
                    Science
                  </NavLink>
                </li>
                <li>
                  <NavLink className="my-navlink" to="/entertainment">
                    Entertainment
                  </NavLink>
                </li>
                <li>
                  <NavLink className="my-navlink" to="/health">
                    Health
                  </NavLink>
                </li>
                <li>
                  <NavLink className="my-navlink" to="/sports">
                    Sports
                  </NavLink>
                </li>
                <li>
                  <NavLink className="my-navlink" to="/technology">
                    Technology
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="small-screen-container">
              <div className="menu-icon-container p-0 m-0">
                <SlMenu onClick={handleOpenMenu} className="menu-icon" />
              </div>

              {mobileMenu && (
                <ul mobileMenu={mobileMenu} className="menu-container">
                  <li>
                    <NavLink
                      onClick={handleOpenMenu}
                      className="mobile-link"
                      to="/"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={handleOpenMenu}
                      className="mobile-link"
                      to="/busniess"
                    >
                      Busniess
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={handleOpenMenu}
                      className="mobile-link"
                      to="/entertainment"
                    >
                      Entertainment
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={handleOpenMenu}
                      className="mobile-link"
                      to="/health"
                    >
                      Health
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={handleOpenMenu}
                      className="mobile-link"
                      to="/science"
                    >
                      science
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={handleOpenMenu}
                      className="mobile-link"
                      to="/sports"
                    >
                      sports
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={handleOpenMenu}
                      className="mobile-link"
                      to="/technology"
                    >
                      technology
                    </NavLink>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
