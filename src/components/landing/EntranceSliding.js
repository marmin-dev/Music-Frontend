import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {

} from "./SlideStyle";
import './Slick.css'


const EntranceSliding = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => (
      <div
        style={{
          width: '100%',
          position: 'relative',
          bottom: '20vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <ul
          style={{
            padding: '0'
          }}
        > {dots} </ul>
      </div>
    ),
    dotsClass: 'dots_custom'
  };
  return (
    <div className="sliding">
      <Slider {...settings}>
        <div className="logoItem">
          <img className="logo-img" src="./img/logo4.png" />
          <div className="logo-txt">
            <p>너의 사연은?</p>
          </div>
        </div>
        <div className="slidingItem">
          <img className="slide-img" src="./img/rawplace2.jpg" />
          <div className="slide-chapter">
            <p>STEP1. 사연 등록하기</p>
          </div>
          <img className="chapter-img" src="./img/write11.png"/>
          <div className="slide-txt">
            <p>너의 사연은에 오신걸 환영합니다.<br/>여러분의 소중한 사연을 공유하고<br/>음악을 신청하세요.</p>
          </div>
        </div>
        <div className="slidingItem">
          <img className="slide-img" src="./img/musicplace6.png" />
          <div className="slide-chapter">
            <p>STEP2. 노래 추천받기</p>
          </div>
          <img className="chapter-img" src="./img/ai6.png"/>
          <div className="slide-txt">
            <p>AI모델이 사연을 분석해줍니다.<br/>여러분의 감정을 확인하고<br/>거기에 맞는 음악을 추천받으세요.</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default EntranceSliding;
