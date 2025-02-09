import React from "react";
import "./LandingPage.css";

const LandingPage = () => {
  const product = {
    name: "Lee Jeno",
    role: "Website Developer",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium.",
    mainImage: "https://i.pinimg.com/474x/21/a8/fc/21a8fc2357a94a87f25275ba58cb1144.jpg",
  };

  const services = [
    {
      title: "UI/UX",
      description: "Design user interfaces that are intuitive and visually appealing.",
      image: "https://i.pinimg.com/474x/ba/84/67/ba846770bac27fd586ee8ac38afa4aae.jpg",
    },
    {
      title: "Web Design",
      description: "Create responsive and modern website designs.",
      image: "https://i.pinimg.com/474x/e0/2c/55/e02c5543d53fa8c834e369d4f7ce7bfe.jpg",
    },
    {
      title: "App Design",
      description: "Develop mobile app interfaces with seamless user experiences.",
      image: "https://i.pinimg.com/474x/40/00/c2/4000c2a50b7c8dfe2f294d0269d1c421.jpg",
    },
    {
      title: "Graphic Design",
      description: "Design graphics for branding and marketing.",
      image: "https://i.pinimg.com/736x/78/eb/e7/78ebe72637ed9f9dbe8f46a2381fdabc.jpg",
    },
  ];

  const projects = [
    { title: "AirCalling Landing Page Design", category: "Web Design", image: "https://i.pinimg.com/736x/24/86/5e/24865efd8e9c3d0ebb187298d835149e.jpg" },
    { title: "Business Landing Page Design", category: "Web Design", image: "https://i.pinimg.com/474x/53/e8/0a/53e80ae6b47e9b5ac7f97dcb5409b372.jpg" },
    { title: "Ecom Web Page Design", category: "Web Design", image: "https://i.pinimg.com/474x/3c/f9/46/3cf946c677515900835fb52dcc9bc30d.jpg" },
  ];

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css"
      />

      <div className="container d-flex flex-column">
        <header className="d-flex justify-content-between align-items-center py-3">
        <div className="logo">FAWZIUIUX</div>
          <nav className="d-flex align-items-center gap-4">
            <a href="#" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About Me</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#testimonials" className="nav-link">Testimonials</a>
            <a href="#contact" className="nav-link">Contact</a>
            <button className="btn btn-warning btn-download">Download CV</button>
          </nav>
        </header>

        <div className="row border border-3 border-warning rounded-4 p-4 align-items-center">
          <div className="col-md-6 text-center">
            <img
              src={product.mainImage}
              alt="Profile"
              className="rounded-circle border border-3 border-warning profile-image"
            />
            <div className="footer-icons">
              <a href="#" className="footer-icon">
               <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="footer-icon">
               <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="footer-icon">
               <i className="bi bi-instagram"></i>
             </a>
             <a href="#" className="footer-icon">
              <i className="bi bi-linkedin"></i>
             </a>
           </div>

          </div>

          <div className="col-md-6 text-start">
            <h1 className="text-muted">Hi I am</h1>
            <h2 className="text-warning fw-bold">{product.name}</h2>
            <h3 className="fw-bold">{product.role}</h3>
            <p className="text-muted fs-5">{product.description}</p>
            <button className="btn btn-warning px-3 py-2 fw-bold">Hire Me</button>
          </div>
        </div>

        <section id="services" className="my-5">
          <h2 className="text-center fw-bold">Services</h2>
          <p className="text-center text-muted">Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium.</p>
          <div className="row">
            {services.map((service, index) => (
              <div key={index} className="col-md-3 text-center p-3">
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-image mb-3"
                />
                <h4 className="fw-bold mt-2">{service.title}</h4>
                <p className="text-muted">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="my-5">
          <h2 className="text-center fw-bold">My Projects</h2>
          <p className="text-center text-muted">Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium.</p>
          <div className="row">
          <div className="d-flex justify-content-center gap-3 my-3">
  <button className="btn btn-warning">All</button>
  <button className="btn btn-warning">UI/UX</button>
  <button className="btn btn-warning">Web Design</button>
  <button className="btn btn-warning">App Design</button>
  <button className="btn btn-warning">Graphic Design</button>
</div>
            {projects.map((project, index) => (
              <div key={index} className="col-md-4 text-center p-3">
                <img src={project.image} alt={project.title} className="img-fluid rounded" />
                <h5 className="fw-bold mt-2">{project.title}</h5>
                <p className="text-muted">{project.category}</p>
                <button className="btn btn-warning">Detail</button>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="my-5 text-center">
          <h2 className="fw-bold">Lets Design Together</h2>
          <p className="text-muted">Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium.</p>
          <form className="d-flex justify-content-center gap-3">
            <input type="email" placeholder="Enter your email" className="form-control w-50" />
            <button className="btn btn-warning">Contact Me</button>
          </form>
        </section>

        <div className="text-center py-4">
  <div className="fw-bold fs-4 text-muted">FAWZIUIUX</div>
  
  <nav className="d-flex justify-content-center gap-4 mt-2">
    <a href="#" className="text-dark text-decoration-none">Home</a>
    <a href="#about" className="text-dark text-decoration-none">About Me</a>
    <a href="#services" className="text-dark text-decoration-none">Services</a>
    <a href="#projects" className="text-dark text-decoration-none">Projects</a>
    <a href="#testimonials" className="text-dark text-decoration-none">Testimonials</a>
    <a href="#contact" className="text-dark text-decoration-none">Contact</a>
  </nav>

  <div className="d-flex justify-content-center gap-3 mt-3">
    <a href="#" className="footer-icon">
      <i className="bi bi-facebook"></i>
    </a>
    <a href="#" className="footer-icon">
      <i className="bi bi-twitter"></i>
    </a>
    <a href="#" className="footer-icon">
      <i className="bi bi-instagram"></i>
    </a>
    <a href="#" className="footer-icon">
      <i className="bi bi-linkedin"></i>
    </a>
  </div>
</div>


        <footer className="text-center mt-3">
          <p>&copy; 2023 FAWZIUIUX. All Rights Reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default LandingPage;
