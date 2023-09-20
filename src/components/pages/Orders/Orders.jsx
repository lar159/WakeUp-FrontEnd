import { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import "./Orders.css";
import { Link } from "react-router-dom";
import zorro from "../../../assets/Screenshot_158-removebg-preview.png";

const Orders = () => {
  // Estado del carrito
  const [cart, setCart] = useState([]);
  const [discount, setDiscount] = useState(""); // Estado para el cupón de descuento

  // Función para agregar un producto al carrito
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Función para eliminar un producto del carrito
  const removeFromCart = (product) => {
    const updatedCart = cart.filter((item) => item !== product);
    setCart(updatedCart);
  };

  // Función para aplicar el cupón de descuento
  const applyDiscount = () => {
    // Aquí puedes agregar la lógica para aplicar el descuento
    // Puedes verificar el valor de 'discount' y calcular el descuento en función de eso
    // Luego actualiza el precio total en función del descuento
  };

  // Función para realizar el pedido
  const placeOrder = () => {
    // Aquí puedes realizar la lógica para procesar el pedido
    // Esto podría incluir enviar los productos del carrito al servidor o realizar otras acciones necesarias
  };

  return (
    <div>
      <Row>
        <Col md={12} className="text-center">
          <br />
          <h2> Orden</h2>
        </Col>
      </Row>
      <div className="pedidos">
        <Row>
          <Col md={4}>
            <img src={zorro} alt="logo" className="img-fluid" />
          </Col>
          <Col md={8} className="ordersfondo shadow-lg text-rigth ">
            <br />
            <ul>
              <h4>Coffee latte</h4>
              <Button
                variant="primary"
                onClick={() => addToCart("Coffee latte")}
              >
                Agregar al carrito
              </Button>
            </ul>
            <ul>
              <h4>Capuccino</h4>
              <Button
                variant="primary"
                onClick={() => addToCart("Capuccino")}
              >
                Agregar al carrito
              </Button>
            </ul>
            <ul>
              <h4>Juice</h4>
              <Button variant="primary" onClick={() => addToCart("Juice")}>
                Agregar al carrito
              </Button>
            </ul>
            <br />
            <h5>Total: {cart.length} items</h5>
            <p>Código de descuento:</p>
            <input
              type="text"
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
            />
            <Button variant="info" onClick={applyDiscount}>
              Aplicar Descuento
            </Button>
          </Col>
        </Row>
        <Row>
          <Col className="text-center d-flex flex-column align-items-center">
            <br />
            <Button className="botonhacerpedido" onClick={placeOrder}>
              Hacer pedido
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-cup-hot"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M.5 6a.5.5 0 0 0-.488.608l1.652 7.434A2.5 2.5 0 0 0 4.104 16h5.792a2.5 2.5 0 0 0 2.44-1.958l.131-.59a3 3 0 0 0 1.3-5.854l.221-.99A.5.5 0 0 0 13.5 6H.5ZM13 12.5a2.01 2.01 0 0 1-.316-.025l.867-3.898A2.001 2.001 0 0 1 13 12.5ZM2.64 13.825 1.123 7h11.754l-1.517 6.825A1.5 1.5 0 0 1 9.896 15H4.104a1.5 1.5 0 0 1-1.464-1.175Z"
                />
                <path
                  d="m4.4.8-.003.004-.014.019a4.167 4.167 0 0 0-.204.31 2.327 2.327 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.31 3.31 0 0 1-.202.388 5.444 5.444 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 3.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103v.004a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 3.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 3 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 4.4.8Zm3 0-.003.004-.014.019a4.167 4.167 0 0 0-.204.31 2.327 2.327 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.31 3.31 0 0 1-.202.388 5.444 5.444 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 6.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c-.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 6.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 6 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 7.4.8Zm3 0-.003.004-.014.019a4.077 4.077 0 0 0-.204.31 2.337 2.337 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.198 3.198 0 0 1-.202.388 5.385 5.385 0 0 1-.252.382l-.019.025-.005.008-.002.002A.5.5 0 0 1 9.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c-.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 9.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 9 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 10.4.8Z"
                />
              </svg>
            </Button>
            <Link to="/home">Back to Home</Link>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Orders;
