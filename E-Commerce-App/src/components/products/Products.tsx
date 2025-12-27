import type React from "react";

const Products = ({ result }: {result: React.ReactNode}) => {
  return (
    <section className="card-container">
        {result}
    </section>
  );
};

export default Products;