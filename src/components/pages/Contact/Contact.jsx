import "./Contact.css";
import cup from "../../../assets/cup-coffee.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";

function Contact() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  return (
    <div id="contact">
      <section className="bg-gradient pb-5 pt-3 pt-lg-5 mb-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-3 mb-lg-0">
              <img src={cup} className="img-fluid" alt="" />
            </div>
            <div className="col-lg-6">
              <h1 className="display-3 text-center">Where are we</h1>
              <br />
              <p lang="la" className="lead">
                We are in San Miguel de Tucumán, Tucumán, Argentina. Located in
                Barrio Norte in the center of the city.
              </p>
            </div>
          </div>
        </div>
      </section>
      <h2 className="text-center mb-4">Contact Form</h2>
      <div className="container">
        <div className="d-flex justify-content-center ">
          <div className="w-75 rounded">
            <form>
              <div className="mb-4">
                <label className="form-label" htmlFor="form4Example1">
                  Name
                </label>
                <input
                  type="text"
                  id="form4Example1"
                  className="form-control"
                  minLength="4"
                  required
                  maxLength="50"
                />
              </div>
              <div className="mb-4">
                <label className="form-label" htmlFor="form4Example2">
                  Email
                </label>
                <input
                  type="email"
                  id="form4Example2"
                  className="form-control"
                  placeholder="example@mail.com"
                  pattern="@"
                  required
                  minLength="8"
                  maxLength="30"
                />
              </div>
              <div className="mb-4">
                <label className="form-label" htmlFor="form4Example3">
                  Write your query here:
                </label>
                <textarea
                  className="form-control bloquear"
                  id="form4Example3"
                  rows="4"
                  minLength="4"
                  required
                  maxLength="150"
                ></textarea>
              </div>
              <div className="form-check mb-3">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <label className="form-check-label" htmlFor="form4Example4">
                  Send me a copy of this message.
                </label>
              </div>
              <Link to="*" className="btn btn-warning btn-block mb-4">
                Send
              </Link>
            </form>
          </div>
        </div>
      </div>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
    </div>
  );
}

export default Contact;
