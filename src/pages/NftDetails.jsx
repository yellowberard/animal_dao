import React, { useState, useEffect } from "react";

import CommonSection from "../components/ui/CommonSection/CommonSection";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { NFT__DATA } from "../assets/data/data";
import { onValue, ref } from 'firebase/database';
import { db } from '../firebase';
import creatorImg from "../assets/images/ava-01.png";

import LiveAuction from "../components/ui/LiveAuction/LiveAuction";

import "../styles/nft-details.css";

import { Link } from "react-router-dom";

const NftDetails = () => {
  const { id } = useParams();

  const [reload, setReload] = useState(true);
  const [singleFormData, setFormData] = useState([]);
  if(singleFormData===[]){
    setReload(false)
  }
  useEffect(() => { 
    onValue(ref(db , `/nft/${id-1}`),(snapshot)=>{
      const data = snapshot.val();
      setFormData(data);
      console.log(singleFormData);
    });
  }, [reload]);


  return (
    <>
      <CommonSection title={singleFormData.title} />

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <img
                src={singleFormData.image}
                alt=""
                className="w-100 single__nft-img"
              />
            </Col>

            <Col lg="6" md="6" sm="6">
              <div className="single__nft__content">
                <h2>{singleFormData.title}</h2>

                <div className=" d-flex align-items-center justify-content-between mt-4 mb-4">
                  <div className=" d-flex align-items-center gap-4 single__nft-seen">
                    <span>
                      <i class="ri-eye-line"></i> 234
                    </span>
                    <span>
                      <i class="ri-heart-line"></i> 123
                    </span>
                  </div>

                  <div className=" d-flex align-items-center gap-2 single__nft-more">
                    <span>
                      <i class="ri-send-plane-line"></i>
                    </span>
                    <span>
                      <i class="ri-more-2-line"></i>
                    </span>
                  </div>
                </div>

                <div className="nft__creator d-flex gap-3 align-items-center">
                  <div className="creator__img">
                    <img src={creatorImg} alt="" className="w-100" />
                  </div>

                  <div className="creator__detail">
                    <p>Created By</p>
                    <h6>{singleFormData.name}</h6>
                  </div>
                </div>

                <p className="my-4 ">{singleFormData.description}</p>
                <button className="singleNft-btn d-flex align-items-center gap-2 w-100">
                  <i class="ri-shopping-bag-line"></i>
                  <Link to="/wallet">Buy now</Link>
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <LiveAuction />
    </>
  );
};

export default NftDetails;
