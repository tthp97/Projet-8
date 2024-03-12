export default function Stars({ id, rating }) {
  rating = Number(rating);

  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <i
        className="fa-solid fa-star"
        style={{ color: i < rating ? "#FF6060" : "#E3E3E3" }}
        key={i}
      ></i>
    );
  }

  return (
    <div className="rating" key={`${id} + ${rating}`}>
      {stars}
    </div>
  );
}
