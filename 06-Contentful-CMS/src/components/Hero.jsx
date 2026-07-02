import heroImg from "./../assets/hero.svg"

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            I'm baby kombucha paris review affogato baffler, canon event next
            level spritz subway tile coloring book solarpunk waistcoat natural
            wine v60 chemex. Oyster hour cupping four tet ascot, sound bath
            phoebe bridgers polycule brainrot eames indigo dye pét-nat hoodie
            knoll. Gluten-free hot chicken bone broth biohack chillwave fashion
            axe
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
