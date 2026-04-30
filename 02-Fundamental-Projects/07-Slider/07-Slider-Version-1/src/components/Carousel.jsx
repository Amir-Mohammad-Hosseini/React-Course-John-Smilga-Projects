import React, { useCallback, useEffect, useState } from "react";
import { shortList, list, longList } from "./../data";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
const Carousel = () => {
  const [people] = useState(longList);
  const [currentPersonIndex, setCurrentPersonIndex] = useState(1);

  const slidePrevPerson = () => {
    setCurrentPersonIndex(
      (prevIndex) => (prevIndex - 1 + people.length) % people.length,
    );
  };

  const slideNextPerson = useCallback(function slideNextPerson() {
    setCurrentPersonIndex((prevIndex) => (prevIndex + 1) % people.length);
  });

  useEffect(() => {
    const slideTimeout = setTimeout(() => {
      slideNextPerson();
    }, 3000);
    return () => {
      clearTimeout(slideTimeout);
    };
  }, [slideNextPerson]);

  return (
    <section className="slider-container">
      {people.map((person, index) => {
        const { id, image, name, title, quote } = person;
        return (
          <article
            className="slide"
            style={{
              transform: `translateX(${(currentPersonIndex - index) * 100}%)`,
            }}
            key={id}
          >
            <img src={image} alt={name} className="person-img" />
            <h5 className="name">{name}</h5>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        );
      })}
      <button type="button" className="prev" onClick={slidePrevPerson}>
        <FiChevronLeft />
      </button>
      <button type="button" className="next" onClick={slideNextPerson}>
        <FiChevronRight />
      </button>
    </section>
  );
};

export default Carousel;
