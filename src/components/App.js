import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import Order from "./Order";
import MenuAdmin from "./MenuAdmin";
import Product from "./Product";
import sampleProducts from "../sample-products";
import base from "../base";
import firebase from "firebase/app";
import SignIn from "./Auth/SignIn";

class App extends React.Component {
  static propTypes = {
    match: PropTypes.object,
  };
  state = {
    products: {},
    order: {},
  };

  componentDidMount() {
    const { params } = this.props.match;
    const localStorageRef = localStorage.getItem(params.restaurantId);
    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) });
    }

    this.ref = base.syncState(`${params.restaurantId}/products`, {
      context: this,
      state: "products",
    });
  }
  componentDidUpdate() {
    const { params } = this.props.match;

    localStorage.setItem(params.restaurantId, JSON.stringify(this.state.order));
  }
  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addProduct = (product) => {
    // console.log(product);
    // 1. Делаем копию объекта state
    const products = { ...this.state.products };
    // console.log(products);
    // 2. Добавить новый продукт в пременную products
    products[`product${Date.now()}`] = product;
    // 3. Записать наш новый объект products в state
    this.setState({ products });
  };

  updateProduct = (key, updateProduct) => {
    // 1. Делаем копию объекта state
    const products = { ...this.state.products };
    // console.log(products);
    // 2. Добавить новый продукт в пременную products
    products[key] = updateProduct;
    // 3. Записать наш новый объект products в state
    this.setState({ products });
  };

  deleteProduct = (key) => {
    // 1. Делаем копию объекта state
    const products = { ...this.state.products };
    // 2. Удалить product
    products[key] = null;
    // 3. Записать наш новый объект products в state
    this.setState({ products });
  };

  loadProducts = () => {
    this.setState({ products: sampleProducts });
  };

  addToOrder = (key) => {
    // 1. Делаем копию объекта state
    const order = { ...this.state.order };
    // 2.Добавить ключ к заказу со знач-ем 1, или обновить текущ. знач.
    order[key] = order[key] + 1 || 1;
    // 3. Записать наш новый объект order в state
    this.setState({ order });
  };
  deleteFromOrder = (key) => {
    // 1. Делаем копию объекта state
    const order = { ...this.state.order };
    // 2. Удалить order
    delete order[key];
    // 3. Записать наш новый объект order в state
    this.setState({ order });
  };

  handleLogout = async () => {
    await firebase.auth().signOut();
    window.location.reload();
  };

  render() {
    return (
      <SignIn>
        <div className="guitar-paradise">
          <div className="menu">
            <Header title="Cool Guitar title" amount={10} cool={true} />
            <ul className="products">
              {Object.keys(this.state.products).map((key) => {
                return (
                  <Product
                    key={key}
                    index={key}
                    addToOrder={this.addToOrder}
                    details={this.state.products[key]}
                  />
                );
              })}
            </ul>
          </div>
          <Order
            products={this.state.products}
            order={this.state.order}
            deleteFromOrder={this.deleteFromOrder}
          />
          <MenuAdmin
            loadProducts={this.loadProducts}
            addProduct={this.addProduct}
            products={this.state.products}
            updateProduct={this.updateProduct}
            deleteProduct={this.deleteProduct}
            handleLogout={this.handleLogout}
          />
        </div>
      </SignIn>
    );
  }
}

export default App;
