import React from "react";
import { slide as BurgerMenu } from "react-burger-menu";
import { Link } from "react-router-dom";
import user from "../../assets/images/user.png";

const Menu = () => {
  const isMobile = window.innerWidth < 768;
  return (
    <BurgerMenu
      burgerBarClassName="bg-white"
      menuClassName={isMobile ? "bg-info pt-4 pl-3 p-0" : "bg-info"}
    >
      {isMobile ? (
        <div className="row d-flex pb-4">
          <div className="col-6">
            <div className="row">
              <div className="col-4">
                <i className="fa fa-search text-white pointer" />
              </div>
              <div className="col-4">
                <i className="fa fa-bell text-white pointer" />
              </div>
              <div className="col-4">
                <i className="fa fa-cog text-white pointer" />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="row">
              <div className="col-4 p-0">
                <a href="#" className="text-white text-decoration-none">
                  <img src={user} className="w-100" alt="user image" />
                </a>
              </div>
              <div className="col-8 p-0">
                <span className="text-white f-14">User name</span>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <Link className="menu-item text-white text-decoration-none mb-2" to="/">
        Home
      </Link>
      <Link
        className="menu-item text-white text-decoration-none mb-2"
        to="/about"
      >
        About us
      </Link>
      <Link
        className="menu-item text-white text-decoration-none mb-2"
        to="/contact"
      >
        Who are us
      </Link>
      <Link
        className="menu-item text-white text-decoration-none mb-2"
        to="/contact"
      >
        Why us?
      </Link>
      <Link
        className="menu-item text-white text-decoration-none mb-2"
        to="/news"
      >
        News
      </Link>
      <Link
        className="menu-item text-white text-decoration-none mb-2"
        to="/contact"
      >
        Events
      </Link>
      <Link
        className="menu-item text-white text-decoration-none mb-2"
        to="/contact"
      >
        Careers
      </Link>
      <Link
        className="menu-item text-white text-decoration-none mb-2"
        to="/contact"
      >
        Opportunities
      </Link>
      <Link
        className="menu-item text-white text-decoration-none mb-2"
        to="/contact"
      >
        Contact Us
      </Link>
      <Link
        className="menu-item text-white text-decoration-none mb-2"
        to="/contact"
      >
        Site Map
      </Link>
    </BurgerMenu>
  );
};

export default Menu;
