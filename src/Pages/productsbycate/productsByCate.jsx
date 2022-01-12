import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setProductsByCateId,
  setActiveSidebar,
} from '../../Actions/ProductActions';
import Product from '../../Components/product';
import Header from '../../Components/header';

function ProductsByCate(props) {
  const cateId = props.match.params.cateId;
  const products = useSelector((state) => state.products.productsByCate);
  const dispatch = useDispatch();
  const active = useSelector((state) => state.products.activesidebar);
  useEffect(() => {
    axios
      .get(`http://localhost:3002/sanphamLoai/${cateId}`)
      .then((response) => {
        dispatch(setProductsByCateId(response.data));
      })
      .catch((err) => {
        console.log(err);
      });
    if (active == true) {
      dispatch(setActiveSidebar(false));
    }
  }, [cateId]);

  return (
    <>
      <Header />
      <div className="main-product-list">
        {products.map((item) => (
          <Product productt={item}></Product>
        ))}
      </div>
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

export default ProductsByCate;
