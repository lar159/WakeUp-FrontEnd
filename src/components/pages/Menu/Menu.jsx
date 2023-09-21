import { useState } from "react";
import "./Menu.css";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";



const menuItems = [
  {
    category: "Cold Drinks",
    items: [
      {
        name: "Iced Latte",
        price: "$3.99",
        image:"https://dwellbymichelle.com/wp-content/uploads/2020/06/DWELL-Iced-Cold-Brew-Latte-e1592262551330.jpg",
      },
      {
        name: "Cold Brew",
        price: "$5.49",
        image:"https://www.bowlofdelicious.com/wp-content/uploads/2015/06/Milk-and-Honey-Cold-Brew-Coffee-SQUARE.jpg",
      },
      {
        name: "Iced Coffee",
        price: "$4.49",
        image:"https://www.cookingclassy.com/wp-content/uploads/2022/07/iced-coffee-05.jpg",
      },
      {
        name: "Iced Tea",
        price: "$3.99",
        image:"https://www.thedinnerbite.com/wp-content/uploads/2021/05/iced-tea-recipe-img-4.jpg",
      },
      {
        name: "Milshake",
        price: "$2.49",
        image:"https://houseofnasheats.com/wp-content/uploads/2023/01/Oreo-Milkshake-Square-1.jpg",
      },
      {
        name: "Juice",
        price: "$6.49",
        image:"https://cdn-3.expansion.mx/dims4/default/b767e1f/2147483647/strip/true/crop/732x384+0+43/resize/1200x630!/format/jpg/quality/80/?url=https%3A%2F%2Fcdn-3.expansion.mx%2F76%2Fbc%2F5ea06e1c41dab8c510b3c8370d39%2Fistock-654357990.jpg",
      },
    ],
  },
  {
    category: "Hot Drinks",
    items: [
      {
        name: "Espresso",
        price: "$2.49",
        image: "https://deultimominuto.net/wp-content/uploads/2022/11/espresso.webp",
      },
      {
        name: "Cappuccino",
        price: "$3.29",
        image:"https://exigibuencafe.com/wp-content/uploads/2017/12/exigi-5-1000x600.jpg",
      },
      {
        name: "Hot chocolate",
        price: "$5.29",
        image:"https://react-coffee-shop.vercel.app/_next/image?url=%2FdrinkImages%2Fcappuccino.jpg&w=828&q=80",
      },
      {
        name: "Macchiato",
        price: "$3.29",
        image:"https://www.notmilk.coffee/static/439fdf15b8ffe649cea39615c6da6eaa/1ca08/caramel-macchiato-2.jpg",
      },
      {
        name: "Green Tea",
        price: "$4.29",
        image:"https://i.mscwlns.co/mosaic-wellness/image/upload/f_auto,w_1000,c_limit/v1622023871/BW%20BLOG/gbvuyllkvpagcsgvj7ea.jpg",
      },
      {
        name: "Red Tea",
        price: "$3.29",
        image:"https://s2.abcstatics.com/media/gurme/2023/05/17/s/frutos-rojos1-ksv--1200x630@abc.jpg",
      },
    ],
  },
  {
    category: "Bakery",
    items: [
      {
        name: "Croissant",
        price: "$2.49",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu5oXdkdNijKa4Iyhv87Wlh7T5bRfgyuRQgw&usqp=CAU",
        
      },
      {
        name: "Muffin",
        price: "$3.29",
        image:"https://www.demoslavueltaaldia.com/sites/default/files/muffin-de-chocolate-y-cafe.jpg.jpg",
        

        
      },
      {
        name: "Cupcake",
        price: "$5.29",
        image:"https://www.recipetineats.com/wp-content/uploads/2020/09/Vanilla-Cupcakes-with-Vanilla-Swiss-Meringue-SQ.jpg",
      },
      {
        name: "Lemon Pie",
        price: "$3.29",
        image:"https://www.elfondodelacazuela.com.ar/wp-content/uploads/2022/06/lemon-pie.jpg",
      },
      {
        name: "Pancakes",
        price: "$2.29",
        image:"https://lilluna.com/wp-content/uploads/2022/09/easy-pancakes3-resize-10.jpg",
      },
      {
        name: "Brownie",
        price: "$5.29",
        image:"https://www.pequerecetas.com/wp-content/uploads/2018/09/brownie-de-chocolate-receta.jpg",
      },
    ],
  },
];

function Menu() {
  const [activeCategory, setActiveCategory] = useState("Cold Drinks");

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };
  const [cart, setCart] = useState([]);
  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const filteredItems = menuItems.find(
    (category) => category.category === activeCategory
  )?.items;

  const handleOpenCart = () => {
    if (cart.length === 0) {
      alert("El carrito está vacío. Agregue productos para continuar.");
    } else {
      history.push("/product/orders");
    }
  };


  return (
    <div className="App colormenu">
      <header className="App-header">
        <h1 className="text-center mb-4 textmenu">Welcome Menu WakeUp!</h1>
        <Row>
          <Col>
            <div className=" d-flex justify-content-center ">
              <ul className="d-flex mb-3 text-center">
                <Row>
                {menuItems.map((category, index) => (
                  <li key={index} >
                    <Button
                      href="#"
                      className={`nav-link btn btn-light d-flex p-2 btncuston ${activeCategory === category.category ? "active" : ""
                        }`}
                      onClick={() => handleCategoryClick(category.category)}
                    >
                      {category.category}
                    </Button>
                  </li>
                ))}
                </Row>
              </ul>
            </div>
          </Col>
        </Row>
      </header>
      <main className="main_">
        <section className="editsection">
          <Container>
            <div className="card mb-0">
              <Card className="tarjeta p-5 mb-0 mycard">
                <h2>{activeCategory}</h2>
                <ul className="menu-list p-3">
                  {filteredItems &&
                    filteredItems.map((item, index) => (
                      <li key={index} className="mb-4">
                        <div className="item-details p-0 d-flex d-md-flex flex-md-row flex-column align-items-md-center">
                          <div className="item-imagen">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="img-fluid"
                            />
                          </div>
                          <div className="item-descripcion flex-grow-1 p-3">
                            <h3>{item.name}</h3>
                            <div className="item-price">
                              <p>{item.price}</p>
                            </div>
                          </div>
                          <div className="item_op">
                            <select
                              name="option"
                              id=""
                              className="select mt-2 m-4 "
                            >
                              <option value="">Select an option</option>
                              <option value="option">1</option>
                              <option value="option">2</option>
                              <option value="option">3</option>
                              <option value="option">4</option>
                              <option value="option">5</option>
                            </select>

                            <Button
                              type="submit"
                              className="butonorden"
                              onClick={() => handleAddToCart(item)}
                            >
                              {" "}
                              + add{" "}
                            </Button>
                          </div>
                        </div>
                      </li>
                    ))}
                </ul>
              </Card>
            </div>
          </Container>
          <Link >
            <div className="boton-carrito" onClick={handleOpenCart}>
              <FaShoppingCart size={30} /> 
              <span className="contador">{cart.length}</span>
            </div>
          </Link>
        </section>
      </main>
    </div>
  );
}

export default Menu;