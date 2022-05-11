import React from "react";
import PropTypes from "prop-types";

const Header = (props) => (
  <header className="top">
    <div className="wrap">
      <div className="header-content">
        <div className="header-rating">
          <div className="header-rating_tag">Рейтинг:</div>
          <div className="header-rating_icon">★★★★★</div>
        </div>

        <div className="header-divider"></div>
        <h1 className="header-title">{props.title}</h1>
        <h3 className="">
          <span>Безпечна доставка</span>
          <br />
          <span className="sub-header"> #guitars</span>
        </h3>
      </div>
    </div>
  </header>
);
Header.propTypes = {
  title: PropTypes.string.isRequired,
};
// class Header extends React.Component {
//   render() {
//     return (
//       <header className="top">
//         <div className="wrap">
//           <div className="header-content">
//             <div className="header-rating">
//               <div className="header-rating_tag">Рейтинг:</div>
//               <div className="header-rating_icon">★★★★★</div>
//             </div>

//             <div className="header-divider"></div>
//             <h1 className="header-title">{this.props.title}</h1>
//             <h3 className="">
//               <span>Безпечна доставка</span>
//               <br />
//               <span className="sub-header"> #guitars</span>
//             </h3>
//           </div>
//         </div>
//       </header>
//     );
//   }
// }

export default Header;
