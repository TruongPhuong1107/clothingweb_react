import React from 'react';
import Header from '../../Components/header';
import './register.css';

function Register() {
  return (
    <>
      <Header />
      <form action="" method="post" id="formRegister">
        <h2>TẠO TÀI KHOẢN</h2>
        <div className="form-group">
          <input
            type="text"
            className="name"
            name="tenchutk"
            value=""
            placeholder="Họ Tên"
          />
          <span className="form-message"></span>
        </div>
        <div className="form-group">
          <input
            type="date"
            className="date"
            name="ngaysinh"
            value=""
            placeholder="Ngày sinh"
          />
          <span className="form-message"></span>
        </div>
        <div className="form-group">
          <input
            type="text"
            className="address"
            name="diachi"
            value=""
            placeholder="Địa chỉ"
          />
          <span className="form-message"></span>
        </div>
        <div className="form-group">
          <input
            type="email"
            className="email"
            name="email"
            value=""
            placeholder="Email"
          />
          <span className="form-message"></span>
        </div>
        <div className="form-group">
          <input
            type="text"
            className="phone-number"
            name="sdt"
            value=""
            placeholder="Số điện thoại"
          />
          <span className="form-message"></span>
        </div>
        <div className="form-group">
          <input
            type="text"
            className="username"
            name="tendn"
            value=""
            placeholder="Tên đăng nhập"
          />
          <span className="form-message"></span>
        </div>
        <div className="form-group">
          <input
            type="password"
            className="password"
            id="password"
            name="matkhau"
            value=""
            placeholder="Mật khẩu"
          />
          <span className="form-message"></span>
        </div>
        <div className="form-group">
          <input
            type="password"
            className="re-password"
            name="re-password"
            value=""
            placeholder="Nhập lại mật khẩu"
          />
          <span className="form-message"></span>
        </div>
        <input type="submit" className="btn-register" value="Đăng ký" />
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
}

export default Register;
