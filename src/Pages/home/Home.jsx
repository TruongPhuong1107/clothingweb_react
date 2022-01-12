import React from 'react';
import AllProducts from '../../Components/Home/allProducts';
import BannerAd from '../../Components/Home/bannerAd';
import CardList from '../../Components/Home/cardList';
import NewProductList from '../../Components/Home/newProductList';
import Slide from '../../Components/Home/slide';
import Header from '../../Components/header';

function HomePage() {
  return (
    <>
      <Header />
      <Slide />
      <CardList />
      <NewProductList />
      <BannerAd />
      <AllProducts />
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

export default HomePage;
