import React from "react";

const Projects = () => {
  const projects = [
    // ✅ MAIN PROJECTS FIRST
    {
      title: "Monginis Bakery Clone Website",
      desc: "A beautiful responsive clone of Monginis bakery website using HTML, CSS, Bootstrap.",
      img: "/projects/monginis.png",
      github: "https://github.com/your-username/monginis-clone",
      demo: "https://your-demo-link.com",
    },

    {
      title: "Marquee ",
      desc: "Creative marquee ",
      img: "/projects/marquee.png",
      github: "https://github.com/your-username/marquee-site",
      demo: "https://your-demo-link.com",
    },


    // ✅ OTHER PROJECTS AFTER
    {
      title: "Interactive Quiz App",
      desc: "Fun quiz app with score tracking and multiple questions.",
      img: "/projects/quiz.png",
      github: "https://github.com/your-username/quiz-app",
      demo: "https://your-demo-link.com",
    },
    {
      title: "Image Slider",
      desc: "Responsive image carousel with smooth transitions.",
      img: "/projects/slider.png",
      github: "https://github.com/your-username/image-slider",
      demo: "https://your-demo-link.com",
    },
    {
      title: "Basic Calculator",
      desc: "Simple calculator built using JavaScript arithmetic logic.",
      img: "/projects/calculator.png",
      github: "https://github.com/your-username/calculator",
      demo: "https://your-demo-link.com",
    },
    {
      title: "Tic Tac Toe Game",
      desc: "Classic game with interactive UI and win logic.",
      img: "/projects/tictactoe.png",
      github: "https://github.com/your-username/tic-tac-toe",
      demo: "https://your-demo-link.com",
    },
    {
      title: "Countdown Timer",
      desc: "Timer app that counts down with real-time updates.",
      img: "/projects/timer.png",
      github: "https://github.com/your-username/countdown-timer",
      demo: "https://your-demo-link.com",
    },
    {
      title: "To-Do List App",
      desc: "Task manager app with add, delete and complete features.",
      img: "/projects/todo.png",
      github: "https://github.com/your-username/todo-app",
      demo: "https://your-demo-link.com",
    },
  ];

  // Split projects into chunks of 3
  const chunkSize = 3;
  const projectChunks = [];
  for (let i = 0; i < projects.length; i += chunkSize) {
    projectChunks.push(projects.slice(i, i + chunkSize));
  }

  return (
    <section className="py-5 bg-light" id="projects">
      <div className="container">
        <h2 className="fw-bold text-center mb-5">My Projects</h2>

        {/* Carousel */}
        <div
          id="projectCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {projectChunks.map((chunk, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <div className="row g-4 justify-content-center">
                  {chunk.map((project, i) => (
                    <div key={i} className="col-md-4">
                      <div className="card shadow-lg border-0 h-100">
                        {/* Image */}
                        <img
                          src={project.img}
                          className="card-img-top"
                          alt={project.title}
                          style={{
                            height: "200px",
                            objectFit: "cover",
                          }}
                        />

                        {/* Body */}
                        <div className="card-body text-center">
                          <h5 className="fw-bold">{project.title}</h5>
                          <p className="text-muted small">{project.desc}</p>

                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#projectCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon bg-dark rounded-circle p-3"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#projectCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon bg-dark rounded-circle p-3"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>

        </div>
      </div>
    </section>
  );
};

export default Projects;
