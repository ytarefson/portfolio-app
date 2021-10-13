import Link from 'next/link'
import React from 'react'


export default function Banner(props) {
    return (
      <div className={`banner-card ${props.banner.image ? "with-bg" : ""}`}>
        <span className="card-title">{props.banner.name}</span>
        <span className="min-text">{props.banner.content}</span>
        <Link href={props.banner.url}>
          <a className="card-link">Подробнее...</a>
        </Link>
        <style jsx>{`
          .banner-card {
            max-width: 230px;
            display: flex;
            flex-direction: column;
            padding: 60px 30px;
            background-image: ${props.banner.image ? `url("http://localhost:1337${props.banner.image.url}")` : 'unset'};
            background-color: var(--grey-0);
            background-repeat: no-repeat;
            background-size: cover;
            background-position: 50% 50%;
          }
          .banner-card .card-link {
            color: var(--main);
            z-index: 1;
            font-size: 14px;
          }
          .with-bg {
            position: relative;
          }
          .with-bg::after {
            z-index: 0;
            position: absolute;
            content: "";
            display: block;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: rgba(0,0,0,0.35);
          }
          .with-bg .card-title {
            color: var(--grey-0);
            z-index: 1;
          }
          .with-bg .min-text {
            color: var(--grey-3);
            z-index: 1;
          }
          `}</style>
      </div>
    )
}
