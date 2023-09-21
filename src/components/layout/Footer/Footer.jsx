import { FaXTwitter } from "react-icons/fa6";
import { FiGithub } from 'react-icons/fi';
import { FaLinkedinIn, FaFacebookF, FaGoogle, FaInstagram } from 'react-icons/fa';
import { BiHomeAlt2, BiInfoCircle } from 'react-icons/bi';
import { BsTelephone } from 'react-icons/bs';
import { AiOutlineHeart } from "react-icons/ai";
import './Footer.css';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-center text-lg-start text-black">
      <div className="container p-3 pb-0">
        <section className="">
          <div className="row">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-3 font-weight-bold">
                WakeUp!-Coffe
              </h6>
              <p>
                Experience pure coffee bliss at WakeUp! Coffee Shop, where passion meets quality in every cup. Explore our aromatic world of freshly roasted beans, served with love from the heart of the city.
              </p>
            </div>

            <hr className="w-100 clearfix d-md-none" />

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-3 font-weight-bold ">Menús</h6>
              <p>
                <Link className="text-black text-decoration-none" to="/menu">Cold Drinks</Link>
              </p>
              <p>
                <Link className="text-black text-decoration-none" to="/menu">Hot Drinks</Link>
              </p>
              <p>
                <Link className="text-black text-decoration-none" to="/menu">Bakery</Link>
              </p>
            </div>

            <hr className="w-100 clearfix d-md-none" />

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-3 font-weight-bold">
                GitHub Creators
              </h6>
              <p>
                <Link className="text-black text-decoration-none" to="https://github.com/AgusDomz"><AiOutlineHeart /> Agus Dominguez</Link>
              </p>
              <p>
                <Link className="text-black text-decoration-none" to="https://github.com/lar159"><AiOutlineHeart /> Lu Rivadeneira</Link>
              </p>
              <p>
                <Link className="text-black text-decoration-none" to="https://github.com/ianfigueroa01"><AiOutlineHeart /> Ian Figueroa</Link>
              </p>
              <p>
                <Link className="text-black text-decoration-none" to="https://github.com/Flequex"><AiOutlineHeart /> Gus Andina</Link>
              </p>
            </div>

            <hr className="w-100 clearfix d-md-none" />

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-3 font-weight-bold">Contact</h6>
              <p><BiHomeAlt2 /> Tucumán, SM 4000, ARG</p>
              <p><BiInfoCircle /> HelloWorldCompany@gmail.com</p>
              <p><BsTelephone /> +01 234 567 89</p>
            </div>
          </div>
        </section>

        <hr className="my-3" />

        <section className="p-2 pt-0">
          <div className="row d-flex align-items-center">
            <div className="col-md-7 col-lg-8 text-center text-md-start">
              <div className="p-2">
                © 2023 Copyright:
                <Link className="text-black text-decoration-none">
                  HelloWorldCompany
                </Link>
              </div>
            </div>

            <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
              <Link
                className="btn btn-outline-dark m-1 rounded-circle"
                role="button"
                to="https://www.facebook.com/"
              >
                <FaFacebookF />
              </Link>

              <Link
                className="btn btn-outline-dark m-1 rounded-circle"
                role="button"
                to="https://twitter.com/"
              >
                <FaXTwitter />
              </Link>

              <Link
                className="btn btn-outline-dark m-1 rounded-circle"
                role="button"
                to="https://www.google.com.ar/"
              >
                <FaGoogle />
              </Link>

              <Link
                className="btn btn-outline-dark m-1 rounded-circle"
                role="button"
                to="https://www.instagram.com/"
              >
                <FaInstagram />
              </Link>
              <Link
                className="btn btn-outline-dark m-1 rounded-circle"
                role="button"
                to="https://www.linkedin.com/"
              >
                <FaLinkedinIn />
              </Link>
              <Link
                className="btn btn-outline-dark m-1 rounded-circle"
                role="button"
                to="https://github.com/lar159/WakeUp-FrontEnd"
              >
                <FiGithub />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
