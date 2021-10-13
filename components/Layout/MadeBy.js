import React from 'react';

export default function MadeBy() {
  return (
    <div className="copy-block-2">
      <a href="https://intersell.su" className="is-link" target="blank">
      <span className="is-text">Разработка сайта - </span>
      <div className="is-logo"></div>
      <span className="is-name">intersell.su</span>
      </a>
      <style jsx>{`
      .is-link {
          display: flex;
          align-items: center;
          text-decoration: none;
          color: var(--grey-8);
          transition: color 0.2s ease-out;
        }
        .is-link:hover {
          color: var(--grey-1);
        }
        .is-link:hover .is-logo {
          border: 1px solid var(--grey-1);
        }
        .is-text {
          color: var(--grey-7);
          font-size: 12px;
          margin-right: 4px;
        }
        .is-logo {
          position: relative;
          margin-right: 4px;
          border-radius: 15px;
          width: 18px;
          height: 18px;
          border: 1px solid var(--grey-8);
        }
        .is-logo::after {
          content: "IS";
          position: absolute;
          top: 52%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 10px;
        }
        .is-name {
          //text-transform: uppercase;
        }
      `}</style>
    </div>
  )
}
