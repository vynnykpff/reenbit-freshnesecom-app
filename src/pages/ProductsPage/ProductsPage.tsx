import { FC } from "react";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const ProductsPage: FC = () => {
  const params = useParams();
  return (
    <>
      <h2>All Products Page</h2>
      <ul>
        {Object.values(params).map(param => (
          <li key={uuidv4()}>{param}</li>
        ))}
      </ul>
    </>
  );
};

export default ProductsPage;
