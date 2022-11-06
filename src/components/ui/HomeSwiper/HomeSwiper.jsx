import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination} from 'swiper';
import "swiper/css";
import "swiper/css/effect-cards";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { Autoplay } from "swiper";
import metaData from './metaDataSwiper.json'
import "./SwiperSlider.css";
import img from "../../../assets/images/nft-1.png";

// import required modules
import { EffectCards } from "swiper";

export default function HomeSwiper() {
  
  return (
    <>
    {metaData.list.map((row,index)=>
    <style key={index}>{"#s" + row.idnft + ":after{content:'';position: absolute; z-index: -1; width:100%;height: 100%;display: block; background-image:url(" + row.image + ");background-position: center;filter: blur(18px);}"}</style>
    )}
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards,Pagination,Navigation,Autoplay]}
        className="mySwiper"
        loop={true}
        navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: false }}
        autoplay={{delay:2000}}
        speed={1000}
      >
        {metaData.list.map((row,index)=>
        <SwiperSlide key={index}>
          <>
          <div className="w-100 h-100 d-flex align-items-center position-relative" id={"s"+row.idnft} >
          <img className="slidPic" src={img} alt=""/>
          </div>
        </>
          </SwiperSlide>
        )}
      </Swiper>
      <div className="swiper-pagination"></div>
      
    </>
  );
}