import React from 'react';
import axios from 'axios';
import Header from '../../Components/header';
import './Checkout.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
function Checkout(props) {
  const customerInfo = props.location.state;
  const products = JSON.parse(sessionStorage.getItem('productCart'));
  const userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
  const total = products.reduce(
    (total, item) => (total += item.dongia * item.soluong),
    0,
  );
  const history = useHistory();
  const handleCheckout = () => {
    const today = new Date();
    const ngaylap =
      today.getFullYear() +
      '-' +
      (today.getMonth() + 1) +
      '-' +
      today.getDate();

    const productList = [];
    products.forEach((item) => {
      const productItem = {};
      productItem.masp = item.masp;
      productItem.mamau = item.mamau;
      productItem.makt = item.makt;
      productItem.soluong = item.soluong;
      productItem.dongia = item.dongia;
      productList.push(productItem);
    });
    const data = {
      makh: userInfo.matk,
      ngaylap: ngaylap,
      tongtien: total,
      trangthai: 0,
      ...customerInfo,
      cthd: productList,
    };
    console.log(data);
    axios
      .post('http://localhost:3002/hoadon', data)
      .then(function () {
        sessionStorage.removeItem('productCart');
        history.push('/');
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      <Header />
      <div className="lastCheckout">
        <div className="productsCheckout">
          <h2>THÔNG TIN SẢN PHẨM</h2>
          <div className="product-list">
            {products.map((item, index) => (
              <div key={index}>
                <div>{item.tensp}</div>
                <div>
                  {item.tenmau}, {item.tenkt}
                </div>
                <div>
                  {item.soluong}x{item.dongia}vnđ
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="customerCheckout">
          <h2>THÔNG TIN GIAO HÀNG</h2>
          <div className="customerInfo">
            <table>
              <tr>
                <th>Tên khách hàng</th>
                <td> {customerInfo.hoten}</td>
              </tr>
              <tr>
                <th>Nơi giao</th>
                <td> {customerInfo.noigiao}</td>
              </tr>
              <tr>
                <th>Số điện thoại</th>
                <td> {customerInfo.sdt}</td>
              </tr>
              <tr>
                <th>tổng thanh toán</th>
                <td> {total} vnđ</td>
              </tr>
            </table>
          </div>
          <input
            type="submit"
            className="btn-lastCheckout"
            value="Hoàn tất thanh toán"
            onClick={handleCheckout}
          />
        </div>
      </div>
    </>
  );
}

export default Checkout;
