import { useState } from "react";
import "./gallery.css";
import ArrowSlide from "../ArrowSlide/ArrowSlide";
export default function Gallery({ pictures }) {
  const [current, setCurrent] = useState(0);
  const length = pictures.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="Gallery">
      <ArrowSlide
        current={current}
        pictureLength={length}
        prevSlide={prevSlide}
        nextSlide={nextSlide}
      />
      {pictures.map((picture, index) => {
        return (
          <div
            key={picture}
            className={index === current ? "picture active" : "picture"}
          >
            {index === current && (
              <img className="galleryImage" src={picture} alt="" />
            )}
          </div>
        );
      })}
    </div>
  );
}
