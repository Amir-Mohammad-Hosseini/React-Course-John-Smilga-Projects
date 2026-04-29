import { FaMap } from "react-icons/fa";

const Tour = ({ image, date, title, description, country, days, price }) => {
  return (
    <article className="tour-card">
      <div className="tour-img-container">
        <img src={image} className="tour-img" alt="" />
        <p className="tour-date">{date}</p>
      </div>
      <div className="tour-info">
        <h4>{title}</h4>
        <p>{description}</p>
        <div className="tour-footer">
          <p>
            <span>
              <FaMap />
            </span>{" "}
            {country}
          </p>
          <p>{days} days</p>
          <p>from ${price}</p>
        </div>
      </div>
    </article>
  );
};

export default Tour;
