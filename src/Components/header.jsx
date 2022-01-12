import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setActiveSidebar } from '../Actions/ProductActions';
import CateSidebar from './Home/cateSidebar';
function Header() {
  const [sticky, setSticky] = useState(false);
  const dispatch = useDispatch();
  const [activeState, setActiveState] = useState(false);
  const [activeSearch, setActiveSearch] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [loginInfo, setLoginInfo] = useState(
    sessionStorage.getItem('userInfo'),
  );
  const handleActive = () => {
    setActiveState(!activeState);
    dispatch(setActiveSidebar(activeState));
  };
  const handleActiveSearch = () => {
    setActiveSearch(!activeSearch);
  };
  const srollFunction = () => {
    if (window.scrollY > 0) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  let button;
  if (loginInfo) {
    const tenchutk = JSON.parse(loginInfo).tenchutk;
    button = (
      <span id="button">
        <a href="">
          <span>{tenchutk}</span>
        </a>
        <a href="" className="logout">
          Đăng xuất
        </a>
      </span>
    );
  } else {
    button = (
      <Link to="/login">
        <i class="fas fa-user"></i>
      </Link>
    );
  }
  window.addEventListener('scroll', srollFunction);
  return (
    <header className={sticky ? 'sticky' : ''}>
      <div className="container-group">
        <div className="box-actions-left">
          <div className="justify">
            <button
              className="fas fa-align-justify"
              value="dropdown"
              id="justify"
              onClick={handleActive}
            ></button>
            <CateSidebar />
          </div>
          <div className="home">
            <Link to="/">HOME</Link>
          </div>
        </div>
        <div className="box-title">
          <a>LYS</a>
        </div>
        <div className="box-actions-right">
          <div className="search-box">
            <input
              id="search"
              className={activeSearch ? 'search active' : 'search'}
              type="text"
              placeholder="Search..."
            />
            <i
              id="icon-search"
              onClick={handleActiveSearch}
              className="fas fa-search"
            ></i>
          </div>
          <div className="login-check" id="login-check">
            {button}
          </div>
          <div className="cart-box">
            <Link to="/cart" className="cart">
              CART
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
