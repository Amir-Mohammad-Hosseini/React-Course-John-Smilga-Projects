import React from "react";
import SectionTitle from "../SectionTitle";
import SECTION_TITLE from "../sectionTitle/sectionTitle";
import TOURS from "./toursData";
import Tour from "./Tour";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <SectionTitle {...SECTION_TITLE[2]} />

      <div className="section-center featured-center">
        {TOURS.map((tour) => (
          <Tour key={tour.id} {...tour} />
        ))}
      </div>
    </section>
  );
};

export default Tours;
