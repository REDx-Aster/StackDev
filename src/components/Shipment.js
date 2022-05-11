import React from "react";
import PropTypes from "prop-types";

class Shipmant extends React.Component {
  static propTypes = {
    total: PropTypes.number,
  };

  render() {
    const { total } = this.props;
    const shipping = total > 0 && total < 500 ? 350 : 99;
    const shippingSale =
      shipping === 99 ? <span>{shipping} $</span> : <span>{shipping} $</span>;
    return (
      <div className="total">
        <div className="total_wrap">
          <div>
            <div>Доставка: {total > 0 ? shippingSale : null}</div>
            <div className="total_wrap-free">
              {total < 500
                ? `Замовте ще на ${500 - total} $ за для доставки за 99 $`
                : null}
            </div>
          </div>
          <div className="total_wrap-final">Всього: {total} $</div>
        </div>
      </div>
    );
  }
}

export default Shipmant;
