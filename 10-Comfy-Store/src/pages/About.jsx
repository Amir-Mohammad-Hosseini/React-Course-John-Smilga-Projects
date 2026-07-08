import React from "react";

const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight">
          We love
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              comfy
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
        perferendis iste quod aliquid, labore voluptatum dolor. Quae consectetur
        adipisci officia iure illo debitis porro voluptates, tempora distinctio
        cupiditate eum voluptatum? Consectetur, vel? Blanditiis quo voluptate
        nobis dolor molestiae vitae delectus, natus aut sed velit reiciendis,
        excepturi nostrum ab commodi voluptatum hic magni quos qui! Debitis
        saepe impedit natus nostrum nesciunt?
      </p>
    </>
  );
};

export default About;
