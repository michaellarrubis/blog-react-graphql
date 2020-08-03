import React, { useState, useEffect } from "react";

import { postDate } from "../utils/helpers";

const Carousel = ({ carouselPosts }) => {
  const marginLeft = ["0", "-100%", "-200%"];
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideData, setSlideData] = useState([]);

  useEffect(() => {
    if (carouselPosts && carouselPosts.posts?.length > 0) {
      setSlideData(carouselPosts.posts);
    }
  }, [carouselPosts]);

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  const navigateToSlide = (e) => {
    e.preventDefault();
    const { id } = e.target;
    let index = activeIndex;

    if (id === "prev") {
      let slidesLength = slideData.length;

      if (index < 1) {
        index = slidesLength;
      }

      index -= 1;
    } else {
      let slidesLength = slideData.length - 1;

      if (index === slidesLength) {
        index = -1;
      }

      index += 1;
    }

    setActiveIndex(index);
  };

  return (
    <div className="carousel">
      <div className="carousel-indicator">
        {slideData?.map((slide, index) => (
          <div
            key={index}
            className={
              index === activeIndex
                ? "carousel-indicator-item is-active"
                : "carousel-indicator-item"
            }
            onClick={(e) => goToSlide(index)}
          />
        ))}
      </div>

      <div className="carousel-slides">
        <div
          className="carousel-navigate carousel-navigate-left"
          id="prev"
          onClick={(e) => navigateToSlide(e)}
        >
          <div className="navigate navigate-left" />
        </div>

        <div
          className="carousel-list"
          style={{ marginLeft: marginLeft[activeIndex] }}
        >
          {slideData?.map((slide, index) => (
            <div
              style={{ backgroundImage: `url(${slide.imageUrl})` }}
              className="carousel-item"
              key={index}
            >
              <div className="u-container carousel-item-inner-wrapper">
                <div className="carousel-item-inner">
                  <div className="carousel-item-title">{slide.title}</div>
                  <time
                    dateTime={postDate(slide.created)}
                    className="carousel-item-created"
                  >
                    {postDate(slide.created)}
                  </time>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className="carousel-navigate carousel-navigate-right"
          id="next"
          onClick={(e) => navigateToSlide(e)}
        >
          <div className="navigate navigate-right" />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
