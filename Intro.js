import hero from "../assets/profile.jpg";

const Intro = () => {
  return (
    <section id="intro" className="intro">
      <div>
        <h1>Hi!<br />I'm Batul</h1>
        <button>KNOW MORE</button>
      </div>
      <img src={hero} alt="hero" />
    </section>
  );
};

export default Intro;