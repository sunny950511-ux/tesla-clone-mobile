import React from 'react';
import Header from './Header';

const Hero = () => {
  return (
    <header className="hero-header">
      <Header />
      <div className="hero-content">
        <h2 className="nanum-gothic-extrabold">Model 3</h2>
        <div className="btn-wrap">
          <button className="btn-blue">주문하기</button>
          <button className="btn-white">시승신청</button>
        </div>
      </div>
    </header>
  );
};

export default Hero;
