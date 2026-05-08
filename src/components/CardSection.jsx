import React from 'react';

const CardSection = () => {
  return (
    <section id="sec01">
      <div className="sec01-cardlist">
        <div className="sec01-card model-y">
          <h3>미드사이즈 SUV</h3>
          <div className="bottom-text">
            <h2 className="nanum-gothic-extrabold">Model Y</h2>
            <div className="btn-wrap" style={{ padding: 0 }}>
              <button className="btn-blue">주문하기</button>
              <button className="btn-white">자세히 알아보기</button>
            </div>
          </div>
        </div>
        <div className="sec01-card cybertruck">
          <h3>유틸리티 트럭</h3>
          <div className="bottom-text">
            <h2 className="nanum-gothic-extrabold">CYBER TRUCK</h2>
            <div className="btn-wrap" style={{ padding: 0 }}>
              <button className="btn-blue">주문하기</button>
              <button className="btn-white">자세히 알아보기</button>
            </div>
          </div>
        </div>
      </div>
      <div className="indicator">
        <div className="active"></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
};

export default CardSection;
