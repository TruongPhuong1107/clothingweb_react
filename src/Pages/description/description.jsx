import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setProducById } from '../../Actions/ProductActions';
import Header from '../../Components/header';
import './description.css';
import { useHistory } from 'react-router';
function Description(props) {
  const product = useSelector((state) => state.products.productById);
  const dispatch = useDispatch();
  const proId = props.match.params.proId;
  const [quantity, setQuantity] = useState(1);
  const [active, setActive] = useState(true);
  const sizeRef = useRef();
  const colorRef = useRef();
  const history = useHistory();

  useEffect(() => {
    axios
      .get(`http://localhost:3002/sanpham/${proId}`)
      .then((response) => {
        dispatch(setProducById(response.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleAddCart = () => {
    const userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
    if (!userInfo) {
      history.push('/login');
    } else {
      const listProduct = [];
      const newProduct = {
        masp: product.masp,
        hinh: product.hinh,
        tensp: product.tensp,
        makt: sizeRef.current.value,
        tenkt: sizeRef.current.selectedOptions[0].text,
        mamau: colorRef.current.value,
        tenmau: colorRef.current.selectedOptions[0].text,
        soluong: Number(quantity),
        dongia: product.dongia,
      };
      if (!sessionStorage.getItem('productCart')) {
        listProduct.push(newProduct);
        sessionStorage.setItem('productCart', JSON.stringify(listProduct));
      } else {
        let temp = JSON.parse(sessionStorage.getItem('productCart'));
        for (let i = 0; i < temp.length; i++) {
          if (
            temp[i].masp == newProduct.masp &&
            temp[i].tenmau == newProduct.tenmau &&
            temp[i].tenkt == newProduct.tenkt
          ) {
            temp[i].soluong = Number(temp[i].soluong) + Number(quantity);
            sessionStorage.setItem('productCart', JSON.stringify(temp));
            return;
          }
        }
        temp.push(newProduct);
        sessionStorage.setItem('productCart', JSON.stringify(temp));
        alert('Th??m v??o gi??? h??ng th??nh c??ng');
      }
    }
  };
  return (
    <>
      <Header />
      <div className="containerItem">
        <div className="left-column">
          <div className="proImgDescription">
            <img
              className="myImage"
              src={process.env.PUBLIC_URL + `/img/${product.hinh}`}
              alt=""
            />
          </div>
        </div>
        <div className="right-column">
          <div className="proInfo">
            <div className="product-name-price">
              <h2 id="product-name-h2">{product.tensp}</h2>
              <span id="product-price">{product.dongia} vn??</span>
            </div>

            <div className="mausac">
              <label for="">M??u s???c</label>
              <br></br>
              <select name="color" id="color-select" ref={colorRef}>
                {(product.chitietmau || []).map((item) => (
                  <option key={item.mamau} value={item.mamau}>
                    {item.tenmau}
                  </option>
                ))}
              </select>
            </div>
            <div className="kichthuoc">
              <label for="">K??ch th?????c</label>
              <br></br>
              <select name="size" id="custom-select" ref={sizeRef}>
                {(product.chitietkt || []).map((item) => (
                  <option key={item.makt} value={item.makt}>
                    {item.tenkt}
                  </option>
                ))}
              </select>
            </div>
            <div className="soluong">
              <label for="">S??? l?????ng</label>
              <br></br>
              <input
                type="number"
                id="quantity"
                min="1"
                max="100"
                value={quantity}
                onChange={(e) => {
                  setQuantity(e.target.value);
                }}
              />
            </div>

            <div className="themvaogio">
              <input
                type="button"
                className="input-themvaogio"
                id="input-themvaogio"
                value="Th??m v??o gi???"
                onClick={handleAddCart}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="product-info-1">
        <ul>
          <li
            className={active ? 'active2' : ''}
            onClick={() => setActive(!active)}
          >
            M?? T???
          </li>
          <li
            className={active ? '' : 'active2'}
            onClick={() => setActive(!active)}
          >
            H?????NG D???N K??CH C???
          </li>
        </ul>
        <div className="tab">
          <div className={active ? 'active' : 'tab-panel tab-panel-detail'}>
            {product.mota}
          </div>
          <div className={active ? 'tab-panel' : 'active'}>
            <img src={process.env.PUBLIC_URL + `/img/size.jpg`} alt="" />
          </div>
        </div>
      </div>
      <footer>
        <div className="footer">
          <p className="copy-right">
            &copy;B???n quy???n thu???c v??? <b> LYS </b>{' '}
          </p>
        </div>
      </footer>
    </>
  );
}

export default Description;
