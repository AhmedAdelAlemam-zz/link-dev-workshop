import React from "react";
import { Badge, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import notFoundImage from "../../assets/images/image-not-found.jpg";

const NewsCard = (props) => {
  const { article, isMobile } = props;
  const formatDate = (string) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(string).toDateString([], options).replace(/,/g, "");
  };
  return (
    <div className="news-card-shadow">
      <Link
        to={`/news-details/${article.id}`}
        className="text-decoration-none text-dark"
      >
        <Image
          src={article.urlToImage ? article.urlToImage : notFoundImage}
          className="w-100"
        />

        <div className="p-4">
          <Row>
            <div className={isMobile ? "col-8" : "col-lg-9"} />
            <div className={isMobile ? "col-1 mr-2" : "col-lg-1 mr-2"}>
              <h4>
                <i className="fa fa-heart-o cl-light-green font-weight-bold" />
              </h4>
            </div>
            <div className={isMobile ? "col-1" : "col-lg-1"}>
              <h4>
                <i className="fa fa-share-alt cl-light-green font-weight-lighter" />
              </h4>
            </div>
          </Row>
          <h4 className={isMobile ? "news-card-title f-18" : "news-card-title"}>
            {article.title}
          </h4>
          <Badge
            variant="light"
            className={
              isMobile
                ? "py-2 px-3 my-2 rounded-pill f-12"
                : "py-2 px-3 my-3 rounded-pill"
            }
          >
            News
          </Badge>
          <div className="h-80">
            {article.content ? (
              <p className={isMobile ? "text-muted f-14" : "text-muted"}>
                {article.content.slice(0, 120)}
              </p>
            ) : (
              <p className="text-danger">
                No content available for this article
              </p>
            )}
          </div>
          <i className="fa fa-calendar-o cl-light-green pr-2" />
          <span
            className={
              isMobile
                ? "text-muted f-12 font-weight-bold"
                : "text-muted h6 font-weight-bold"
            }
          >
            {formatDate(article.publishedAt)}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default NewsCard;
