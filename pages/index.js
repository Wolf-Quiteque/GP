import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>WPT - MARKETING DIGITAL</title>
      </Head>
      <section
        id="hero"
        className="d-flex align-items-center justify-content-center"
      >
        <div className="container" data-aos="fade-up">
          <div
            className="row justify-content-center"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <div className="col-xl-6 col-lg-8">
              <h1>
                Soluções Digitais com a WPT<span>.</span>
              </h1>
              <h2>Uma equipa talentosa de Marketing Digital</h2>
            </div>
          </div>

          <div
            className="row gy-4 mt-5 justify-content-center"
            data-aos="zoom-in"
            data-aos-delay="250"
          >
            <div className="col-xl-2 col-md-4">
              <div className="icon-box">
                <i className="ri-calendar-todo-line"></i>
                <h3>
                  <a href="">Links patrocinada</a>
                </h3>
              </div>
            </div>
            <div className="col-xl-2 col-md-4">
              <div className="icon-box">
                <i className="ri-database-2-line"></i>
                <h3>
                  <a href="">Gestão de site</a>
                </h3>
              </div>
            </div>
            <div className="col-xl-2 col-md-4">
              <div className="icon-box">
                <i className="ri-paint-brush-line"></i>
                <h3>
                  <a href="">
                    Criação de Site & <br /> E-commerece
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main id="main">
        <section id="about" className="about">
          <div className="container" data-aos="fade-up">
            <div className="row">
              <div
                className="col-lg-6 order-1 order-lg-2"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                <img src="assets/img/pina.png" className="img-fluid" alt="" />
              </div>
              <div
                style={{ marginTop: "10%" }}
                className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                <h3>Quem somos?</h3>
                <p style={{ fontWeight: 500 }}>
                  Somos uma empresa de marketing e vendas focada em resultados
                  que pode ajudar sua empresaa crescer!
                </p>

                <p style={{ fontWeight: 500 }}>
                  Estamos no mercado há mais de 3 anos e somos especialistas em
                  geração de crescimento por meio de estratégias marketing e
                  vendas!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* dddsd */}

        <section id="clients" className="clients">
          <div className="container" data-aos="zoom-in">
            <div className="clients-slider swiper">
              <div className="swiper-wrapper align-items-center">
                <div className="swiper-slide">
                  <img
                    src="assets/img/clients/client-1.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    src="assets/img/clients/client-2.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    src="assets/img/clients/client-3.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    src="assets/img/clients/client-4.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    src="assets/img/clients/client-5.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    src="assets/img/clients/client-6.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    src="assets/img/clients/client-7.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    src="assets/img/clients/client-8.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </section>
        <section id="features" className="features">
          <div data-aos="fade-up">
            <div className="row">
              <div
                className="image col-lg-6"
                style={{ backgroundImage: "url('assets/img/time.png')" }}
                data-aos="fade-right"
              ></div>
              <div
                className="col-lg-6"
                data-aos="fade-left"
                style={{ marginTop: "5%" }}
                data-aos-delay="100"
              >
                <div
                  className=" mt-10 mt-lg-0 text-center"
                  data-aos="zoom-in"
                  data-aos-delay="150"
                >
                  <h1
                    style={{
                      fontWeight: 700,
                    }}
                  >
                    GASTA SUE TEMPO COM AQUILO QUE IMORTA
                  </h1>

                  <h4 style={{ fontWeight: 600, marginTop: "10%" }}>
                    Ao terceirizar sua operação de marketing, você diminui seus
                    custos e aumenta o seu retorno financeiro
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="services">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Nossos serviços</h2>
              <p>Serviços Diversificadas</p>
            </div>

            <div className="row">
              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div
                  className="icon-box"
                  style={{
                    backgroundImage:
                      "url('assets/img/portfolio_ls_website_designs.png')",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="icon">
                    <i className="bx bxl-dribbble"></i>
                  </div>
                  <div>
                    <h4>
                      <a href="" style={{ color: "white" }}>
                        Criação de sites e <br /> E-commerces
                      </a>
                    </h4>
                    <p style={{ color: "white" }}>
                      Voluptatum deleniti atque corrupti quos dolores et quas
                      molestias excepturi
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div
                  className="icon-box"
                  style={{
                    backgroundImage: "url('assets/img/sales.png')",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="icon">
                    <i className="bx bx-file"></i>
                  </div>
                  <h4>
                    <a href="" style={{ color: "white" }}>
                      Prospecção ativa de vendas
                    </a>
                  </h4>
                  <p style={{ color: "white" }}>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore
                  </p>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <div
                  className="icon-box"
                  style={{
                    backgroundImage: "url('assets/img/smedia.png')",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="icon">
                    <i className="bx bx-tachometer"></i>
                  </div>
                  <h4>
                    <a href="" style={{ color: "white" }}>
                      Gestão e planejamento de redes socias
                    </a>
                  </h4>
                  <p style={{ color: "white" }}>
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia
                  </p>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div
                  className="icon-box"
                  style={{
                    backgroundImage: "url('assets/img/palastra.png')",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="icon">
                    <i className="bx bx-world"></i>
                  </div>
                  <h4>
                    <a style={{ color: "white" }} href="">
                      Capacitação professional
                    </a>
                  </h4>
                  <p style={{ color: "white" }}>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis
                  </p>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div
                  className="icon-box"
                  style={{
                    backgroundImage: "url('assets/img/marketing.png')",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="icon">
                    <i className="bx bx-slideshow"></i>
                  </div>
                  <h4>
                    <a style={{ color: "white" }} href="">
                      Marketing digital e design diversos
                    </a>
                  </h4>
                  <p style={{ color: "white" }}>
                    Quis consequatur saepe eligendi voluptatem consequatur dolor
                    consequuntur
                  </p>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <div
                  className="icon-box"
                  style={{
                    backgroundImage: "url('assets/img/logoo.png')",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="icon">
                    <i className="bx bx-arch"></i>
                  </div>
                  <h4>
                    <a style={{ color: "white" }} href="">
                      Criação de marcas e branding
                    </a>
                  </h4>
                  <p style={{ color: "white" }}>
                    Modi nostrum vel laborum. Porro fugit error sit minus
                    sapiente sit aspernatur
                  </p>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <div
                  className="icon-box"
                  style={{
                    backgroundImage: "url('assets/img/iopo.png')",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="icon">
                    <i className="bx bx-arch"></i>
                  </div>
                  <h4>
                    <a style={{ color: "white" }} href="">
                      Planejamento editorial e campanhas
                    </a>
                  </h4>
                  <p style={{ color: "white" }}>
                    Modi nostrum vel laborum. Porro fugit error sit minus
                    sapiente sit aspernatur
                  </p>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <div
                  className="icon-box"
                  style={{
                    backgroundImage: "url('assets/img/app.png')",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="icon">
                    <i className="bx bx-arch"></i>
                  </div>
                  <h4>
                    <a style={{ color: "white" }} href="">
                      Criacão de aplicativo
                    </a>
                  </h4>
                  <p style={{ color: "white" }}>
                    Modi nostrum vel laborum. Porro fugit error sit minus
                    sapiente sit aspernatur
                  </p>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <div
                  className="icon-box"
                  style={{
                    backgroundImage: "url('assets/img/likes.png')",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="icon">
                    <i className="bx bx-arch"></i>
                  </div>
                  <h4>
                    <a style={{ color: "white" }} href="">
                      Link patrocinados (anuncios)
                    </a>
                  </h4>
                  <p></p>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <div
                  className="icon-box"
                  style={{
                    backgroundImage: "url('assets/img/web.png')",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="icon">
                    <i className="bx bx-arch"></i>
                  </div>
                  <h4>
                    <a style={{ color: "white" }} href="">
                      Gestão de site
                    </a>
                  </h4>
                  <p style={{ color: "white" }}>
                    Modi nostrum vel laborum. Porro fugit error sit minus
                    sapiente sit aspernatur
                  </p>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <div
                  className="icon-box"
                  style={{
                    backgroundImage: "url('assets/img/gest.png')",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="icon">
                    <i className="bx bx-arch"></i>
                  </div>
                  <h4>
                    <a style={{ color: "white" }} href="">
                      Gestão de comercial
                    </a>
                  </h4>
                  <p style={{ color: "white" }}>
                    Modi nostrum vel laborum. Porro fugit error sit minus
                    sapiente sit aspernatur
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="cta" className="cta">
          <div className="container" data-aos="zoom-in">
            <div className="text-center">
              <h3>Podemos ajudar o seu negócio!</h3>
              <p>Somos especialistas em marketing e vendas!</p>
              <a className="cta-btn" href="#">
                Entre em Contacto
              </a>
            </div>
          </div>
        </section>

        <section id="counts" className="counts">
          <div className="container" data-aos="fade-up">
            <div className="row no-gutters">
              <div
                className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start"
                data-aos="fade-right"
                data-aos-delay="100"
              ></div>
              <div
                className="col-xl-7 ps-0 ps-lg-5 pe-lg-1 d-flex align-items-stretch"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                <div className="content d-flex flex-column justify-content-center">
                  <div className="row">
                    <div
                      className="col-md-12 text-center"
                      style={{ marginTop: "-20px" }}
                    >
                      {" "}
                      <h3>Encontre qualquer solução</h3>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 d-md-flex align-items-md-stretch">
                      <div className="count-box">
                        <span className="purecounter text-center">
                          Problema
                        </span>
                        <div className="row">
                          <div className="col-md-6">
                            <p>
                              *Dificuldade de criar{" "}
                              <strong>planos de marketing e vendas</strong>, ou
                              estruturar uma equipe dedicada a isso.
                            </p>
                          </div>

                          <div className="col-md-6">
                            <p>
                              *Falta de alinhamento entre as vendas e marketing.
                            </p>
                          </div>

                          <div className="col-md-6">
                            <p>*Canais de comunicação errados</p>
                          </div>

                          <div className="col-md-6">
                            <p>*Não elaborar bem a jornada de compra</p>
                          </div>

                          <div className="col-md-6">
                            <p>* Falta de definição de processos</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row no-gutters">
              <div
                className="col-md-12 ps-0 ps-lg-5 pe-lg-1 d-flex align-items-stretch"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                <div className="content d-flex flex-column justify-content-center">
                  <div className="row">
                    <div className="col-md-12 d-md-flex align-items-md-stretch">
                      <div className="count-box">
                        <span className="purecounter text-center mb-4">
                          Solução
                        </span>
                        <div className="row">
                          <div className="col-md-6">
                            <p>*Matriz FOFA</p>
                          </div>

                          <div className="col-md-6">
                            <p>*Criar iniciativa de BENCHMARKING</p>
                          </div>

                          <div className="col-md-6">
                            <p>* Marketing de conteúdo</p>
                          </div>

                          <div className="col-md-6">
                            <p>*Não elaborar bem a jornada de compra</p>
                          </div>

                          <div className="col-md-6">
                            <p>
                              *LEADS QUALIFICADOS pelo marketing e a conversão
                              desses pela equipe de vendas
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="testimonials" className="testimonials">
          <div className="container" data-aos="zoom-in">
            <div
              className="testimonials-slider swiper"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img
                      src="assets/img/testimonials/testimonials-1.jpg"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Saul Goodman</h3>
                    <h4>Cliente</h4>
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                      Proin iaculis purus consequat sem cure digni ssim donec
                      porttitora entum suscipit rhoncus. Accusantium quam,
                      ultricies eget id, aliquam eget nibh et. Maecen aliquam,
                      risus at semper.
                      <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img
                      src="assets/img/testimonials/testimonials-2.jpg"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Sara Wilsson</h3>
                    <h4>Cliente</h4>
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                      Export tempor illum tamen malis malis eram quae irure esse
                      labore quem cillum quid cillum eram malis quorum velit
                      fore eram velit sunt aliqua noster fugiat irure amet legam
                      anim culpa.
                      <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img
                      src="assets/img/testimonials/testimonials-3.jpg"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Jena Karlis</h3>
                    <h4>Cliente</h4>
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                      Enim nisi quem export duis labore cillum quae magna enim
                      sint quorum nulla quem veniam duis minim tempor labore
                      quem eram duis noster aute amet eram fore quis sint minim.
                      <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img
                      src="assets/img/testimonials/testimonials-4.jpg"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Matt Brandon</h3>
                    <h4>Cliente</h4>
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                      Fugiat enim eram quae cillum dolore dolor amet nulla culpa
                      multos export minim fugiat minim velit minim dolor enim
                      duis veniam ipsum anim magna sunt elit fore quem dolore
                      labore illum veniam.
                      <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img
                      src="assets/img/testimonials/testimonials-5.jpg"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>John Larson</h3>
                    <h4>Cliente</h4>
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                      Quis quorum aliqua sint quem legam fore sunt eram irure
                      aliqua veniam tempor noster veniam enim culpa labore duis
                      sunt culpa nulla illum cillum fugiat legam esse veniam
                      culpa fore nisi cillum quid.
                      <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </section>
        <section id="team" className="team">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Equipe</h2>
              <p>Nossa Equipa</p>
            </div>

            <div className="row">
              <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div className="member" data-aos="fade-up" data-aos-delay="100">
                  <div className="member-img">
                    <img
                      src="assets/img/photo1669937813.jpeg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="social">
                      <a href="">
                        <i className="bi bi-twitter"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-facebook"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-instagram"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>CEO</h4>
                    <span>Wilson Pina</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div className="member" data-aos="fade-up" data-aos-delay="200">
                  <div className="member-img">
                    <img
                      src="assets/img/hernany.png"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="social">
                      <a href="">
                        <i className="bi bi-twitter"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-facebook"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-instagram"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>Hernany Joel</h4>
                    <span>Dir. Marketing</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div className="member" data-aos="fade-up" data-aos-delay="300">
                  <div className="member-img">
                    <img
                      src="assets/img/team/team-3.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="social">
                      <a href="">
                        <i className="bi bi-twitter"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-facebook"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-instagram"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>William Anderson</h4>
                    <span>CTO</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div className="member" data-aos="fade-up" data-aos-delay="400">
                  <div className="member-img">
                    <img
                      src="assets/img/team/team-4.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="social">
                      <a href="">
                        <i className="bi bi-twitter"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-facebook"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-instagram"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>Amanda Jepson</h4>
                    <span>Accountant</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="contact">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Contacto</h2>
              <p>Entre em Contacto</p>
            </div>

            <div>
              <iframe
                style={{ border: 0, width: "100%", height: "270px" }}
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                frameborder="0"
                allowFullScreen
              ></iframe>
            </div>

            <div className="row mt-5">
              <div className="col-lg-4">
                <div className="info">
                  <div className="address">
                    <i className="bi bi-geo-alt"></i>
                    <h4>Localização:</h4>
                    <p>Patriota, edificio Mand-zoew </p>
                  </div>

                  <div className="email">
                    <i className="bi bi-envelope"></i>
                    <h4>Email:</h4>
                    <p>wpt120@gmail.com</p>
                  </div>

                  <div className="phone">
                    <i className="bi bi-phone"></i>
                    <h4>Telefone:</h4>
                    <p>+244 944 517 735</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-8 mt-5 mt-lg-0">
                <form
                  action="forms/contact.php"
                  method="post"
                  role="form"
                  className="php-email-form"
                >
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        placeholder="Seu Nome"
                        required
                      />
                    </div>
                    <div className="col-md-6 form-group mt-3 mt-md-0">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Seu Email"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div className="form-group mt-3">
                    <textarea
                      className="form-control"
                      name="message"
                      rows="5"
                      placeholder="Mensagem"
                      required
                    ></textarea>
                  </div>
                  <div className="my-3">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div>
                  </div>
                  <div className="text-center">
                    <button type="submit">Enviar</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
