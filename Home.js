import React, { useEffect, useState } from "react";

const Home = () => {
  const words = [
    "Full Stack Developer",
    "React Developer",
    "Web Designer",
    "Freelancer",
  ];

  const [index, setIndex] = useState(0);

  // ✅ Change word every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="vh-100 d-flex align-items-center text-white position-relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* ✅ Dark Overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundColor: "rgba(0,0,0,0.7)",
        }}
      ></div>

      {/* ✅ Content */}
      <div className="container position-relative text-center text-md-start">
        <h1 className="display-3 fw-bold">
          Hi, I'm <span className="text-warning">Batul Husain</span>
        </h1>

        {/* ✅ Rotating Text */}

        <h2 className="mt-3 fw-light">
          I am a{" "}
          <span className="cd-words-wrapper">
            <span key={index} className="rotating-word">
              {words[index]}
            </span>
          </span>
        </h2>
      </div>
    </section>
  );
};

export default Home;