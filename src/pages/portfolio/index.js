import React, { useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const [lastImage, setLastImage] = useState(false);

  const lmsCourseImages = [
    "LMS-course-page-design/LMS-course-page-design.png",
    "LMS-course-page-design/LMS-module-1-detail-page.png",
    "LMS-course-page-design/LMS-module1-lesson1-detail-page.png",
    "LMS-course-page-design/LMS-module1-lesson1-mcq-result.png",
    "LMS-course-page-design/LMS-module1-lesson1-mcq.png",
    "LMS-course-page-design/LMS-section-on-main-screen.png",
  ];

  const openLightbox = (image, index) => {
    setCurrentImage(image);
    setLightboxOpen(true);
    if (index === dataportfolio.length - 1) setLastImage(true);
    else setLastImage(false);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImage("");
    document.body.style.overflow = "auto";
  };
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-3 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="po_items_ho">
          {dataportfolio.map((data, i) => {
            return (
              <div
                className="mb-5 gallery-item"
                key={i}
                onClick={() => openLightbox(data.img, i)}
              >
                <img src={data.img} alt={`Gallery Item ${i + 1}`} />
              </div>
            );
          })}

          {lightboxOpen && (
            <div className="lightbox">
              <div className="close" onClick={closeLightbox}>
                X
              </div>
              <div className="lightbox-scroll-container">
                {!lastImage ? (
                  <img
                    className="lightbox-content"
                    src={currentImage}
                    alt="Lightbox"
                  />
                ) : (
                  <>
                    <div className="po_items_inner_ho">
                      {lmsCourseImages.map((data, i) => {
                        return (
                          <div
                            className="mb-5 gallery-inner-item"
                            key={i}
                            onClick={() => openLightbox(data, i)}
                          >
                            <img src={data} alt={`Gallery Item ${i + 1}`} />
                          </div>
                        );
                      })}
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </Container>
    </HelmetProvider>
  );
};
