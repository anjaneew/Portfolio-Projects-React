import "./Price.module.css";
import Input from "../../input/Input";


const Price = ({ handleChange }: {handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void}) => {
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>

      <label htmlFor="price" className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value="" name="price"/>
        <span className="checkmark"></span>All
      </label>

      <Input 
        handleChange={handleChange}
        value="2"
        title="less than €2.00"
        name="price"
      />

      <Input 
        handleChange={handleChange}
        value="5"
        title="€2.00-€5.00"
        name="price"
      />

      <Input 
        handleChange={handleChange}
        value="10"
        title="€5.00-€10.00"
        name="price"
      />

      <Input 
        handleChange={handleChange}
        value="50"
        title="€10.00-€50.00"
        name="price"
      />

      <Input 
        handleChange={handleChange}
        value="50+"
        title="over €50.00"
        name="price"
      />
    </div>
  );
};

export default Price;