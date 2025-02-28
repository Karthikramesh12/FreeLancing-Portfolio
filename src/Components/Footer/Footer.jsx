import "./Footer.css";

function Footer() {
  return (
    <footer className="text-center text-lg-start bg-body-tertiary text-muted footer-background">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
      <div className="me-5 d-none d-lg-block">
      <span className="text-light-footer">Get connected with us on social networks:</span>
    </div>
        <div>
          <a href="#" className="me-4 text-reset">
            <i className="fab fa-facebook-f text-light-footer"></i>
          </a>
          <a href="#" className="me-4 text-reset">
            <i className="fab fa-twitter text-light-footer"></i>
          </a>
          <a href="#" className="me-4 text-reset">
            <i className="fab fa-google text-light-footer"></i>
          </a>
          <a href="#" className="me-4 text-reset">
            <i className="fab fa-instagram text-light-footer"></i>
          </a>
          <a href="#" className="me-4 text-reset">
            <i className="fab fa-linkedin text-light-footer"></i>
          </a>
          <a href="#" className="me-4 text-reset">
            <i className="fab fa-github text-light-footer"></i>
          </a>
        </div>
      </section>

      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase text-light-footer fw-normal mb-4">
                <i className="fas fa-gem me-3"></i>Karthik | Venkatesh
              </h6>
              <p className="text-light-footer">
              A showcase of our journey as developers, featuring projects, skills, and experiences. Passionate about crafting innovative solutions and constantly learning to push the boundaries of technology.
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4 text-light-footer">Products</h6>
              <p className="text-light-footer">
                <a href="#!" className="text-reset anchor">
                  React
                </a>
              </p>
              <p className="text-light-footer">
                <a href="#!" className="text-reset anchor">
                  MERN Applications
                </a>
              </p>
              <p className="text-light-footer">
                <a href="#!" className="text-reset anchor">
                  WordPress
                </a>
              </p>
              <p className="text-light-footer">
                <a href="#!" className="text-reset anchor">
                  HTML & CSS
                </a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4 text-light-footer">Useful Links</h6>
              <p className="text-light-footer">
                <a href="#!" className="text-reset anchor">
                  Home
                </a>
              </p>
              <p className="text-light-footer">
                <a href="#!" className="text-reset anchor">
                  About
                </a>
              </p>
              <p className="text-light-footer">
                <a href="#!" className="text-reset anchor">
                  Projects
                </a>
              </p>
              <p className="text-light-footer">
                <a href="#!" className="text-reset anchor">
                  Contact
                </a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4 text-light-footer">Contact</h6>
              <p  className="text-light-footer">
                <i className="fas fa-envelope me-3"></i>
                info@example.com
              </p>
              <p className="text-light-footer">
                <i className="fas fa-phone me-3"></i> +01 234 567 88
              </p>
              <p className="text-light-footer">
                <i className="fas fa-print me-3"></i> +01 234 567 89
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center p-4 text-light-footer" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
        © 2025 Copyright:{" "}
        <a className="text-reset fw-normal" href="/">
          &nbsp;KarthikVenky.com
        </a>
      </div>
    </footer>
  );
}

export default Footer;
