import React, { useState } from "react";
import Card from "./components/card/Card";
import { type DataType, DataList } from "./data/Data";
import Navigation from "./components/navigation/Navigation";
import Sidebar from "./components/sidebar/Sidebar";
import Recommended from "./components/recommended/Recommended";
import Products from "./components/products/Products";
import "./index.css";

const App = () => {

  const [selectedCategory, setSelectedCategory] = useState<string>("");

  //---------------Input Filters----------------------
  const [query, setQuery] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  }

  const filteredItems = DataList.filter((product)=> product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1);

  //---------------Radio Filters----------------------

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCategory(e.target.value);
  }

  //---------------Button Filters----------------------
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSelectedCategory(e.currentTarget.value)
  }

//MISSING CODE HERE

  return (
    <div>
      <h1>Upali Agro</h1>
      <Sidebar handleChange={handleChange}/>
      <Navigation query={query} handleInputChange={handleInputChange}/>
      <Recommended handleClick={handleClick}/>
      <Products result={result}/>
    </div>
  );
};

export default App;