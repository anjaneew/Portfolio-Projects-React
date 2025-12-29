import Category from "./category/Category";
import styles from "./Sidebar.module.css";
import Price from "./price/Price";

const Sidebar = ({handleChange} : {handleChange: (e: React.ChangeEvent<HTMLInputElement>)=> void}) => {
  return (
    <section className={styles.sidebar}>
        <div className={styles.logContainer}>
            <h1>🛒</h1>
        </div>
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
    </section>
  );
};

export default Sidebar;