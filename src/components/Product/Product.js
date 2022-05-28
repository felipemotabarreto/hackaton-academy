import "./Product.css";

const Product = ({ name, description, image, price }) => {
  return (
    <div className="product-card">
      <p className="name">{name}</p>
      <p className="description">{description}</p>
      <img className="image" src={image} alt="product" />
      <p>{price}</p>
    </div>
  );
};

export default Product;
