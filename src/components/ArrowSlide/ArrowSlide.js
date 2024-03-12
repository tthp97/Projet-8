export default function ArrowSlide({
  current,
  pictureLength,
  prevSlide,
  nextSlide,
}) {
  let classNameArLeft = "fa-solid fa-angle-left";
  let classNameArRight = "fa-solid fa-angle-right";
  let numerotation = "numerotation";
  if (pictureLength <= 1) {
    classNameArLeft += " d-none";
    classNameArRight += "d-none";
    numerotation += " d-none";
  }
  return (
    <>
      <div className="arrow">
        <i onClick={prevSlide} className={classNameArLeft}></i>
        <i onClick={nextSlide} className={classNameArRight}></i>
      </div>
      <div className={numerotation}>
        {current + 1}/{pictureLength}
      </div>
    </>
  );
}
