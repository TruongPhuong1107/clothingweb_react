import React, { useState } from 'react';
import Header from '../../Components/header';
import { useHistory } from 'react-router-dom';
import './UserInfo.css';
const UserInfo = () => {
  const [shippingInfo, setShippingInfo] = useState({
    hoten: '',
    noigiao: '',
    sdt: '',
  });
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push({
      pathname: '/checkout',
      state: shippingInfo,
    });
  };
  return (
    <>
      <Header />
      <form id="formInfoCheckout" onSubmit={handleSubmit}>
        <h2>THÔNG TIN GIAO HÀNG</h2>
        <input
          type="text"
          className="name"
          name="hoten"
          value={shippingInfo.hoten}
          onChange={(e) =>
            setShippingInfo({ ...shippingInfo, hoten: e.target.value })
          }
          placeholder="Họ Tên"
        />
        <input
          type="text"
          className="address"
          value={shippingInfo.noigiao}
          onChange={(e) =>
            setShippingInfo({ ...shippingInfo, noigiao: e.target.value })
          }
          placeholder="Nơi giao"
        />
        <input
          type="email"
          className="email"
          placeholder="Email"
        />
        <input
          type="text"
          className="phone-number"
          value={shippingInfo.sdt}
          onChange={(e) =>
            setShippingInfo({ ...shippingInfo, sdt: e.target.value })
          }
          placeholder="Số điện thoại"
        />
        <input
          type="submit"
          className="btn-checkout"
          id="btn-checkout"
          value="Thanh toán"
          required
        />
      </form>
      <footer>
        <div className="footer">
          <p className="copy-right">
            &copy;Bản quyền thuộc về <b> LYS </b>{' '}
          </p>
        </div>
      </footer>
    </>
  );
};

export default UserInfo;
