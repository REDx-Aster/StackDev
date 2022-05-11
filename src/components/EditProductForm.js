import React from "react";
import PropTypes from "prop-types";

class EditProductForm extends React.Component {
  static propTypes = {
    product: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number,
      desc: PropTypes.string,
      status: PropTypes.string,
    }),
    index: PropTypes.string,
    updateProduct: PropTypes.func,
    deleteProduct: PropTypes.func,
  };
  handleChange = (event) => {
    // console.log(event.currentTarget.value);
    const updatedProduct = {
      ...this.props.product,

      [event.currentTarget.name]:
        event.currentTarget.name === "price"
          ? parseFloat(event.currentTarget.value) || 0
          : event.currentTarget.value,
    };
    // console.log(updatedProduct);
    this.props.updateProduct(this.props.index, updatedProduct);
  };
  render() {
    return (
      <div className="product-edit">
        <input
          onChange={this.handleChange}
          //   ref={this.nameRef}
          name="name"
          type="text"
          placeholder="Name"
          autoComplete="off"
          value={this.props.product.name}
        />
        <input
          onChange={this.handleChange}
          //   ref={this.priceRef}
          name="price"
          type="text"
          placeholder="Price"
          autoComplete="off"
          value={this.props.product.price}
        />
        <select
          onChange={this.handleChange}
          //   ref={this.statusRef}
          name="status"
          className="status"
          value={this.props.product.status}
        >
          <option value="available">Доступно</option>
          <option value="unavailable">Убрать из доступа</option>
        </select>
        <textarea
          onChange={this.handleChange}
          //   ref={this.descRef}
          name="desc"
          type="text"
          placeholder="Desc"
          value={this.props.product.desc}
        />
        <input
          onChange={this.handleChange}
          //   ref={this.imageRef}
          name="image"
          type="text"
          placeholder="Image"
          autoComplete="off"
          value={this.props.product.image}
        />
        <button onClick={() => this.props.deleteProduct(this.props.index)}>
          Видалити
        </button>
      </div>
    );
  }
}
export default EditProductForm;
