import React, { useState } from "react";
import "./Menu.css";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom"

const menuItems = [
  {
    category: "Cold Drinks",
    items: [
      {
        name: "Iced Latte",
        price: "$3.99",
        image:
          "https://png.pngtree.com/png-clipart/20190515/original/pngtree-tea-mixed-with-whipped-cream-ice-coffee-in-a-jar-png-image_3687695.jpg",
      },
      {
        name: "Cold Brew",
        price: "$5.49",
        image:
          "https://png.pngtree.com/png-clipart/20201209/original/pngtree-cold-brew-coffee-png-image_5639618.jpg",
      },
      {
        name: "Iced Coffee",
        price: "$4.49",
        image:
          "https://static.vecteezy.com/system/resources/previews/011/048/029/non_2x/iced-coffee-watercolor-set-free-png.png",
      },
      {
        name: "Iced Tea",
        price: "$3.99",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/NCI_iced_tea.jpg/240px-NCI_iced_tea.jpg",
      },
      {
        name: "Milshake",
        price: "$2.49",
        image:
          "https://as2.ftcdn.net/v2/jpg/05/83/27/97/1000_F_583279705_3ApajXiewkJCWg2cysoDrAJHZqAwjT1t.jpg",
      },
      {
        name: "Juice",
        price: "$6.49",
        image:
          "https://img2.freepng.es/20180329/foe/kisspng-orange-juice-cocktail-milkshake-smoothie-smoothie-5abd9b4618add2.7665233915223754941011.jpg",
      },
    ],
  },
  {
    category: "Hot Drinks",
    items: [
      {
        name: "Espresso",
        price: "$2.49",
        image: "https://p7.hiclipart.com/preview/687/80/14/5be213583b93e.jpg",
      },
      {
        name: "Cappuccino",
        price: "$3.29",
        image:
          "https://exigibuencafe.com/wp-content/uploads/2017/12/exigi-5-1000x600.jpg",
      },
      {
        name: "Hot chocolate",
        price: "$5.29",
        image:
          "https://react-coffee-shop.vercel.app/_next/image?url=%2FdrinkImages%2Fcappuccino.jpg&w=828&q=80",
      },
      {
        name: "Macchiato",
        price: "$3.29",
        image:
          "https://www.notmilk.coffee/static/439fdf15b8ffe649cea39615c6da6eaa/1ca08/caramel-macchiato-2.jpg",
      },
      {
        name: "Green Tea",
        price: "$4.29",
        image:
          "https://i.mscwlns.co/mosaic-wellness/image/upload/f_auto,w_1000,c_limit/v1622023871/BW%20BLOG/gbvuyllkvpagcsgvj7ea.jpg",
      },
      {
        name: "Red Tea",
        price: "$3.29",
        image:
          "https://s2.abcstatics.com/media/gurme/2023/05/17/s/frutos-rojos1-ksv--1200x630@abc.jpg",
      },
    ],
  },
  {
    category: "Bakery",
    items: [
      {
        name: "Croissant",
        price: "$2.49",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOIX0ca-ponu2b2E7_pVrC-l5s86FrOGnOqx5G7Sg54grM6Q_QRSOQsVvTQFZNAbarW5U&usqp=CAU",
      },
      {
        name: "Muffin",
        price: "$3.29",
        image:
          "https://w7.pngwing.com/pngs/142/508/png-transparent-muffins-with-chocolate-toppings-muffin-bakery-chocolate-cake-chocolate-brownie-banana-bread-muffin-baked-goods-food-baking-thumbnail.png",
      },
      {
        name: "Cupcake",
        price: "$5.29",
        image:
          "https://www.recipetineats.com/wp-content/uploads/2020/09/Vanilla-Cupcakes-with-Vanilla-Swiss-Meringue-SQ.jpg",
      },
      {
        name: "Lemon Pie",
        price: "$3.29",
        image:
          "https://www.elfondodelacazuela.com.ar/wp-content/uploads/2022/06/lemon-pie.jpg",
      },
      {
        name: "Pancakes",
        price: "$2.29",
        image:
          "https://lilluna.com/wp-content/uploads/2022/09/easy-pancakes3-resize-10.jpg",
      },
      {
        name: "Brownie",
        price: "$5.29",
        image:
          "https://www.pequerecetas.com/wp-content/uploads/2018/09/brownie-de-chocolate-receta.jpg",
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



  return (
    <div className="App colormenu">
      <header className="App-header">
        <h1 className="text-center mb-4 textmenu">Welcome Menu WakeUp!</h1>
        <Row>
          <Col>
            <div className=" d-flex justify-content-center ">
              <ul className="d-flex mb-4 text-center">
                {menuItems.map((category, index) => (
                  <li key={index}>
                    <Button
                      href="#"
                      className={`nav-link btn-cust ${
                        activeCategory === category.category ? "active" : ""
                      }`}
                      onClick={() => handleCategoryClick(category.category)}
                    >
                      {category.category}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
      </header>
      <main className="main_">
        <section className="editsection">
          <Container>
            <div className="card">
              <Card className="tarjeta p-5 mb-0">
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
          <Link to="/product/orders">
            <div className="boton-carrito">
              <i className="fas fa-shopping-cart"> Order</i>
              <span className="contador">{cart.length}</span>
            </div>
          </Link>
        </section>
      </main>
    </div>
  );
}

export default Menu;
