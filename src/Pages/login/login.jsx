import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './login.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Header from '../../Components/header';
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [hasValue, setHasValue] = useState(true);
  const history = useHistory();
  const callApiSubmit = (data) => {
    axios
      .get('http://localhost:3002/CheckLogin', {
        params: data,
      })
      .then((response) => {
        const data = response.data;
        sessionStorage.setItem('userInfo', JSON.stringify(data));
        setHasValue(true);
        history.push('/');
      })
      .catch(() => {
        setHasValue(false);
      });
  };
  const onSubmit = (data) => {
    callApiSubmit(data);
  };
  return (
    <>
      <Header></Header>
      <form onSubmit={handleSubmit(onSubmit)} id="formLogin">
        <h2>ĐĂNG NHẬP</h2>
        <div class="form-group">
          <label for="userName" class="form-label">
            Tên đăng nhập
          </label>
          <input
            type="text"
            class="username"
            id="username"
            placeholder="Tên đăng nhập"
            {...register('tendn', { required: true })}
          />
          {errors.tendn && (
            <span class="form-message">Vui lòng nhập thông tin</span>
          )}
        </div>
        <div class="form-group">
          <label for="password" class="form-label">
            Mật khẩu
          </label>
          <input
            type="password"
            id="password"
            class="password"
            placeholder="Mật khẩu"
            {...register('matkhau', { required: true })}
          />
          {errors.matkhau && (
            <span class="form-message">Vui lòng nhập thông tin</span>
          )}
        </div>
        {!hasValue && (
          <div class="error">Tên đăng nhập hoặc mật khẩu không chính xác</div>
        )}
        <input
          type="submit"
          class="btn-login"
          id="btn-login"
          value="Đăng nhập"
        />
        <label class="askAccountLabel">BẠN CHƯA CÓ TÀI KHOẢN?</label>
        <Link to="/register" class="link-register">
          <div class="btnRegisterLogin">Đăng ký</div>
        </Link>
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

export default Login;
