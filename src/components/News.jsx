import React, { useEffect, useState } from "react";
import { Button, Container, Form, InputGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { articles, sourceCategory } from "../json/newsapi.json";
import DatePicker from "react-date-picker";
import NewsCard from "./shared/NewsCard";
import ReactPaginate from "react-paginate";

const News = (props) => {
  const [fromValue, onChangeFrom] = useState(new Date());
  const [toValue, onChangeTo] = useState(new Date());
  const [offset, setOffset] = useState(0);
  const [paginationData, setPaginationData] = useState([]);
  const [perPage, setPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(4);
  const slice = paginationData.slice(offset, offset + perPage);
  const isMobile = window.innerWidth < 768;
  useEffect(() => {
    setPaginationData(articles);
  }, []);
  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * perPage;

    setCurrentPage(selectedPage);
    setOffset(offset);
    setPageCount(Math.ceil(articles.length / perPage));
  };
  return (
    <Container fluid className="mt-5 pt-5">
      <Row>
        <div className="col-lg-1" />
        <div className="col-lg-10 px-4">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb bg-transparent px-0">
              <li className="breadcrumb-item">
                <Link to="/" className="text-info text-decoration-none">
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                <a className="text-muted text-decoration-none pointer">News</a>
              </li>
            </ol>
          </nav>
          <h3>News</h3>
          <Row>
            <div className="col-lg-2">
              <form className="form-group">
                <div className=" mb-2">
                  <label htmlFor="from" className="">
                    From
                  </label>
                  <DatePicker
                    className="form-control"
                    onChange={onChangeFrom}
                    value={fromValue}
                    calendarIcon={
                      <span className="fa fa-calendar-minus-o cl-light-green" />
                    }
                  />
                </div>
              </form>
            </div>
            <div className="col-lg-2">
              <form className="form-group">
                <div className=" mb-2">
                  <label htmlFor="to" className="">
                    To
                  </label>
                  <DatePicker
                    className="form-control"
                    onChange={onChangeTo}
                    value={toValue}
                    name="Select"
                    calendarIcon={
                      <h6 className="fa fa-calendar-minus-o cl-light-green" />
                    }
                  />
                </div>
              </form>
            </div>
            <div className="col-lg-2">
              <form className="form-group">
                <label htmlFor="category">Category</label>
                <select className="form-control">
                  {sourceCategory.map((category, i) => {
                    return <option key={i}>{category.name}</option>;
                  })}
                </select>
              </form>
            </div>
            <div className="col-lg-5">
              <Form.Group>
                <label htmlFor="search" className="text-light">
                  Subscribe to Newsletter
                </label>
                <InputGroup>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search services"
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
                      <i className="fa fa-search" />
                    </Button>
                  </InputGroup.Append>
                </InputGroup>
              </Form.Group>
            </div>
            <div className="col-lg-1">
              <label className="text-light">Sort</label>
              <p className="cl-light-green pointer">
                <span>Sort by</span> <i className="fa fa-long-arrow-up" />
                <i className="fa fa-long-arrow-down" />
              </p>
            </div>
          </Row>
          <div className="row">
            {slice.map((article, i) => {
              return (
                <div className="col-lg-4 mb-4" key={i}>
                  <NewsCard article={article} isMobile={isMobile} />
                </div>
              );
            })}
          </div>
          <ReactPaginate
            previousLabel={"prev"}
            nextLabel={"next"}
            pageCount={pageCount}
            marginPagesDisplayed={5}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName="pagination float-right"
            activeClassName="active"
            pageClassName="page-item"
            disabledClassName="disabled text-muted"
            pageLinkClassName="page-link"
            previousClassName="page-item page-link"
            nextClassName="page-item page-link"
          />
        </div>
      </Row>
    </Container>
  );
};

export default News;
