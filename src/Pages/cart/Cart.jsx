import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Item from '../../Components/cart/Item';
import Header from '../../Components/header';
import './cart.css';
const Cart = () => {
  const [productCart, setProductCart] = useState([]);
  const history = useHistory();
  if(JSON.parse(sessionStorage.getItem('productCart'))!=null){
    setProductCart(JSON.parse(sessionStorage.getItem('productCart')))
  }
  const isEmpty = !productCart.length;
  const handleTotal = (productList) => {
    const total = productList.reduce((total, item) => {
      return total + Number(item.soluong) * Number(item.dongia);
    }, 0);
    return total;
  };
  const [total, setTotal] = useState(handleTotal(productCart));
  const updateCart = (e, item) => {
    const newProductCart = productCart;
    for (let i = 0; i < newProductCart.length; i++) {
      if (
        item.masp == newProductCart[i].masp &&
        item.tenmau == newProductCart[i].tenmau &&
        item.tenkt == newProductCart[i].tenkt
      ) {
        if (e.target.value == '+') newProductCart[i].soluong += 1;
        else if (e.target.value == '-') {
          newProductCart[i].soluong = newProductCart[i].soluong - 1;
        } else if (e.target.value == 'Xóa') newProductCart.splice(i, 1);
      }
    }
    if (newProductCart == []) {
      sessionStorage.removeItem('productCart');
      setProductCart([]);
    } else {
      setProductCart(newProductCart);
      setTotal(handleTotal(newProductCart));
      sessionStorage.setItem('productCart', JSON.stringify(newProductCart));
    }
  };
  const handleDirectUserinfo = () => {
    history.push('/UserInfo');
  };
  return (
    <>
      <Header />
      <main>
        <div className="cart-table">
          {!isEmpty ? (
            <div>
              <h2>GIỎ HÀNG</h2>
              <div className="product-table">
                <div className="tableTitle">
                  <div>Hình sản phẩm</div>
                  <div>Tên sản phẩm</div>
                  <div>Số lượng</div>
                  <div>Thông tin</div>
                  <div>Giá tiền</div>
                  <div></div>
                </div>
                <div className="tableItems">
                  {productCart.map((item, index) => (
                    <Item item={item} key={index} handleUpdate={updateCart} />
                  ))}
                </div>
              </div>
              <div className="totalPrice">
                <div className="total">Tổng tiền:</div>
                <div className="total" id="total">
                  {total}
                  vnđ
                </div>
              </div>
              <div className="btn-group">
                <Link to="/">Tiếp tục mua hàng</Link>
                <div
                  className="btnCheckout"
                  id="checkout"
                  onClick={handleDirectUserinfo}
                >
                  THANH TOÁN
                </div>
              </div>
            </div>
          ) : (
            <div className='isEmpty'>Không có sản phẩm nào trong giỏ</div>
          )}
        </div>
      </main>
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
export default Cart;
