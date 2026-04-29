import { useState } from "react";
import PEOPLE from "./data.js";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
const App = () => {
  const [personIndex, setPersonIndex] = useState(1);
  const { name, job, image, text } = PEOPLE[personIndex];
  const handleClickNextPerson = () => {
    setPersonIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % PEOPLE.length
      return newIndex
    })
  };
  const handleClickPrevPerson = () => {
setPersonIndex((prevIndex) => {
  const newIndex = (prevIndex - 1 + PEOPLE.length) % PEOPLE.length
  return newIndex
})
  };
  const handleClickRandomPerson = () => {
    let randomIndex = Math.floor(Math.random() * PEOPLE.length);
    if (randomIndex === personIndex){
      handleClickNextPerson()
      return
    }
    setPersonIndex(randomIndex)
  };
  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button onClick={handleClickPrevPerson} className="prev-btn">
            <FaChevronLeft />
          </button>
          <button onClick={handleClickNextPerson} className="next-btn">
            <FaChevronRight />
          </button>
        </div>
        <button
          className="btn btn-hipster"
          onClick={handleClickRandomPerson}
        >suprise me</button>
      </article>
    </main>
  );
};
export default App;
