import React from 'react';
import videoPath from '../assets/media/Homepage-FSD-Desktop-Tablet-JP.mp4';

const VideoSection = () => {
  return (
    <section id="sec03">
      <video
        src={videoPath}
        loop
        autoPlay
        muted
        playsInline
      ></video>
      <div className="sec03-txt">
        <h2 className="nanum-gothic-extrabold">풀 셀프 드라이빙 (감독형)</h2>
        <div className="btn-wrap" style={{ padding: 0, justifyContent: 'flex-start' }}>
          <button className="btn-blue">자세히 알아보기</button>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
