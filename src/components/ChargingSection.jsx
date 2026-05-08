import React from 'react';

const ChargingSection = () => {
  return (
    <section id="sec04">
      <div className="sec04-img"></div>
      <div className="sec04-txt">
        <div className="sec04-txt-1">
          <h2 className="nanum-gothic-extrabold">충전</h2>
          <p>주변에서 이용 가능한 Tesla 수퍼차저 및 데스티네이션 차저 네트워크를 확인해 보세요.</p>
        </div>
        <div className="sec04-txt-2">
          <div className="sec04-txt-icons">
            <div className="sec04-txt-icons-num">
              <h2 className="nanum-gothic-extrabold">7,342</h2>
              <img src="/src/assets/icons/energy.svg" alt="수퍼차저 번개 아이콘" />
            </div>
            <p>수퍼차저</p>
          </div>
          <div className="sec04-txt-icons">
            <div className="sec04-txt-icons-num">
              <h2 className="nanum-gothic-extrabold">711</h2>
              <img src="/src/assets/icons/1212.svg" alt="수퍼차저 콘센트 아이콘" />
            </div>
            <p>데스티네이션 차저</p>
          </div>
        </div>
        <div className="btn-wrap" style={{ padding: 0, justifyContent: 'flex-start' }}>
          <button className="btn-black">충전 네트워크 보기</button>
          <button className="btn-white">자세히 알아보기</button>
        </div>
      </div>
    </section>
  );
};

export default ChargingSection;
