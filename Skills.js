import { useEffect, useRef } from "react";

const skills = [
  "HTML", "CSS", "JavaScript",
  "React", "Angular", "Node.js", "MongoDB",
  "Bootstrap", "Git", "PHP"
];

const Skills = () => {
  const skillRef = useRef(null);

  // Scroll Animation Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show-skills");
          }
        });
      },
      { threshold: 0.3 }
    );

    if (skillRef.current) observer.observe(skillRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-5 bg-light" id="skills">
      <div className="container text-center" ref={skillRef}>

        {/* Title */}
        <h2 className="fw-bold mb-5 fade-up">
          My Skills 
        </h2>

        {/* Skills Grid */}
        <div className="row justify-content-center g-4">
          {skills.map((skill, index) => (
            <div
              key={skill}
              className="col-6 col-md-3 col-lg-2 fade-up"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="skill-card shadow-sm">
                {skill}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
