import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import NewsCard from "../shared/NewsCard";

const HomeNews = (props) => {
  const { articles } = props;
  const isMobile = window.innerWidth < 768;

  return (
    <Container fluid className="mt-4 home-news pb-5">
      <Row className="lg-4">
        {isMobile ? null : <Col lg="1" />}
        <div className={isMobile ? "col-8" : "col-lg-4"}>
          <h1 className={isMobile ? "f-18" : null}>Latest news</h1>
        </div>
        {isMobile ? null : <Col lg="5" />}
        <div className={isMobile ? "col-4" : "col-lg-2"}>
          <Link
            to="/news"
            className={
              isMobile
                ? "f-12 cl-light-green text-decoration-none"
                : "h6 cl-light-green text-decoration-none"
            }
          >
            View All <i className="fa fa-long-arrow-right pl-2" />
          </Link>
        </div>
      </Row>
      <Row>
        {isMobile ? null : <Col lg="1" />}
        <div className={isMobile ? "col-12" : "col-lg-10"}>
          <Row>
            {articles.map((article, i) => {
              return (
                <Fragment key={i}>
                  {article.showOnHomepage ? (
                    <div className={isMobile ? "col-12 mb-4" : "col-lg-4 mb-4"}>
                      <NewsCard article={article} isMobile={isMobile} />
                    </div>
                  ) : null}
                </Fragment>
              );
            })}
          </Row>
        </div>
      </Row>
    </Container>
  );
};

export default HomeNews;
