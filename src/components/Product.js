import React from "react";
import PropTypes from "prop-types";

class Product extends React.Component {
  // handlClick = () => {
  //   this.props.addToOrder(this.props.index);
  // };
  static propTypes = {
    details: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number,
      desc: PropTypes.string,
      status: PropTypes.string,
    }),
    index: PropTypes.string,
    addToOrder: PropTypes.func,
  };
  render() {
    const { image, name, price, desc, status } = this.props.details;
    const isAvailable = status === "available";
    return (
      <li className="menu-product">
        <div className="image-container">
          <img src={image} alt={name} />
        </div>
        <div className="product-details">
          <h3 className="product-name">
            {name}
            <span className="price">{price} ＄</span>
          </h3>
          <p>{desc}</p>
          <button
            className="buttonOrder"
            disabled={!isAvailable}
            onClick={() => this.props.addToOrder(this.props.index)}
          >
            {isAvailable ? "Замовити" : "Товар у дорозі"}
          </button>
        </div>
      </li>
    );
  }
}

export default Product;
