import React, { useState } from 'react';

function Item({ item, handleUpdate }) {
  const [quantity, setQuantity] = useState(item.soluong);

  const handleOnPlus = (e) => {
    setQuantity(quantity + 1);
    handleUpdate(e, item);
  };
  const handleOnMinus = (e) => {
    if (quantity <= 1) {
      setQuantity(1);
      return;
    }
    setQuantity(quantity - 1);
    handleUpdate(e, item);
  };
  const handleDelete = (e) => {
    handleUpdate(e, item);
  };
  return (
    <div className="tableItem">
      <div className="imgProCart">
        <img src={process.env.PUBLIC_URL + `/img/${item.hinh}`} alt="" />
      </div>
      <div className="forResponsive">
        <div className="tensp">{item.tensp}</div>
        <div>
          <div className="buttons_added">
            <input
              className="minus is-form"
              id="minus"
              type="button"
              value="-"
              onClick={(e) => handleOnMinus(e)}
            />
            <input
              aria-label="quantity"
              className="input-qty"
              max="100"
              min="1"
              name=""
              type="number"
              value={quantity}
            />
            <input
              className="plus is-form"
              id="plus"
              type="button"
              value="+"
              onClick={(e) => handleOnPlus(e)}
            />
          </div>
        </div>
        <div>
          <span>
            {item.tenmau}, {item.tenkt}
          </span>
        </div>
        <div id="dongia">{item.dongia}vnđ</div>
        <div className="btnDelete">
          <button
            value="Xóa"
            className="delete"
            onClick={(e) => handleDelete(e)}
          >
            Xóa
          </button>
        </div>
      </div>
    </div>
  );
}

export default Item;
