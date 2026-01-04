import styles from "./Price.module.css";
import Input from "../../input/Input";


const Price = ({ handleChange }: {handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void}) => {
  return (
    <div className={styles.ml}>
      <h2 className={`${styles.sidebarTitle} ${styles.priceTitle}`}>Price</h2>

      <label htmlFor="all2" className={styles.sidebarLabelContainer}>
        <input onChange={handleChange} type="radio" value="" id="all2" name="price"/>
        <span className={styles.checkmark}></span>All
      </label>

      <Input 
        handleChange={handleChange}
        value={2}
        title="less than €2.00"
        name="price"
      />

      <Input 
        handleChange={handleChange}
        value={5}
        title="€2.00-€5.00"
        name="price"
      />

      <Input 
        handleChange={handleChange}
        value={10}
        title="€5.00-€10.00"
        name="price"
      />

      <Input 
        handleChange={handleChange}
        value={50}
        title="€10.00-€50.00"
        name="price"
      />

      <Input 
        handleChange={handleChange}
        value={51}
        title="over €50.00"
        name="price"
      />
    </div>
  );
};

export default Price;