import Category from "./category/Category";
import styles from "./Sidebar.module.css";
import Price from "./price/Price";

const Sidebar = ({handleChange} : {handleChange: (e: React.ChangeEvent<HTMLInputElement>)=> void}) => {
  return (
    <section className={styles.sidebar}>
        <div className={styles.logContainer1}>
            <h1>🛒</h1>
        </div>
         <div className={styles.logContainer}>
        <Category handleChange={handleChange} /></div>
         <div className={styles.logContainer}>
        <Price handleChange={handleChange} /></div>
    </section>
  );
};

export default Sidebar;