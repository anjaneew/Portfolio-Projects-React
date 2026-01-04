import React, { useState } from "react";
import Card from "./components/card/Card";
import { type DataType, DataList } from "./data/Data";
import Navigation from "./components/navigation/Navigation";
import Sidebar from "./components/sidebar/Sidebar";
// import Recommended from "./components/recommended/Recommended";
import Products from "./components/products/Products";
import "./index.css";


const App = () => {

  const [selectedCategory, setSelectedCategory] = useState<string | number>("");

  //---------------Input Filters----------------------
  const [query, setQuery] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  }

  // const filteredItems = DataList.filter((product)=> product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1);

  //---------------Radio Filters----------------------

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    const isNumber = !isNaN(Number(inputValue)) && inputValue !== "";
    setSelectedCategory( isNumber ?  Number(inputValue) : inputValue); 
  }

  //---------------Button Filters for recommended----------------------
  // const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   setSelectedCategory(e.currentTarget.value)
  // }

 const filteredData = (products: DataType[], selected: string | number, query: string ) => {

  let filteredProducts = products;

    // Filtering Input Items
    if(query){
      filteredProducts = filteredProducts.filter((product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1);
    }

    //Applying selected Filter
    if(selected) {
      filteredProducts = filteredProducts.filter(({ category, price, title }) => 
      category.includes(selected.toString()) ||
      title.includes(selected.toString())||
      // price === Number(selected) );
      (typeof selected === "number" && (
        (selected === 2 && price < 2) ||
        (selected === 5 && price >= 2 && price <= 5 ) ||
        (selected === 10 && price >= 5 && price <= 10 ) ||
        (selected === 50 && price >= 10 && price <= 50 ) ||
        (selected === 51 && price >= 50 )
      ))); 
    }

     const addToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
  console.log("Added to cart "+ e.currentTarget.value)
 } 

    return filteredProducts.map(({ img, title, description, weight, category, price}, index) => (
      <Card 
        key={index}
        img={img}
        title={title}
        description={description}
        weight={weight}
        category={category}
        price={price}
        onClickHandler={addToCart}
        value={title}
        btntitle="Add to Cart"
      />
    )
    );
 }

 const result = filteredData(DataList, selectedCategory, query);



  return (
    <div className="banner">
      <div>
        <h1 className="siteTitle">Upali Agro</h1>
        <Navigation query={query} handleInputChange={handleInputChange}/>
        {/* <Recommended handleClick={handleClick}/> */}
      </div>
      <Sidebar handleChange={handleChange}/>
      <Products result={result}/>
    </div>
  );
};

export default App;