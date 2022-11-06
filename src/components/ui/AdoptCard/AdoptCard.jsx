import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../NftCard/nftCard.css";

const AdoptCard = (props) => {
  const { title, id, currentBid, creatorImg, imgUrl, creator } = props.item;

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="single__nft__card">
      <div className="nft__img">
        <img src={imgUrl} alt="" className="w-100" />
      </div>

      <div className="nft__content">
        <h5 className="nft__title">
          <Link to={`/adopt/${id}`}>{title}</Link>
        </h5>

        <div className="creator__info-wrapper d-flex gap-3">
          <div className="creator__img">
            <img src={creatorImg} alt="" className="w-100" />
          </div>

          <div className="creator__info w-100 d-flex align-items-center justify-content-between">
            <div>
              <h6>Created By</h6>
              <p>{creator}</p>
            </div>

          </div>
        </div>

        <div className=" mt-3 d-flex align-items-center justify-content-center">
         
        <Link to={`/adopt/${id}`}> <button
            className="bid__btn d-flex align-items-center gap-1">
            
            <i class="ri-shopping-bag-line"></i> Adopt Now
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdoptCard;
