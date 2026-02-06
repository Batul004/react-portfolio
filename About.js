import { useEffect, useRef } from "react";
import profile from "../assets/profile.jpg";
import resume from "../assets/resume.pdf";

const About = () => {
  const aboutRef = useRef(null);

  // Scroll Animation Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) observer.observe(aboutRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-5 bg-light">
      

        <div className="row align-items-center">
          {/* Profile Image */}
          <div className="col-md-5 text-center mb-4 mb-md-0 fade-left">
            <img
              src={profile}
              alt="Profile"
              className="img-fluid rounded-circle  border border-3 border-dark"
              style={{ width: "280px", height: "280px", objectFit: "cover" }}
            />
          </div>

          {/* Text Content */}
          <div className="col-md-7 fade-right">
            <h3 className="fw-bold mb-3">
              Hi, I'm{" "}
              <span className="text-primary">Batul Husain</span> 
            </h3>

            <p className="text-muted fs-5">
              I'm a passionate{" "}
              <span className="fw-semibold text-dark">
                Full Stack Developer
              </span>{" "}
              who loves building modern, responsive web applications with clean
              UI and scalable backend.
            </p>

            <p className="text-muted fs-5">
              I enjoy working with{" "}
              <span className="fw-semibold text-dark">
                React, Node.js, MongoDB, Bootstrap
              </span>{" "}
              and creating real-world projects that solve problems.
            </p>

            {/* Resume Button */}
            <a
              href={resume}
              download
              className="btn btn-secondary btn-lg px-4 mt-3 shadow-sm"
            >
              📄 Download Resume
            </a>
          </div>
        </div>
    </section>
  );
};

export default About;
