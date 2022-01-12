import React from 'react';

function CardList(props) {
  return (
    <div>
      <div className="cardList">
        <div className="card">
          <div className="cardImg">
            <img
              src={process.env.PUBLIC_URL + 'img/png/001-wallet.png'}
              alt=""
            />
          </div>
          <div className="cardInfo">
            <h3>Chấp nhận mọi hình thức thanh toán</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>
        </div>
        <div className="card">
          <div className="cardImg">
            <img
              src={process.env.PUBLIC_URL + 'img/png/002-purchase.png'}
              alt=""
            />
          </div>
          <div className="cardInfo">
            <h3>Đổi trả trong vòng 7 ngày</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>
        </div>
        <div className="card">
          <div className="cardImg">
            <img
              src={process.env.PUBLIC_URL + 'img/png/003-free-delivery.png'}
              alt=""
            />
          </div>
          <div className="cardInfo">
            <h3>Miễn phí giao hàng với hóa đơn trên 500k</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardList;
