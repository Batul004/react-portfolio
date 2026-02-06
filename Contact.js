import React from "react";

const Contact = () => {
  return (
    <section className="section text-center" id="contact">
      <div className="container">
        <h2 className="fw-bold mb-3">Contact Me</h2>
     <p className="text-muted mb-4">
          Feel free to connect with me through these platforms:
        </p>

        <div className="d-flex flex-wrap justify-content-center gap-3">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/batul-husain-9a15801a2/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline-primary px-4 py-2 fw-semibold"
          >
 <i className="bi bi-linkedin me-2"></i>
            LinkedIn          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Batul004"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline-dark px-4 py-2 fw-semibold"
          >
            <i className="bi bi-github me-2"></i>
            GitHub
          </a>

          {/* Gmail */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=batulhusain.004@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline-danger px-4 py-2 fw-semibold"
          >
            <i className="bi bi-envelope-fill me-2"></i>
            Gmail
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/_batul.04"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline-warning px-4 py-2 fw-semibold"
          >
           <i className="bi bi-instagram me-2"></i>
            Instagram
          </a>

          {/* Phone */}
          <a
            href="tel:+919009535160"
            className="btn btn-outline-success px-4 py-2 fw-semibold"
          >
            <i className="bi bi-telephone-fill me-2"></i>
            Call Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;