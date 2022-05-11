import React from "react";
import PropTypes from "prop-types";
import AddProductForm from "./AddProductForm";
import EditProductForm from "./EditProductForm";
import firebase from "firebase/app";

class MenuAdmin extends React.Component {
  state = {
    photo: "",
    user: "",
  };
  static propTypes = {
    products: PropTypes.object,
    deleteProduct: PropTypes.func,
    updateProduct: PropTypes.func,
    addProduct: PropTypes.func,
    loadProducts: PropTypes.func,
  };
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.authHandler({ user });
      }
    });
  }

  authHandler = async (authData) => {
    console.log(authData);
    const { email, photoURL } = authData.user;
    this.setState({ user: email, photo: photoURL });
  };
  render() {
    const { user, photo } = this.state;
    const avatar = photo ? photo : "/images/avatar.png";
    return (
      <div className="menu-admin">
        {user ? (
          <div className="login-header">
            <div className="avatar">
              <img src={avatar} alt={user} />
            </div>
            <button className="buttonLogout" onClick={this.props.handleLogout}>
              Вийти
            </button>
          </div>
        ) : null}
        <h2>Адмін панель</h2>
        {Object.keys(this.props.products).map((key) => {
          return (
            <EditProductForm
              key={key}
              index={key}
              product={this.props.products[key]}
              updateProduct={this.props.updateProduct}
              deleteProduct={this.props.deleteProduct}
            />
          );
        })}
        <AddProductForm addProduct={this.props.addProduct} />
        <button onClick={this.props.loadProducts}>Завантажити данні</button>
      </div>
    );
  }
}

export default MenuAdmin;
