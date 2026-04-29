import React from "react";
import { FaSocks, FaTree, FaWallet } from "react-icons/fa";
import SectionTitle from "./SectionTitle";
import SECTION_TITLE from "./sectionTitle/sectionTitle";

const Services = () => {
  return (
    <section className="section services" id="services">
      <SectionTitle {...SECTION_TITLE[1]} />
      <div className="section-center services-center">
        <article className="service">
          <span className="service-icon">
            <FaWallet />
          </span>
          <div className="service-info">
            <h4 className="service-title">saving money</h4>
            <p className="service-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, officia.
            </p>
          </div>
        </article>

        <article className="service">
          <span className="service-icon">
            <FaTree />
          </span>
          <div className="service-info">
            <h4 className="service-title">endless hiking</h4>
            <p className="service-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, officia.
            </p>
          </div>
        </article>

        <article className="service">
          <span className="service-icon">
            <FaSocks />
          </span>
          <div className="service-info">
            <h4 className="service-title">amazing comfort</h4>
            <p className="service-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, officia.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Services;
