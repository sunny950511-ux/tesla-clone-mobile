import React from 'react';

const EnergySection = () => {
  return (
    <section id="sec05">
      <div className="sec05-cardlist">
        <div className="sec05-card powerwall">
          <div className="sec05-card-txt">
            <h2 className="nanum-gothic-extrabold">Powerwall</h2>
            <p>정전 시에도 조명은 그대로</p>
            <div className="btn-wrap" style={{ padding: 0, justifyContent: 'flex-start' }}>
              <button className="btn-blue">자세히 알아보기</button>
            </div>
          </div>
        </div>
        <div className="sec05-card megapack">
          <div className="sec05-card-txt">
            <h2 className="nanum-gothic-extrabold">Megapack</h2>
            <p>대규모 에너지 공급을 위한 초대형 배터리 시스템</p>
            <div className="btn-wrap" style={{ padding: 0, justifyContent: 'flex-start' }}>
              <button className="btn-blue">자세히 알아보기</button>
            </div>
          </div>
        </div>
      </div>
      <div className="indicator">
        <div className="active"></div>
        <div></div>
      </div>
    </section>
  );
};

export default EnergySection;
