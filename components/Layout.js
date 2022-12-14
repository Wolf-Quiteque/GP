import React from "react";

export default function Layout({ children }) {
  return (
    <>
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center justify-content-lg-between">
          <a href="index.html" className="logo me-auto me-lg-0">
            <img
              src="assets/img/logo.png"
              alt=""
              className="img-fluid"
              height={"300px"}
            />
          </a>

          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li>
                <a className="nav-link scrollto active" href="#hero">
                  Home
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#about">
                  Sobre
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#services">
                  Serviços
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#team">
                  Equipa
                </a>
              </li>

              <li>
                <a className="nav-link scrollto" href="#contact">
                  Contacto
                </a>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>

          <a href="#about" className="get-started-btn scrollto">
            Loja Virtual
          </a>
        </div>
      </header>

      {children}
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="footer-info">
                  <h3>
                    Gp<span>.</span>
                  </h3>
                  <p>
                    A108 Adam Street <br />
                    NY 535022, USA
                    <br />
                    <br />
                    <strong>Phone:</strong> +1 5589 55488 55
                    <br />
                    <strong>Email:</strong> info@example.com
                    <br />
                  </p>
                  <div className="social-links mt-3">
                    <a href="#" className="twitter">
                      <i className="bx bxl-twitter"></i>
                    </a>
                    <a href="#" className="facebook">
                      <i className="bx bxl-facebook"></i>
                    </a>
                    <a href="#" className="instagram">
                      <i className="bx bxl-instagram"></i>
                    </a>
                    <a href="#" className="google-plus">
                      <i className="bx bxl-skype"></i>
                    </a>
                    <a href="#" className="linkedin">
                      <i className="bx bxl-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Links</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right"></i> <a href="#">Home</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">Sobre</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">Serviços</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <a href="#">Equipa</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-4 col-md-6 footer-newsletter">
                <h4>Nosso Newsletter</h4>
                <p>
                  Tamen quem nulla quae legam multos aute sint culpa legam
                  noster magna
                </p>
                <form action="" method="post">
                  <input type="email" name="email" />
                  <input type="submit" value="Subscribe" />
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>Gp</span>
            </strong>
            . Todos Direitos Reservado
          </div>
          <div className="credits">
            Criado por <a href="#">Cerfonte</a>
          </div>
        </div>
      </footer>
    </>
  );
}
