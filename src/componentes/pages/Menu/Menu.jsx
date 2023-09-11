import React from "react"
import "../Menu/Menu.css"
import Navbar from "../../layout/NavBar/NavBar"

const Menu = () => {
  return (
    <div>
        <Navbar/>
        <h2 className='text-center'>Menu</h2>
        <div class="wrapper">

<h2>Our Menu</h2>

<div class="buttons-container">
  <a href="#" class="button button--is-active" data-target="pizzaMenu">Pizzas</a>
  <a href="#" class="button" data-target="coffeeMenu">Coffee</a>
  <a href="#" class="button" data-target="noodlesMenu">Noodles</a>
</div>


<div class="menu menu--is-visible" id="pizzaMenu">
  <div class="item">
    <div class="item__header">
      <h3 class="item__title">Greek Pizza</h3>
      <span class="item__dots"></span>
      <span class="item__price">$22</span>
    </div>
    <p class="item__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quos harum officia eaque nobis ut.</p>
  </div>

  <div class="item">
    <div class="item__header">
      <h3 class="item__title">Cheese Pizza</h3>
      <span class="item__dots"></span>
      <span class="item__price">$20</span>
    </div>
    <p class="item__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quos harum officia eaque nobis ut.</p>
  </div>

  <div class="item">
    <div class="item__header">
      <h3 class="item__title">Neapolitan Pizza</h3>
      <span class="item__dots"></span>
      <span class="item__price">$18</span>
    </div>
    <p class="item__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quos harum officia eaque nobis ut.</p>
  </div>

  <div class="item">
    <div class="item__header">
      <h3 class="item__title">Pepperoni Pizza</h3>
      <span class="item__dots"></span>
      <span class="item__price">$15</span>
    </div>
    <p class="item__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quos harum officia eaque nobis ut.</p>
  </div>
</div>


<div class="menu" id="coffeeMenu">
  <div class="item">
    <div class="item__header">
      <h3 class="item__title">Cappuccino</h3>
      <span class="item__dots"></span>
      <span class="item__price">$4</span>
    </div>
    <p class="item__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quos harum officia eaque nobis ut.</p>
  </div>

  <div class="item">
    <div class="item__header">
      <h3 class="item__title">Iced Coffee</h3>
      <span class="item__dots"></span>
      <span class="item__price">$5</span>
    </div>
    <p class="item__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quos harum officia eaque nobis ut.</p>
  </div>

  <div class="item">
    <div class="item__header">
      <h3 class="item__title">Café Latte</h3>
      <span class="item__dots"></span>
      <span class="item__price">$3</span>
    </div>
    <p class="item__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quos harum officia eaque nobis ut.</p>
  </div>

  <div class="item">
    <div class="item__header">
      <h3 class="item__title">Espresso</h3>
      <span class="item__dots"></span>
      <span class="item__price">$4</span>
    </div>
    <p class="item__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quos harum officia eaque nobis ut.</p>
  </div>
</div>


<div class="menu" id="noodlesMenu">
  <div class="item">
    <div class="item__header">
      <h3 class="item__title">Chicken Noodles</h3>
      <span class="item__dots"></span>
      <span class="item__price">$16</span>
    </div>
    <p class="item__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quos harum officia eaque nobis ut.</p>
  </div>

  <div class="item">
    <div class="item__header">
      <h3 class="item__title">Egg Noodles</h3>
      <span class="item__dots"></span>
      <span class="item__price">$12</span>
    </div>
    <p class="item__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quos harum officia eaque nobis ut.</p>
  </div>

  <div class="item">
    <div class="item__header">
      <h3 class="item__title">Veg Noodles</h3>
      <span class="item__dots"></span>
      <span class="item__price">$10</span>
    </div>
    <p class="item__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quos harum officia eaque nobis ut.</p>
  </div>

  <div class="item">
    <div class="item__header">
      <h3 class="item__title">Chuck Norris Noodles</h3>
      <span class="item__dots"></span>
      <span class="item__price">$20</span>
    </div>
    <p class="item__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quos harum officia eaque nobis ut.</p>
  </div>
</div> 

</div> 








    </div>
 
  )
}

export default Menu