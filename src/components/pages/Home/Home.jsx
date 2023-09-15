
import "./Home.css"
import { Row, Col, Button, Card, CardImg } from "react-bootstrap";
import logo from "../../../assets/Screenshot_149-removebg-preview.png"
import horadelte from '../../../assets/Té negro para todos los días.jpg'
import empresa from "../../../assets/empresa.jpg"
import juice from "../../../assets/Springtime_lemonade_flavors-removebg-preview.png"
import greentea from "../../../assets/Diseño sin título (8).png"
import macchiato from "../../../assets/Diseño sin título (9).png"
import capuccino from "../../../assets/Diseño sin título (10).png"
import hotchocolate from "../../../assets/Diseño sin título (11).png"


function Home() {


  return (

    <div>
      <div className="principal">
        <Row className="align-item-center">
          <Col className="text-center">
            <img className="logoedit img-fluid" src={logo} alt="logo" /><h1 className="text-center">WakeUp! Coffee</h1>
            <Button className="chevron">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" /></svg>
            </Button>
          </Col>
        </Row>
      </div>
      <br />
      <div className="empresa d-flex align-items-center">
        <Row>
          <Col md={7} sm={12} xs={12}>
            <img className="imgempresa img-fluid" src={empresa} alt="empresa" />
          </Col>
          <Col md={5} sm={12} xs={12} className="d-flex align-items-center" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div className="text-center">
              <h3>Nuestra historia</h3>
              <h6>
                <br />
                <br />
                En el año 1980, nacía oficialmente nuestra empresa de café. Comenzamos con un modesto local, donde cada taza de café se preparaba con cuidado y amor. Nuestra misión era simple pero poderosa: servir la mejor taza de café que nuestros clientes hubieran probado jamás.
                <br />
                Hoy, WakeUp!  se enorgullece de seguir sirviendo tazas de café excepcionales. Nuestro legado continúa, y cada día es una oportunidad para compartir la pasión por el café con más personas, inspirando momentos especiales y creando recuerdos que perdurarán.
              </h6>
            </div>

          </Col>
        </Row>
      </div>
      <br />
      <br />
      <div className="juiceserie">
        <Row>
          <Col md={6} className=" txtjuice d-flex justify-content-center align-items-center">
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <h3>Juice series</h3>
              <p className="parrafo ">Try our line of limited edition juices</p>
            </div>

          </Col>
          <Col md={6} className=" d-flex justify-content-center align-items-center">
            <img className="juice img-fluid" src={juice} alt="seriejugos" />
          </Col>
        </Row>
      </div>
      <div className="contenedorte">
      <Row className="horadelte">
        <Col md={8}>
          <h2 className="t">It’s time for Tea.</h2>
          <h5 className="txtht">Todo el mundo tiene una taza de buen té en el corazón.
            Una tarde tranquila, la temperatura del sol brillando y la suave brisa,
            la risa de un amante y la dulzura permaneciendo en tu boca.
            No es fácil recordar una taza de té, pero la sensación y el regusto
            del primer sorbo del té de WakeUp! permanecerán durante mucho tiempo. La satisfacción que se esparce suavemente en tu corazón junto con las bebidas en WakeUp!.</h5>
        </Col>
        <Col md={4} xs={12}>
          <img className="techai img-fluid  hidden-xs hidden-sm justify-content-center" src={horadelte} alt="te chai" />
        </Col>
      </Row>
    </div>
      <br />
      <div className="menu-color">
        <Row>
          <Col>
            <h2 className="text-center">Menu</h2>
          </Col>
        </Row>
        <br />
        
    <div className="container mt-5">
      <Row>
        <Col md={3}>
      <div className="card">
        <img src={greentea} className="card-img-top" alt="Imagen del producto" />
          <div className="card-body">
          <h5 className="card-title">Green Tea</h5>
          <p className="card-text">Descripción breve del producto. Puede incluir información relevante.</p>
          <p className="card-price">$9.99</p>
          <a href="#" className="btn btn-primary">+ Add</a>
        </div>
      </div>
      </Col>
      <Col md={3}>
      <div className="card">
        <img src={macchiato} className="card-img-top" alt="Imagen del producto" />
          <div className="card-body">
          <h5 className="card-title">Macchiato</h5>
          <p className="card-text">Descripción breve del producto. Puede incluir información relevante.</p>
          <p className="card-price">$9.99</p>
          <a href="#" className="btn btn-primary">+ Add</a>
        </div>
      </div>
      </Col>
      <Col md={3}>
      <div className="card">
        <img src={capuccino} className="card-img-top" alt="Imagen del producto" />
          <div className="card-body">
          <h5 className="card-title">Capuccino</h5>
          <p className="card-text">Descripción breve del producto. Puede incluir información relevante.</p>
          <p className="card-price">$9.99</p>
          <a href="#" className="btn btn-primary">+ Add</a>
        </div>
      </div>
      </Col>
      <Col md={3}>
      <div className="card">
        <img src={hotchocolate} className="card-img-top" alt="Imagen del producto" />
          <div className="card-body">
          <h5 className="card-title">Hot chocolate</h5>
          <p className="card-text">Descripción breve del producto. Puede incluir información relevante.</p>
          <p className="card-price">$9.99</p>
          <a href="#" className="btn btn-primary">+ Add</a>
        </div>
         </div>
       </Col>
      </Row>
      <br />
      <Row>
        <Col md={3}>
      <div className="card">
        <img src={greentea} className="card-img-top" alt="Imagen del producto" />
          <div className="card-body">
          <h5 className="card-title">Green Tea</h5>
          <p className="card-text">Descripción breve del producto. Puede incluir información relevante.</p>
          <p className="card-price">$9.99</p>
          <a href="#" className="btn btn-primary">+ Add</a>
        </div>
      </div>
      </Col>
      <Col md={3}>
      <div className="card">
        <img src={macchiato} className="card-img-top" alt="Imagen del producto" />
          <div className="card-body">
          <h5 className="card-title">Macchiato</h5>
          <p className="card-text">Descripción breve del producto. Puede incluir información relevante.</p>
          <p className="card-price">$9.99</p>
          <a href="#" className="btn btn-primary">+ Add</a>
        </div>
      </div>
      </Col>
      <Col md={3}>
      <div className="card">
        <img src={capuccino} className="card-img-top" alt="Imagen del producto" />
          <div className="card-body">
          <h5 className="card-title">Capuccino</h5>
          <p className="card-text">Descripción breve del producto. Puede incluir información relevante.</p>
          <p className="card-price">$9.99</p>
          <a href="#" className="btn btn-primary">+ Add</a>
        </div>
      </div>
      </Col>
      <Col md={3}>
      <div className="card">
        <img src={hotchocolate} className="card-img-top" alt="Imagen del producto" />
          <div className="card-body">
          <h5 className="card-title">Hot chocolate</h5>
          <p className="card-text">Descripción breve del producto. Puede incluir información relevante.</p>
          <p className="card-price">$9.99</p>
          <a href="#" className="btn btn-primary">+ Add</a>
        </div>
         </div>
       </Col>
      </Row>
      <br />
    </div>
  </div>
</div>
  )
}
export default Home
