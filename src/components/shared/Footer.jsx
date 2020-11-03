import React from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = (props) => {
  const isMobile = window.innerWidth < 768;
  return (
    <footer>
      <Container fluid className="bg-light p-sm">
        <div className={isMobile ? null : "ml-5 mb-4 pl-5"}>
          <Row className="pt-4">
            {isMobile ? (
              <div className={isMobile ? "col-12" : "col-lg-3"}>
                <Form.Group>
                  <label
                    htmlFor="subscribe"
                    className={isMobile ? "text-muted f-14" : "text-muted"}
                  >
                    Subscribe to Newsletter
                  </label>
                  <InputGroup>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email Address"
                    />
                    <InputGroup.Append>
                      <Button
                        variant="success"
                        className={
                          isMobile
                            ? "bg-light-green border-0 f-14"
                            : "bg-light-green border-0"
                        }
                      >
                        subscribe
                      </Button>
                    </InputGroup.Append>
                  </InputGroup>
                </Form.Group>
              </div>
            ) : null}
            <div className={isMobile ? "col-6" : "col-lg-3"}>
              <ul>
                <li className="list-unstyled">
                  <Link
                    to="/news"
                    className={
                      isMobile
                        ? "text-muted text-decoration-none f-14"
                        : "text-muted text-decoration-none h6"
                    }
                  >
                    News
                  </Link>
                </li>
                <li className="list-unstyled">
                  <Link
                    to="/"
                    className={
                      isMobile
                        ? "text-muted text-decoration-none f-14"
                        : "text-muted text-decoration-none h6"
                    }
                  >
                    Events
                  </Link>
                </li>
                <li className="list-unstyled">
                  <Link
                    to="/"
                    className={
                      isMobile
                        ? "text-muted text-decoration-none f-14"
                        : "text-muted text-decoration-none h6"
                    }
                  >
                    About
                  </Link>
                </li>
                <li className="list-unstyled">
                  <Link
                    to="/"
                    className={
                      isMobile
                        ? "text-muted text-decoration-none f-14"
                        : "text-muted text-decoration-none h6"
                    }
                  >
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
            <div className={isMobile ? "col-6" : "col-lg-3"}>
              <ul>
                <li className="list-unstyled">
                  <Link
                    to="/"
                    className={
                      isMobile
                        ? "text-muted text-decoration-none f-14"
                        : "text-muted text-decoration-none h6"
                    }
                  >
                    Privacy policy
                  </Link>
                </li>
                <li className="list-unstyled">
                  <Link
                    to="/"
                    className={
                      isMobile
                        ? "text-muted text-decoration-none f-14"
                        : "text-muted text-decoration-none h6"
                    }
                  >
                    Contact us
                  </Link>
                </li>
                <li className="list-unstyled">
                  <Link
                    to="/"
                    className={
                      isMobile
                        ? "text-muted text-decoration-none f-14"
                        : "text-muted text-decoration-none h6"
                    }
                  >
                    Complains
                  </Link>
                </li>
              </ul>
            </div>
            {isMobile ? null : (
              <div className={isMobile ? "col-12" : "col-lg-3"}>
                <Form.Group>
                  <label
                    htmlFor="subscribe"
                    className={isMobile ? "text-muted f-14" : "text-muted"}
                  >
                    Subscribe to Newsletter
                  </label>
                  <InputGroup>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email Address"
                    />
                    <InputGroup.Append>
                      <Button
                        variant="success"
                        className={
                          isMobile
                            ? "bg-light-green border-0 f-14"
                            : "bg-light-green border-0"
                        }
                      >
                        subscribe
                      </Button>
                    </InputGroup.Append>
                  </InputGroup>
                </Form.Group>
              </div>
            )}
            <div className={isMobile ? "col-6" : "col-lg-1"} />
            <div className={isMobile ? "col-6 mb-2" : "col-lg-2"}>
              <p className="text-muted">Follow us on</p>
              <Row>
                <div className={isMobile ? "col-1" : "col-lg-1"}>
                  <i className="fa fa-instagram text-muted pointer" />
                </div>
                <div className={isMobile ? "col-1" : "col-lg-1"}>
                  <i className="fa fa-youtube text-muted pointer" />
                </div>
                <div className={isMobile ? "col-1" : "col-lg-1"}>
                  <i className="fa fa-linkedin text-muted rounded pointer" />
                </div>
                <div className={isMobile ? "col-1" : "col-lg-1"}>
                  <i className="fa fa-facebook text-muted pointer" />
                </div>
                <div className={isMobile ? "col-1" : "col-lg-1"}>
                  <i className="fa fa-twitter text-muted pointer" />
                </div>
              </Row>
            </div>
          </Row>
        </div>
        <Row className="bg-info py-2">
          <Col>
            <p className="text-center m-0 text-white f-14">
              All rights reserved - Link Development Company{" "}
              <i className="fa fa-copyright" /> 2020
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
