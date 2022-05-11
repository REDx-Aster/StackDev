import React from "react";
import PropTypes from "prop-types";
import Shipmant from "./Shipment";
class Order extends React.Component {
  static propTypes = {
    products: PropTypes.object,
    order: PropTypes.object,
    deleteFromOrder: PropTypes.func,
  };
  renderOrder = (key) => {
    const product = this.props.products[key];
    const count = this.props.order[key];
    const isAvailable = product && product.status === "available";

    if (!product) return null;

    if (!isAvailable) {
      return (
        <li className="unavailable" key={key}>
          Вибачте,{product ? product.name : "гитара"} тимчасово відсутня.
        </li>
      );
    }
    return (
      <li key={key}>
        <span>{count}</span>
        од. {product.name}
        <span> {count * product.price} $</span>
        <button
          onClick={() => this.props.deleteFromOrder(key)}
          className="cancellItem"
        >
          &times;
        </button>
      </li>
    );
  };
  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) => {
      const product = this.props.products[key];
      const count = this.props.order[key];
      const isAvailable = product && product.status === "available";
      console.log(isAvailable);

      if (isAvailable) {
        return prevTotal + product.price * count;
      }
      console.log(prevTotal);
      return prevTotal;
      // console.log("count", count);
    }, 0);
    return (
      <div className="order-wrap">
        <h2>Ваше замовлення</h2>
        <ul className="order">{orderIds.map(this.renderOrder)}</ul>
        {total > 0 ? (
          <Shipmant total={total} />
        ) : (
          <div className="nothingSelected">
            Оберіть найкращу гітару у світі!
          </div>
        )}
      </div>
    );
  }
}

export default Order;
