import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import notFoundImage from "../assets/images/image-not-found.jpg";

const ArticleDetails = (props) => {
  const { article, categoryName } = props;
  console.log(props);
  return (
    <Container fluid className="mt-5 pt-5 px-4">
      <Row>
        <div className="col-lg-1" />
        <div className="col-lg-10">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb bg-transparent px-0">
              <li className="breadcrumb-item">
                <Link to="/" className="text-info text-decoration-none">
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item" aria-current="page">
                <Link to="/news" className="text-info text-decoration-none">
                  News
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                <a className="text-muted text-decoration-none pointer">
                  News Details
                </a>
              </li>
            </ol>
          </nav>
          <h1>News Details</h1>
          <div className="rounded-lg border-white">
          <img
            src={article.urlToImage ? article.urlToImage : notFoundImage}
            alt="article-image"
            className="w-100 h-350"
          />
          <div className="bg-white py-4 pl-4 pr-0">
            <p className="text-muted">{categoryName}</p>
            <Row>
              <div className="col-lg-11">
                <h3 className="font-weight-bold">{article.title}</h3>
              </div>
              <div className="col-lg-1">
                <i className="fa fa-heart-o cl-light-green font-weight-bold mr-3" />
                <i className="fa fa-share-alt cl-light-green font-weight-lighter" />
              </div>
            </Row>
            {article.content ? (
              <p className="text-muted py-3">{article.content}</p>
            ) : (
              <p className="text-center text-danger f-18 pt-5">
                No content for this article
              </p>
            )}
          </div>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default ArticleDetails;
