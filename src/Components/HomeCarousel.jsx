import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";


function HomeCarousel  () {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className="main-carousel"
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://aw-commercialflooring.co.uk/-/media/foundation/products/product-shots/w_mrtiba/mrtiba_98_office.ashx"
            alt="Slide1"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://thumbs.dreamstime.com/b/modern-office-space-interior-light-colors-wooden-bright-accents-computer-open-d-rendering-138815742.jpg"
            alt="Slide2"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.ctfassets.net/sxag7u4cz1re/5U00N9bdfGm3IgiV6vwpsX/3e39c9eafef2778e983d7d230be214f4/group-office-meeting.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
