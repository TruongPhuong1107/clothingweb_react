import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import Header from '../../Components/header';
import './register.css';

function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  const confirmValue = useRef();
  confirmValue.current = watch('matkhau', '');
  console.log(confirmValue);
  return (
    <>
      <Header />
      <form onSubmit={handleSubmit(onsubmit)} id="formRegister">
        <h2>TẠO TÀI KHOẢN</h2>
        <div className="form-group">
          <input
            type="text"
            className="name"
            placeholder="Họ Tên"
            {...register('tenchutk', { required: true })}
          />
          {errors.tenchutk && (
            <span class="form-message">Vui lòng nhập thông tin</span>
          )}
        </div>
        <div className="form-group">
          <input
            type="date"
            className="date"
            placeholder="Ngày sinh"
            {...register('ngaysinh', { required: true })}
          />
          {errors.ngaysinh && (
            <span class="form-message">Vui lòng nhập thông tin</span>
          )}
        </div>
        <div className="form-group">
          <input
            type="text"
            className="address"
            placeholder="Địa chỉ"
            {...register('diachi', { required: true })}
          />
          {errors.diachi && (
            <span class="form-message">Vui lòng nhập thông tin</span>
          )}
        </div>
        <div className="form-group">
          <input
            type="email"
            className="email"
            placeholder="Email"
            {...register('email', {
              required: true,
              pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            })}
          />
          {errors.email ? (
            <>
              {errors.email.type == 'required' && (
                <span class="form-message">Vui lòng nhập thông tin</span>
              )}
              {errors.email.type == 'pattern' && (
                <span class="form-message">Vui lòng nhập đúng email</span>
              )}
            </>
          ) : null}
        </div>
        <div className="form-group">
          <input
            type="text"
            className="phone-number"
            placeholder="Số điện thoại"
            {...register('sdt', {
              required: true,
              pattern:
                /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/,
            })}
          />
          {errors.sdt ? (
            <>
              {errors.sdt.type === 'required' && (
                <span class="form-message">Vui lòng nhập thông tin</span>
              )}
              {errors.sdt.type === 'pattern' && (
                <span class="form-message">
                  Vui lòng nhập đúng số điện thoại
                </span>
              )}
            </>
          ) : null}
        </div>
        <div className="form-group">
          <input
            type="text"
            className="username"
            placeholder="Tên đăng nhập"
            {...register('tendn', { required: true })}
          />
          {errors.tendn && (
            <span class="form-message">Vui lòng nhập thông tin</span>
          )}
        </div>
        <div className="form-group">
          <input
            type="password"
            className="password"
            id="password"
            placeholder="Mật khẩu"
            {...register('matkhau', { required: true })}
          />
          {errors.matkhau && (
            <span class="form-message">Vui lòng nhập thông tin</span>
          )}
        </div>
        <div className="form-group">
          <input
            type="password"
            className="re-password"
            name="matkhaulai"
            placeholder="Nhập lại mật khẩu"
            {...register('matkhaulai', {
              required: true,
              validate: (value) => value === confirmValue.current,
            })}
          />
          {errors.matkhaulai ? (
            <>
              {errors.matkhaulai.type === 'required' && (
                <span class="form-message">Vui lòng nhập thông tin</span>
              )}
              {errors.matkhaulai.type === 'validate' && (
                <span class="form-message">Mật khẩu không khớp</span>
              )}
            </>
          ) : null}
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
