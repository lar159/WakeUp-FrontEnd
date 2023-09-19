import React from 'react';
import './contact.css';

function Contact() {
  return (
    <div id="contact">
      <section className="bg-gradient pb-5 pt-3 pt-lg-5 mb-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-3 mb-lg-0">
              <img src="/Imagenes/cafe.jpg" className="img-fluid" alt="" />
            </div>
            <div className="col-lg-6">
              <h1 className="display-3 text-center">Where are we</h1>
              <br />
              <p lang="la" className="lead">We are in San Miguel de Tucumán, Tucumán, Argentina. Located in Barrio Norte in the center of the city.</p>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <h2 className="text-center mb-4">Contact Form</h2>
        <form>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form4Example1">Name</label>
            <input type="text" id="form4Example1" className="form-control" rows="3" minLength="4" required maxLength="50" />
          </div>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form4Example2">Email</label>
            <input type="email" id="form4Example2" className="form-control" placeholder="example@mail.com" pattern="@" required minLength="8" maxLength="30" />
          </div>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form4Example3">Write your query here:</label>
            <textarea className="form-control bloquear" id="form4Example3" rows="4" minLength="4" required maxLength="150"></textarea>
          </div>
          <div className="form-check d-flex justify-content-center mb-3">
            <input className="form-check-input me-2" type="checkbox" value="" id="form4Example4" checked />
            <label className="form-check-label" htmlFor="form4Example4">Send me a copy of this message.</label>
          </div>
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-danger btn-block mb-4 ">Send</button>
          </div>
        </form>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
    </div>
  );
}

export default Contact;