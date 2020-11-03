import React from "react";
import { Container, Image, Navbar, Row } from "react-bootstrap";
import Menu from "./Menu";
import logo from "../../assets/images/logo.png";
import user from "../../assets/images/user.png";
import { Link } from "react-router-dom";

const Header = () => {
  const isMobile = window.innerWidth < 768;
  return (
    <Container
      fluid
      className={isMobile ? "bg-info p-0 fixed-top" : "bg-info py-0 fixed-top"}
    >
      <Row className={isMobile ? "pb-1" : null}>
        <div className={isMobile ? "col-12" : "col-lg-5"}>
          <Row>
            {isMobile ? null : <div className="col-lg-2" />}
            <div className={isMobile ? "col-7 p-0" : "col-lg-2 mt-2"}>
              <Menu />
            </div>
            <div className={isMobile ? "col-5" : "col-lg-8"}>
              <Navbar className={isMobile ? "px-0" : "py-0"}>
                <Navbar.Brand>
                  <Link to="/">
                    <Image src={logo} alt="logo" className="w-75" />
                  </Link>
                </Navbar.Brand>
              </Navbar>
            </div>
          </Row>
        </div>
        {isMobile ? null : <div className="col-lg-3" />}
        {isMobile ? null : (
          <div
            className={
              isMobile
                ? "col-5 text-white text-center mt-3 p-0"
                : "col-lg-4 text-white text-center mt-3"
            }
          >
            <Row className="float-left">
              <div className={isMobile ? "col-2 h3" : "col-lg-2 h3"}>
                <i className="fa fa-search pointer" />
              </div>
              <div className={isMobile ? "col-2 h3" : "col-lg-2 h3"}>
                <i className="fa fa-bell pointer" />
                <span className="notification">.</span>
              </div>
              <div
                className={
                  isMobile ? "col-3 user-avatar" : "col-lg-5 user-avatar"
                }
              >
                <Link to="/" className="text-white text-decoration-none">
                  <Image src={user} alt="user image" />
                  <span>User name</span>
                </Link>
              </div>
              <div className={isMobile ? "col-2 h3" : "col-lg-2 h3"}>
                <i className="fa fa-cog pointer" />
              </div>
            </Row>
          </div>
        )}
      </Row>
    </Container>
  );
};

export default Header;
