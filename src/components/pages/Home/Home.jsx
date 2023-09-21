import { Row, Col} from "react-bootstrap";
import { Link } from "react-scroll";
import logo from "../../../assets/Screenshot_149-removebg-preview.png";
import horadelte from "../../../assets/Té negro para todos los días.jpg";
import empresa from "../../../assets/empresa.jpg";
import juice from "../../../assets/Springtime_lemonade_flavors-removebg-preview.png";
import bakery from "../../../assets/3.png";
import hotcoffee from "../../../assets/5.png";
import coldcoffee from "../../../assets/4.png";
import { BiDownArrow } from "react-icons/bi"
import "./Home.css";

function Home() {
  return (
    <div>
      <div className="principal">
        <Row className="align-items-center">
          <Col className="text-center">
            <img className="logoedit img-fluid" src={logo} alt="logo" />
            <h1 className="text-center">WakeUp! Coffee</h1>
            <Link
              activeClass="active"
              to="section1"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              id="scrollButton"
              className="chevron p-2 rounded"

            >
              <BiDownArrow color="white"/>
            </Link>
          </Col>
        </Row>
      </div>

      <div id="section1" className="empresa">
        <Row>
          <hr />
          <Col
            md={6}
            className="d-flex justify-content-center align-items-center"
          >
            <div className="d-flex flex-column align-items-center">
              <h3 className="ourHistory ">Our history</h3>
              <h6 className="p-2">
                Behind every cup of coffee and every smile we offer, there is Link
                passionate and dedicated team working tirelessly to give you the
                best experience possible. From our talented baristas to our
                friendly service staff, we all share a common commitment: making
                your visit to WakeUp! be exceptional.
              </h6>
              <Link className="btn btn-darnger" to="/aboutUs">
                Know Us
              </Link>
                
            </div>
          </Col>
          <Col
            md={6}
            className=" d-flex justify-content-center align-items-center"
          >
            <img className="imgempresa img-fluid" src={empresa} alt="empresa" />
          </Col>

          <hr />
        </Row>
      </div>
      <div className="container mt-0 d-flex justify-content-center align-items-center">
        <Row>
          <Col className="text-center pt-5" md={6}>
            <div>
              <h2 className="mb-5">Juice series </h2>
              <h4>Try the best limited edition juices with unique tastes!</h4>
            </div>
          </Col>
          <Col md={6}>
            <img
              className="img-fluid mx-auto juice mt-0"
              src={juice}
              alt="juice"
            />
          </Col>
        </Row>
      </div>
      <div className="containertea mt-0">
        <Row>
          <Col className="text-center mx-auto p-5" md={6}>
            <h2 className="mb-5"> It`s time for Tea. </h2>
            <h5>
              Everyone has a cup of good tea in their heart. A quiet afternoon,
              the temperature of the sun shining and the gentle breeze, the
              laughter of a lover and the sweetness lingering in your mouth.
              It`s not easy to remember a cup of tea, but the feeling and
              aftertaste of the first sip of WakeUp! They will remain for a long
              time. The satisfaction that gently spreads in your heart along
              with the drinks at WakeUp!.
            </h5>
          </Col>
          <Col md={6}>
            <img
              className="img-fluid d-flex justify-content-center mx-auto tea mt-5"
              src={horadelte}
              alt="tea"
            />
          </Col>
        </Row>
      </div>
      <div className="menu-color">
        <Row>
          <Col>
            <h2 className="text-center p-5">Products</h2>
          </Col>
        </Row>
        <br />
        <div className="container mt-5">
          <Row>
            <Col md={4}>
              <div className="card">
                <img
                  src={hotcoffee}
                  className="card-img-top"
                  alt="Imagen del producto"
                />
                <div className="card-body">
                  <h5 className="card-title text-center">Hot Drinks</h5>
                  <p className="card-text">
                    Try the best coffees with the same premium quality as always
                  </p>
                  <Link
                    to="/menu"
                    className="btn btn-primary d-flex justify-content-center "
                  >
                    See menu
                  </Link>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="card">
                <img
                  src={coldcoffee}
                  className="card-img-top"
                  alt="Imagen del producto"
                />
                <div className="card-body">
                  <h5 className="card-title text-center">Cold Drinks</h5>
                  <p className="card-text">
                    The Best fresh drinks juices and tea. Limited edition juices
                  </p>
                  <Link
                    to="/menu"
                    className="btn btn-primary d-flex justify-content-center"
                  >
                    See menu
                  </Link>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="card">
                <img
                  src={bakery}
                  className="card-img-top"
                  alt="Imagen del producto"
                />
                <div className="card-body">
                  <h5 className="card-title text-center">Bakery</h5>
                  <p className="card-text">
                    Fresh snacks of the day to accompany your drink... so delicious
                  </p>
                  <Link
                    to="/menu"
                    className="btn btn-primary d-flex justify-content-center"
                  >
                    {" "}
                    See menu
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
          <br />
        </div>
      </div>
    </div>
  );
}
export default Home;
