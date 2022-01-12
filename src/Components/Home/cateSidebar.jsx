import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { setAllCategory } from '../../Actions/categoryActions';

function CateSidebar() {
  const active = useSelector((state) => state.products.activesidebar);
  const cateLists = useSelector((state) => state.categoryItems.cateItems);
  const dispatch = useDispatch();
  useEffect(async () => {
    const respond = await axios
      .get('http://localhost:3002/loai')
      .catch((err) => {
        console.log(err);
      });
    dispatch(setAllCategory(respond.data));
  }, []);
  return (
    <div className={active ? 'mainSidebar active' : 'mainSidebar'}>
      <nav className="sideBar">
        <ul className="cateList">
          {cateLists.map((item) => (
            <Link
              to={`/productsByCate/${item.maloai}`}
              style={{ textDecoration: 'none' }}
              key={item.maloai}
            >
              <li>{item.tenloai}</li>
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default CateSidebar;
