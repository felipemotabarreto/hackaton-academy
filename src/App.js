import { useEffect, useState } from "react";
import axios from "axios";
import { listProductsUrl } from "./config/endpoints";
import "./App.css";
import Product from "./components/Product";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .request({
        method: "GET",
        url: listProductsUrl,
      })
      .then(({ data }) => {
        setProducts(
          data.map(({ id, title, body_html, image, variants }) => ({
            id,
            name: title,
            description: body_html,
            image: image.src,
            price: variants[0].price,
          }))
        );
      });
  }, []);

  return (
    <>
      <h1>OSF Academy Rocks</h1>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </ul>
      <p>Product count: {products.length}</p>
    </>
  );
}

export default App;
