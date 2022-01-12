import React, { useState, useEffect } from 'react';

function Slide(props) {
  const [slideIndex, setslideIndex] = useState(1);
  const prev = () => {
    if (slideIndex === 1) {
      setslideIndex(3);
    } else {
      setslideIndex(slideIndex - 1);
    }
  };
  const next = () => {
    if (slideIndex !== 3) {
      setslideIndex(slideIndex + 1);
    } else {
      setslideIndex(1);
    }
  };
  const currentSlide = (index) => {
    setslideIndex(index);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (slideIndex !== 3) {
        setslideIndex(slideIndex + 1);
      } else {
        setslideIndex(1);
      }
    }, 4000);
    return () => clearTimeout(timeout);
  });
  return (
    <div className="img-slide">
      <div className="img">
        {Array.from({ length: 3 }).map((item, index) => (
          <div
            className={slideIndex === index + 1 ? 'imgItem active' : 'imgItem'}
            key={index}
          >
            <img
              src={process.env.PUBLIC_URL + `/img/banner${index + 1}.jpg`}
              className="bannerItem"
            />
          </div>
        ))}
      </div>
      <div className="btn">
        <i className="fas fa-chevron-left" onClick={prev}></i>
        <i className="fas fa-chevron-right" onClick={next}></i>
      </div>
      <div className="dot">
        {Array.from({ length: 3 }).map((item, index) => (
          <div
            className={slideIndex === index + 1 ? 'dotItem active' : 'dotItem'}
            onClick={() => currentSlide(index + 1)}
            key={index}
          ></div>
        ))}
      </div>
    </div>
  );
}
export default Slide;
