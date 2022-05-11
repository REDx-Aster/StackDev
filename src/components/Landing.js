import React, { useState } from "react";
import shops from "../sample-restaurants";
import PropTypes from "prop-types";

const Landing = (props) => {
  const [display, toggleDisplay] = useState(false);
  const displayList = () => {
    toggleDisplay(!display);
  };
  const [title, setTitle] = useState("");
  const getTitle = (shops) => {
    const { title, url } = shops;
    setTitle(title);
    setUrl(url);
    toggleDisplay(false);
  };
  const [url, setUrl] = useState("");

  const goToShop = () => {
    props.history.push(`/shop/${url}`);
  };
  return (
    <div className="shop_select">
      <div className="shop_select_top">
        <div onClick={displayList} className="shop_select_top-header">
          {title ? title : "Оберіть магазин"}
        </div>
        <div className="arrow_picker">
          <div className="arrow_picker-up"></div>
          <div className="arrow_picker-down"></div>
        </div>
      </div>

      {display ? (
        <div className="shop_select_bottom">
          <ul className="shop_select_list">
            {shops.map((shops) => {
              return (
                <li
                  onClick={() => getTitle(shops)}
                  className="shops_select_item"
                  key={shops.id}
                >
                  {shops.title}
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
      {title && !display ? (
        <button onClick={goToShop}>Перейти в магазин</button>
      ) : null}
    </div>
  );
};
Landing.propTypes = {
  history: PropTypes.object,
};

{
  /*class Landing extends React.Component {
  static propTypes = {
    history: PropTypes.object,
  };

  state = {
    display: false,
    title: "",
    url: "",
  };

  //this = undefined
  //   displayList() {
  //     console.log("click");
  //     console.log(this);
  //   }

  //this = Landing
  displayList = () => {
    // диструктуризация
    // const display = this.state.display; = const { display } = this.state;
    const { display } = this.state;
    // console.log({ display });
    this.setState({ display: !display });
    // console.log({ display });
  };

  getTitle = (restaurant) => {
    // const title = restaurant.title; = const { title } = restaurant;
    // console.log(title);
    const { title, url } = restaurant;
    // this.setState({ title: title, url: url, display: false });
    // ES6
    this.setState({ title, url, display: false });
  };

  goToRestaurant = () => {
    const { url } = this.state;
    // console.log(url);
    this.props.history.push(`/restaurant/${url}`);
  };
  render() {
    return (
      <div className="restaurant_select">
        <div className="restaurant_select_top">
          <div
            onClick={this.displayList}
            className="restaurant_select_top-header"
          >
            {this.state.title ? this.state.title : "Оберіть ресторан"}
          </div>
          <div className="arrow_picker">
            <div className="arrow_picker-up"></div>
            <div className="arrow_picker-down"></div>
          </div>
        </div>

        {this.state.display ? (
          <div className="restaurant_select_bottom">
            <ul className="restaurant_select_list">
              {restaurants.map((restaurant) => {
                return (
                  <li
                    onClick={() => this.getTitle(restaurant)}
                    className="restaurant_select_item"
                    key={restaurant.id}
                  >
                    {restaurant.title}
                  </li>
                );
              })}
            </ul>
          </div>
        ) : null}
        {this.state.title && !this.state.display ? (
          <button onClick={this.goToRestaurant}>Перейти в ресторан</button>
        ) : null}
      </div>
    );
  }
}*/
}
export default Landing;
