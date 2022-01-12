import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Product from '../product';
import queryString from 'query-string';

function AllProducts() {
  const [allProducts, setAllProducts] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 2,
  });
  const stringPagination = queryString.stringify(pagination);
  const handleChange = () => {
    const newPage = pagination.page + 1;
    setPagination({ ...pagination, page: newPage });
  };
  const fetchProducts = () => {
    axios
      .get(`http://localhost:3002/sanpham?${stringPagination}`)
      .then((response) => {
        setAllProducts([...allProducts, ...response.data]);
      });
  };
  useEffect(() => {
    fetchProducts();
  }, [pagination]);
  return (
    <div>
      <div className="allProduct">
        <h2 className="new-arrivals">TẤT CẢ SẢN PHẨM</h2>
        <div className="new-arrival-list">
          {(allProducts || []).map((product, index) => (
            <Product key={index} productt={product} />
          ))}
        </div>
        <div className="view-all-product" onClick={handleChange}>
          XEM THÊM
        </div>
      </div>
    </div>
  );
}

export default AllProducts;
