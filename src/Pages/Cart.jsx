import React from 'react';

const Cart =() =>{
    return  (
        <div>
                <div className="cart-table">
                    <h2>GIỎ HÀNG</h2>
                    <table id="product-table">
                        <thead>
                            <th>Hình sản phẩm</th>
                            <th>Tên sản phẩm</th>
                            <th>Số lượng</th>
                            <th>Thông tin</th>
                            <th>Giá tiền</th>
                            <th></th>
                        </thead>
                        <tbody id="product-cart">
                        </tbody>
                    </table>
                    <div className="btn-group">
                        <div className="checkout" id="checkout">
                            <a href="./checkout.html">THANH TOÁN</a>
                        </div>
                    </div>
                    <a href="./index.html" > <div className="continue">Tiếp tục mua hàng</div></a>
                </div>
            </div>
    )
};
export default Cart;