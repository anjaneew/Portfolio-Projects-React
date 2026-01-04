import Input from "../../input/Input";
import styles from "./Category.module.css";

const Category = ({ handleChange }: { handleChange:(e: React.ChangeEvent<HTMLInputElement>)=>void}) => {
  return (
    <div>
        <h2 className={styles.sidebarTitle}>Category</h2>
        <div>
            <label htmlFor="all" className={styles.sidebarLabelContainer}>
                <input onChange={handleChange} id="all" type="radio" value="" name="category"/>
                <span className={styles.checkmark}>All</span>
            </label>

            <Input 
              handleChange={handleChange}
              value="spices"
              title="Spices 🫚"
              name="category"
            />

            <Input 
              handleChange={handleChange}
              value="cooking"
              title="Cooking🍽️"
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
              value="luxury"
              title="Luxury Items 💎"
              name="category"
            />

        </div>
    </div>
  );
};

export default Category;