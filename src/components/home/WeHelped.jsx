import React, { useState } from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";

const WeHelped = (props) => {
  const isMobile = window.innerWidth < 768;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="helped-bg text-white">
      <div className={isMobile ? "text-center" : "text-center py-5"}>
        <h2 className={isMobile ? "f-18" : "pt-5"}>How we have helped</h2>
        <h5 className={isMobile ? "f-14" : "pt-3"}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore amet
          necessitatibus minima?
        </h5>
      </div>
      <Container fluid>
        {isMobile ? (
          <>
            <Modal
              show={show}
              onHide={handleClose}
              centered
              contentClassName="bg-dark text-white"
              className
            >
              <Modal.Header closeButton className="py-1">
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body className="py-4">
                <Row>
                  <div className="col-3" />
                  <Col>
                    <div className="square">
                      <div className="square-inner">
                        <Row>
                          <div className="col-3 mr-1" />
                          <div className="col-3">
                            <i className="fa fa-map-marker" />
                          </div>
                        </Row>
                        <Row>
                          <div className="col-1 pr-2 mr-1" />
                          <div className="col-9 p-0">
                            <h5 className="f-18">Find place</h5>
                          </div>
                        </Row>
                        <Row>
                          <div className="col-4 mr-1" />
                          <div className="col-3">
                            <i className="fa fa-plus" />
                          </div>
                        </Row>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Modal.Body>
              <Modal.Footer className="py-1">
                <Button variant="outline-info" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
            <Row className="pt-3">
              <div className="col-3 px-1">
                <Button
                  variant="outline-light"
                  className="f-12 px-2"
                  onClick={handleShow}
                >
                  Find place
                </Button>
              </div>
              <div className="col-3 px-1">
                <Button
                  variant="outline-light"
                  className="f-12 px-2"
                  onClick={handleShow}
                >
                  Find place
                </Button>
              </div>
              <div className="col-3 px-1">
                <Button
                  variant="outline-light"
                  className="f-12 px-2"
                  onClick={handleShow}
                >
                  Find place
                </Button>
              </div>
              <div className="col-3 px-1">
                <Button
                  variant="outline-light"
                  className="f-12 px-2"
                  onClick={handleShow}
                >
                  Find place
                </Button>
              </div>
            </Row>
            <Row className="py-3">
              <div className="col-2" />
              <div className="col-3 px-1">
                <Button
                  variant="outline-light"
                  className="f-12 px-2"
                  onClick={handleShow}
                >
                  Find place
                </Button>
              </div>
              <div className="col-3 px-1">
                <Button
                  variant="outline-light"
                  className="f-12 px-2"
                  onClick={handleShow}
                >
                  Find place
                </Button>
              </div>
              <div className="col-3 px-1">
                <Button
                  variant="outline-light"
                  className="f-12 px-2"
                  onClick={handleShow}
                >
                  Find place
                </Button>
              </div>
            </Row>
          </>
        ) : (
          <>
            <Row className={isMobile ? "pt-2" : "pt-5"}>
              <Col lg="2" />
              <Col md="8">
                <Row>
                  <Col>
                    <div className="square">
                      <div className="square-inner">
                        <Row className="mb-4">
                          <Col md="4" />
                          <Col md="3">
                            <i className="fa fa-map-marker" />
                          </Col>
                        </Row>
                        <Row className="mb-4">
                          <Col md="3" />
                          <Col md="9" className="p-0">
                            <h5>Find place</h5>
                          </Col>
                        </Row>
                        <Row className="mb-4">
                          <Col md="4" className="pr-5 mr-2" />
                          <Col md="3">
                            <i className="fa fa-plus" />
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="square">
                      <div className="square-inner">
                        <Row className="mb-4">
                          <Col md="4" />
                          <Col md="3">
                            <i className="fa fa-map-marker" />
                          </Col>
                        </Row>
                        <Row className="mb-4">
                          <Col md="3" />
                          <Col md="9" className="p-0">
                            <h5>Find place</h5>
                          </Col>
                        </Row>
                        <Row className="mb-4">
                          <Col md="4" className="pr-5 mr-2" />
                          <Col md="3">
                            <i className="fa fa-plus" />
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="square">
                      <div className="square-inner">
                        <Row className="mb-4">
                          <Col md="4" />
                          <Col md="3">
                            <i className="fa fa-map-marker" />
                          </Col>
                        </Row>
                        <Row className="mb-4">
                          <Col md="3" />
                          <Col md="9" className="p-0">
                            <h5>Find place</h5>
                          </Col>
                        </Row>
                        <Row className="mb-4">
                          <Col md="4" className="pr-5 mr-2" />
                          <Col md="3">
                            <i className="fa fa-plus" />
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="square">
                      <div className="square-inner">
                        <Row className="mb-4">
                          <Col md="4" />
                          <Col md="3">
                            <i className="fa fa-map-marker" />
                          </Col>
                        </Row>
                        <Row className="mb-4">
                          <Col md="3" />
                          <Col md="9" className="p-0">
                            <h5>Find place</h5>
                          </Col>
                        </Row>
                        <Row className="mb-4">
                          <Col md="4" className="pr-5 mr-2" />
                          <Col md="3">
                            <i className="fa fa-plus" />
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col md="3" />
              <Col md="6">
                <Row>
                  <Col>
                    <div className="square">
                      <div className="square-inner">
                        <Row className="mb-4">
                          <Col md="4" />
                          <Col md="3">
                            <i className="fa fa-map-marker" />
                          </Col>
                        </Row>
                        <Row className="mb-4">
                          <Col md="3" />
                          <Col md="9" className="p-0">
                            <h5>Find place</h5>
                          </Col>
                        </Row>
                        <Row className="mb-4">
                          <Col md="4" className="pr-5 mr-2" />
                          <Col md="3">
                            <i className="fa fa-plus" />
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="square">
                      <div className="square-inner">
                        <Row className="mb-4">
                          <Col md="4" />
                          <Col md="3">
                            <i className="fa fa-map-marker" />
                          </Col>
                        </Row>
                        <Row className="mb-4">
                          <Col md="3" />
                          <Col md="9" className="p-0">
                            <h5>Find place</h5>
                          </Col>
                        </Row>
                        <Row className="mb-4">
                          <Col md="4" className="pr-5 mr-2" />
                          <Col md="3">
                            <i className="fa fa-plus" />
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="square">
                      <div className="square-inner">
                        <Row className="mb-4">
                          <Col md="4" />
                          <Col md="3">
                            <i className="fa fa-map-marker" />
                          </Col>
                        </Row>
                        <Row className="mb-4">
                          <Col md="3" />
                          <Col md="9" className="p-0">
                            <h5>Find place</h5>
                          </Col>
                        </Row>
                        <Row className="mb-4">
                          <Col md="4" className="pr-5 mr-2" />
                          <Col md="3">
                            <i className="fa fa-plus" />
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </>
        )}
      </Container>
    </div>
  );
};

export default WeHelped;
