import React from 'react';

function BannerAd(props) {
  return (
    <div>
      <div className="banner">
        <img src={process.env.PUBLIC_URL + '/img/banner4.jpg'} />
      </div>
    </div>
  );
}

export default BannerAd;
