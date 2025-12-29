import type React from "react";
import styles from "./Products.module.css";

const Products = ({ result }: {result: React.ReactNode}) => {
  return (
    <section className={styles.cardContainer}>
        {result}
    </section>
  );
};

export default Products;