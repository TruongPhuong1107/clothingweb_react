import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function Product(props) {
  const { productt } = props;
  const [ActiveView, setActiveView] = useState(false);
  const handleActiveView = () => {
    setActiveView(true);
  };
  const handleHidden = () => {
    setActiveView(false);
  };
  return (
    <div className="item">
      <Link
        to={`/description/${productt.masp}`}
        style={{ textDecoration: 'none' }}
      >
        <div className="product-wrap">
          <div className="product-img">
            <img
              src={process.env.PUBLIC_URL + `/img/${productt.hinh}`}
              alt=""
            />
          </div>
          <div className="product-info">
            <span>
              <p>{productt.tensp}</p>
            </span>
            <hr></hr>
            <p className="product-price">{productt.dongia} vnđ</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Product;
