import React from 'react';

// PropTypes
// caption : string
// subcaption : string

export default function PromoSection(props) {
  let bg = `http://localhost:1337${props.bg_image}`;
    return (
        <section key={`promo-${props.handle}`} className="promo-section">
        <div className="wrapper">
          <div className="text-container">
            <h1 className="promo-title">{props.caption}</h1>
            <span className="description card-title">{props.subcaption ? props.subcaption : ''}</span>
            <p className="preview mid-text">{props.preview ? props.preview : ''}</p>
          </div>
        </div>
        <style jsx>{`
          .promo-section {
            position: relative;
            z-index: 0;
            background-image: ${props.bg_image ? `url("http://localhost:1337${props.bg_image.url}")` : 'unset'};
            background-color: var(--c5);
            background-repeat: no-repeat;
            background-size: cover;
            background-position: 50% 50%;
            padding-top: 60px;
          }
          .promo-section::after {
            position: absolute;
            content: "";
            display: block;
            top: 0;
            left:0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.55);
          }
          .text-conteiner, .promo-title, .mid-text, .description, .sub-title {
            position: relative;
            z-index: 2;
          }
          .promo-title {
            color: white;
          }
          .mid-text {
            color: var(--grey-2);
          }
          .description {
            color: var(--main);
          }
          @media (min-width: 992px) {
            .promo-section {
              padding-top: 90px;
              padding-bottom: 80px;
            }
          }
          @media (min-width: 1200px) {
            .promo-section {
              padding-top: 110px;
              padding-bottom: 80px;
            }
          }
        `}</style>
      </section>
    )
}
