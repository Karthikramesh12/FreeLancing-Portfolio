import './Nav.css';

const NavBar = () => {
  return (
    <>
      <nav className="navbar nav navbar-expand-lg sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            KARTHIK | VENKATESH
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
              <a className="nav-link" href="#">
                About
              </a>
              <a className="nav-link" href="#">
                Services
              </a>
              <a className="nav-link" href="#">
                Projects
              </a>
              <a className="nav-link" href="#">
                Contact Us
              </a>
            </div>
            
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;