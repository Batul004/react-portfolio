
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top transparent-nav">
      <div className="container">

        {/* Logo + Profile */}
        <a className="navbar-brand d-flex align-items-center gap-2" href="#home">
          <span className="fw-bold fs-4">MyPortfolio</span>
        </a>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav ms-auto gap-3">
            <li className="nav-item">
              <a className="nav-link fw-semibold" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold" href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-semibold" href="#contact">Contact</a>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;