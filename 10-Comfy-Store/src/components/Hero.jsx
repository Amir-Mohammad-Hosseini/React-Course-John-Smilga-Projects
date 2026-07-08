import { Link } from "react-router-dom";

import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";

const carouselImages = [hero1, hero2, hero3, hero4];

const Hero = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-24 items-center">
      {/* INFO */}
      <div>
        <h1 className="max-w-2xl tracking-tight text-4xl font-bold sm:text-6xl">
          we are changing the way people shop
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          eos asperiores perspiciatis inventore aspernatur explicabo tempora
          quidem dignissimos facilis error?
        </p>
        <div className="mt-10">
            <Link to="/products" className="btn btn-primary">Our Products</Link>
        </div>
      </div>

      {/* CAROUSEL */}
      <div className="hidden lg:flex carousel carousel-center h-[28rem] space-x-4 rounded-box bg-neutral p-4">
        {carouselImages.map((image) => {
          return (
            <div key={image} className="carousel-item">
              <img
                src={image}
                className="rounded-box h-full w-80 object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
