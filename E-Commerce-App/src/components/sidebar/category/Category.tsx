import Input from "../../input/Input";
import "./Category.module.css";

const Category = ({ handleChange }: { handleChange:(e: React.ChangeEvent<HTMLInputElement>)=>void}) => {
  return (
    <div>
        <h2 className="sidebar-title">Category</h2>
        <div>
            <label htmlFor="category" className="sidebar-label-container">
                <input onChange={handleChange} type="radio" value="" name="category"/>
                <span className="checkmark">All</span>
            </label>

            <Input 
              handleChange={handleChange}
              value="spices"
              title="Spices 🫚"
              name="category"
            />

            <Input 
              handleChange={handleChange}
              value="medicine"
              title="Medicine 🩺"
              name="category"
            />
            
            <Input 
              handleChange={handleChange}
              value="aromatics"
              title="Aromatics 🪷"
              name="category"
            />

                        <Input 
              handleChange={handleChange}
              value="cooking ingredients"
              title="Cooking Ingredients 🍽️"
              name="category"
            />

            <Input 
              handleChange={handleChange}
              value="luxury"
              title="Luxury Items 💎"
              name="category"
            />

        </div>
    </div>
  );
};

export default Category;