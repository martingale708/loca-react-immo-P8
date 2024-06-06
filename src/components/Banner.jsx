
import React from 'react';
import "../styles/banner.css";


const Banner = ({ imageUrl, text }) => {
  const bannerStyle = {
    backgroundImage: `url(${imageUrl})`,
  };

  return (
    <div className='banner-image' style={bannerStyle}>
      {text && <h1>{text}</h1>}
    </div>
  );
};
export default Banner;
