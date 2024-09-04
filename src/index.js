import React from "react";
import ReactDom from "react-dom/client";
import "../src/index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  return (
    <div className="header">
      <h1>fast react pizza co. </h1>
    </div>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const NumPizzas = pizzas.length;
  return (
    <div className="menu">
      <h2>Our Menu</h2>

      {NumPizzas > 0 ? (
        <>
          <p>Italian Cousine For Egyptian People </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name}></Pizza>
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our Menu</p>
      )}
    </div>
  );
}
function Pizza({ pizzaObj }) {
  // if (pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.alt} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <h4>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price + "  $"}</h4>
      </div>
    </li>
  );
}

function Footer() {
  const Hour = new Date().getHours();
  const OpenHour = 8;
  const CloseHour = 23;
  const IsOpen = Hour >= OpenHour && Hour <= CloseHour;

  return (
    <div className="footer">
      <h3>The Local Time Now :: {new Date().toLocaleTimeString()}</h3>
      <footer>
        {IsOpen ? (
          <Order CloseHour={CloseHour} OpenHour={OpenHour}></Order>
        ) : (
          <p>
            {" "}
            We're Happy To Welcome You Between {OpenHour}:00 am to {CloseHour}
            :00 pm
          </p>
        )}
      </footer>
    </div>
  );
}

function Order({ CloseHour, OpenHour }) {
  return (
    <div style={{ fontWeight: "bold", color: "red" }}>
      <p style={{ margin: "20px 0" }}>
        {" "}
        We're Open Until {CloseHour}:00 pm Visit Us or Order Now Online
      </p>

      <button className="order btn" style={{ color: "white", margin: "auto" }}>
        Order NOw
      </button>
    </div>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
