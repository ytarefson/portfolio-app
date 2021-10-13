import React from 'react';
import Banner from './Banner';

const Banners = (props) => {
  const banners = props.banners.map((banner, idx) => (
    <Banner banner={banner} key={`banner-${idx}`}/>
  ))
  return (
    <>
    <div className="banners-grid">
      {banners}
    </div>

    <style jsx>{`
      .banners-grid {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
      }
      @media (min-width: 768px) {}
      @media (min-width: 992px) {}
      @media (min-width: 1200px) {}
      @media (min-width: 1600px) {
        .banners-grid {
          gap: 30px;
        }
      }
    `}</style>
    </>
  )
}

export default Banners;