import React, { Fragment } from "react";
import { Button, Carousel, Image } from "react-bootstrap";
import carouselImage from "../../assets/images/carousel-bg.png";
const HomeCarousel = (props) => {
  const isMobile = window.innerWidth < 768;

  return (
    <div
      className={
        isMobile ? "home-carousel mt-4 pt-5" : "home-carousel mt-4 pt-5"
      }
    >
      <Carousel
        prevIcon={
          <i
            aria-hidden="true"
            className="fa fa-angle-left rounded text-muted bg-light py-2 px-3"
          />
        }
        nextIcon={
          <i
            aria-hidden="true"
            className="fa fa-angle-right rounded text-muted bg-light py-2 px-3"
          />
        }
      >
        <Carousel.Item>
          <Image
            src={carouselImage}
            className={isMobile ? "w-100 h-200" : "w-100"}
          />
          <Carousel.Caption className="p-0">
            <h1
              className={
                isMobile ? "f-18 font-weight-bold m-0" : "mt-4 font-weight-bold"
              }
            >
              First slide label
            </h1>
            <div className={isMobile ? "pt-2 f-14" : "mt-4 pt-2 h4"}>
              <p className="mb-2">
                Nulla vitae elit libero, a pharetra augue mollis interdum
                <br />
                Nulla vitae elit libero
              </p>
              <Button
                variant="success"
                size={isMobile ? "sm" : "lg"}
                className={
                  isMobile
                    ? "bg-light-green border-0 mt-1"
                    : "bg-light-green border-0"
                }
              >
                Donate Now
              </Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            src={carouselImage}
            className={isMobile ? "w-100 h-200" : "w-100"}
          />
          <Carousel.Caption className="p-0">
            <h1
              className={
                isMobile ? "f-18 font-weight-bold m-0" : "mt-4 font-weight-bold"
              }
            >
              First slide label
            </h1>
            <div className={isMobile ? "pt-2 f-14" : "mt-4 pt-2 h4"}>
              <p className="mb-2">
                Nulla vitae elit libero, a pharetra augue mollis interdum
                <br />
                Nulla vitae elit libero
              </p>
              <Button
                variant="success"
                size={isMobile ? "sm" : "lg"}
                className={
                  isMobile
                    ? "bg-light-green border-0 mt-1"
                    : "bg-light-green border-0"
                }
              >
                Donate Now
              </Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            src={carouselImage}
            className={isMobile ? "w-100 h-200" : "w-100"}
          />
          <Carousel.Caption className="p-0">
            <h1
              className={
                isMobile ? "f-18 font-weight-bold m-0" : "mt-4 font-weight-bold"
              }
            >
              First slide label
            </h1>
            <div className={isMobile ? "pt-2 f-14" : "mt-4 pt-2 h4"}>
              <p className="mb-2">
                Nulla vitae elit libero, a pharetra augue mollis interdum
                <br />
                Nulla vitae elit libero
              </p>
              <Button
                variant="success"
                size={isMobile ? "sm" : "lg"}
                className={
                  isMobile
                    ? "bg-light-green border-0 mt-1"
                    : "bg-light-green border-0"
                }
              >
                Donate Now
              </Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
