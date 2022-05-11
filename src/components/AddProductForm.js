import React from "react";
import PropTypes from "prop-types";

class AddProductForm extends React.Component {
  static propTypes = {
    addProduct: PropTypes.func,
  };

  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();
  createBurger = (event) => {
    event.preventDefault();
    // console.log(this.nameRef.current.value);
    const product = {
      name: this.nameRef.current.value,
      price: parseFloat(this.priceRef.current.value || 0),
      status: this.statusRef.current.value,
      desc: this.descRef.current.value,
      image: this.imageRef.current.value,
    };
    // в нутри текущего object
    // console.log(product);

    // в нутри object App
    this.props.addProduct(product);

    // console.log(event.currentTarget);
    event.currentTarget.reset();
  };
  render() {
    return (
      <form className="product-edit" onSubmit={this.createBurger}>
        <input
          ref={this.nameRef}
          name="name"
          type="text"
          placeholder="Name"
          autoComplete="off"
        />
        <input
          ref={this.priceRef}
          name="price"
          type="text"
          placeholder="Price"
          autoComplete="off"
        />
        <select ref={this.statusRef} name="status" className="status">
          <option value="available">Доступно</option>
          <option value="unavailable">Убрать из доступа</option>
        </select>
        <textarea
          ref={this.descRef}
          name="desc"
          type="text"
          placeholder="Desc"
        />
        <input
          ref={this.imageRef}
          name="image"
          type="text"
          placeholder="Image"
          autoComplete="off"
        />
        <button type="submit">+ Додати в магазин</button>
      </form>
    );
  }
}

export default AddProductForm;
