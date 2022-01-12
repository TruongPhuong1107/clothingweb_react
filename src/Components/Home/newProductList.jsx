import React from 'react';
import './newcollection.css';
function NewProductList() {
  return (
    <div className="collections">
      <div className="collectionsTitle">
        <p>bộ sưu tập mới</p>
      </div>
      <div className="collectionList">
        <div className="collectionItem">
          <div className="imgBox">
            <img src={process.env.PUBLIC_URL + '/img/col1.jpg'} alt="" />
          </div>
          <div className="collectionName name1">top collection</div>
        </div>
        <div className="collectionItem">
          <div className="imgBox">
            <img src={process.env.PUBLIC_URL + '/img/col2.jpg'} alt="" />
          </div>
          <div className="collectionName name2">skirt collection</div>
        </div>
        <div className="collectionItem">
          <div className="imgBox">
            <img src={process.env.PUBLIC_URL + '/img/col3.jpg'} alt="" />
          </div>
          <div className="collectionName name3">jumsuit collection</div>
        </div>
      </div>
    </div>
  );
}
export default NewProductList;
