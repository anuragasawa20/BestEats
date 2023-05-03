import React from "react";
import NavBar from "./components/Navbar";
import Hero from "./components/Hero.jsx";
import HeadlineCards from "./components/HeadlineCards.jsx";
import Food from './components/Food';
import Category from "./components/Category";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <HeadlineCards />
      <Food />
      <Category />
    </div>
  );
}

export default App;
