function getresume(){
  window.open("https://drive.google.com/file/d/1I4cQOUzUt6wnF9nVwvPwhDnKTz7JoRQJ/", "_blank");
}

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Devansh Dalwadi</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
          I’m a passionate problem solver and a full-stack developer with a
            strong foundation in computer science fundamentals.
          </p>
        </div>
        <button className="btn btn-primary" onClick={getresume}>Explore My CV</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/about-me-3.png" alt="Hero Section" />
      </div>
    </section>
  );
}
