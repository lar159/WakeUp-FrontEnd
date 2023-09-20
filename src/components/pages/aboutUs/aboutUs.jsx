import React from "react";
import cafe from "../../../assets/cafeteria.jpg"
const aboutUs = () => {
  return (
    <>
      <section className="bg-gradient pb-5 pt-3 pt-lg-5 mb-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-3 mb-lg-0">
              <img src={cafe} className="img-fluid" alt="" />
            </div>
            <div className="col-lg-6">
              <h1 className="display-3 text-center">About Us</h1>
              <br />
              <p lang="la" className="lead">
                Welcome to our streaming website! We are the "HelloWorld" team. In this section we want to tell you about our history and motivation when creating this website.
              </p>
            </div>
          </div>
        </div>
      </section>

  <div className="container">
    <section className="mb-5">
      <h2 className="text-center mb-4">Our History</h2>
      <p lang="es">
        We are a group of colleagues in RollingCode who decided to make a streaming page about a <b>Coffee Shop</b>, where its main objective is to be able to have at hand the chronology of how to place your orders from the web. We are very motivated with this project and we hope you like it!.
      </p>
    </section>

    <section className="mb-5">
      <h2 className="text-center mb-5">Members</h2>
      <div className="row row-cols-1 row-cols-lg-2 gy-3 gy-md-4 g-lg-5">
        <div className="col">
          <div className="row align-items-center">
            <div className="col-sm-4 mb-3 mb-sm-0">
              <img src="/Imagenes/iconocafeteria.png" className="img-fluid" alt="Bruja Escarlata" />
            </div>
            <div className="col-sm-8">
              <h3>Agustin Dominguez</h3>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="row align-items-center">
            <div className="col-sm-4 mb-3 mb-sm-0">
              <img src="/Imagenes/iconopasteleria.png" className="img-fluid" alt="BlackWidow" />
            </div>
            <div className="col-sm-8">
              <h3>Lucia Rivadeneira</h3>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="row align-items-center">
            <div className="col-sm-4 mb-3 mb-sm-0">
              <img src="/Imagenes/iconopan.png" alt="Hombre Araña" className="img-fluid" />
            </div>
            <div className="col-sm-8">
              <h3>Ian Figueroa</h3>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="row align-items-center">
            <div className="col-sm-4 mb-3 mb-sm-0">
              <img src="/Imagenes/iconofactureria.png" alt="Loki" className="img-fluid" />
            </div>
            <div className="col-sm-8">
              <h3>Gustavo Andina</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
    <hr />
  </div>
</>
);
};

export default aboutUs;