import css from 'styled-jsx/css';

export default css.global`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'RussianRail';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url('/fonts/RussianRail/RussianRail-G-Pro.ttf') format('truetype');
  }

  @font-face {
    font-family: 'IBMPlexSans';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url('/fonts/IBMPlexSans/IBMPlexSans-Light.ttf') format('truetype');
  }
  @font-face {
    font-family: 'IBMPlexSans';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url('/fonts/IBMPlexSans/IBMPlexSans-Regular.ttf') format('truetype');
  }
  @font-face {
    font-family: 'IBMPlexSans';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url('/fonts/IBMPlexSans/IBMPlexSans-Medium.ttf') format('truetype');
  }
  
  body,
  html {
    box-sizing: border-box;
    font-family: 'IBMPlexSans', Arial, sans-serif;
    font-display: swap;
    background-color: var(--c4);
    color: var(--c5);
    scroll-behavior: smooth;
    max-width: 2440px;
    margin: 0;
    padding: 0;
    --main: #e21a1a;
    --c1: #464a53;
    --c2: #bed1f4;
    --c3: #a9aec9;
    --c4: #e9eaed;
    --c5: #1f1f24;
    --grey-0: #ffffff;
    --grey-1: #eeeeee;
    --grey-2: #d8d9d9;
    --grey-3: #bdbebd;
    --grey-4: #a0a0a0;
    --grey-5: #808080;
    --grey-6: #606060;
    --grey-7: #424242;
    --grey-8: #272727;
    --grey-9: #101010;
    --grey-10: #000000;
    --gradient: linear-gradient(25deg, var(--c11) 0%, var(--c2) 100%);
    --cs-min: 2px 2px 4px rgba(0, 0, 0, 0.15);
    --cs-mid: 0px 15px 10px rgba(56, 38, 24, 0.2);
    --cs-max: 0px 25px 20px -16px rgba(110, 74, 47, 0.2);
    --br-min: 1px;
    --br-mid: 5px;
    --br-max: 9px;
  }
  ::-webkit-scrollbar {
    width: 1.1em;
  }
  ::-webkit-scrollbar-track {
    //box-shadow: inset 3px 0 7px -2px rgba(0, 0, 0, 0.2);
    background-color: var(--grey-7);
    border-left: 2px solid rgba(0,0,0,0.1);
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--main);
    border-radius: 2px;
    border-top: 4px solid rgba(0,0,0,0.1);
    border-bottom: 4px solid rgba(0,0,0,0.1);
  }
  /* ::marker {
    color: var(--main);
  } */
  a:-webkit-any-link {
    color: -webkit-link;
    cursor: pointer;
    text-decoration: underline;
  }
  .color-main {
    color: var(--main) !important;
  }
  .g-color {
    color: var(--c1) !important;
  }
  .white {
    color: white !important;
  }
  .m-0 {
    margin: 0 !important;
  }
  .ml-5 {
    margin-left: 20px !important;
  }
  .mt-0 {
    margin-top: 0;
  }
  .mt-1 {
    margin-top: 3px;
  }
  .mt-2 {
    margin-top: 6px;
  }
  .mt-3 {
    margin-top: 9px;
  }
  .mt-4 {
    margin-top: 12px;
  }
  .mt-5 {
    margin-top: 30px!important;
  }
  .mb-0 {
    margin-bottom: 0!important;
  }
  .mb-1 {
    margin-bottom: 3px !important;
  }
  .mb-2 {
    margin-bottom: 6px !important;
  }
  .mb-3 {
    margin-bottom: 9px !important;
  }
  .mb-4 {
    margin-bottom: 12px !important;
  }
  .mb-5 {
    margin-bottom: 18px !important;
  }
  .p-0 {
    padding: 0 !important;
  }
  .pt-1 {
    padding-top: 3px;
  }
  .pt-2 {
    padding-top: 6px;
  }
  .pt-3 {
    padding-top: 9px;
  }
  .pt-4 {
    padding-top: 12px;
  }
  .pt-5 {
    padding-top: 15px;
  }
  .pb-1 {
    padding-bottom: 3px;
  }
  .pb-2 {
    padding-bottom: 6px;
  }
  .pb-3 {
    padding-bottom: 9px;
  }
  .pb-4 {
    padding-bottom: 12px;
  }
  .pb-5 {
    padding-bottom: 15px;
  }
  .mini-paddings {
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .buttons {
    width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    height: auto !important;
    display: grid;
    gap: 15px;
    margin-top: 20px;
  }
  .promo-button {
    width: 100%;
    font-family: 'RussianRail';
    padding-left: 24px;
    padding-right: 24px;
    cursor: pointer;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    border-radius: var(--br-min);
    color: var(--grey-0);
    background-color: var(--main);
    text-align: center;
    line-height: 50px;
    font-size: 16px;
    text-decoration: none;
    text-transform: uppercase;
    transition: all 0.2s ease-out;
  }
  .promo-button:hover {
    background-color: darken(var(--main), 10%);
  }
  .promo-button:active {
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.35);
  }
  .button-1 {
    width: 100%;
    font-family: 'RussianRail';
    padding-left: 24px;
    padding-right: 24px;
    cursor: pointer;
    outline: none;
    display: block;
    width: 100%;
    height: 50px;
    border: 1px solid var(--c1);
    border-radius: var(--br-min);
    background-color: transparent;
    color: var(--c1);
    text-align: center;
    line-height: 54px;
    font-size: 16px;
    text-decoration: none;
    text-transform: uppercase;
    transition: all 0.2s ease-out;
  }
  .button-1:hover {
    border: 1px solid var(--main);
    background-color: var(--main);
  }
  .button-1:active {
    box-shadow: 3px 3px 5px rgba(196, 35, 40, 0.3);
  }
  .button-2 {
    width: 100%;
    font-family: 'RussianRail';
    padding-left: 24px;
    padding-right: 24px;
    cursor: pointer;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    border-radius: var(--br-min);
    color: var(--grey-0);
    background-color: var(--c2);
    text-align: center;
    line-height: 50px;
    font-size: 16px;
    text-decoration: none;
    text-transform: uppercase;
    transition: all 0.2s ease-out;
  }
  .button-2:hover {
    background-color: darken(var(--c2), 10%);
  }
  .button-2:active {
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.35);
  }
  .mini-button {
    padding-left: 6px;
    padding-right: 6px;
    display: block;
    font-family: "RussianRail";
    width: 100%;
    max-width: 280px;
    height: 32px;
    border-radius: var(--br-min);
    border: 1px solid var(--grey-5);
    color: var(--grey-6);
    font-size: 13px;
    font-weight: 500;
    line-height: 32px;
    letter-spacing: 1px;
    text-decoration: none;
    text-align: center;
    transition: all 0.1s ease-out;
    background-color: transparent;
  }
  .mini-button:hover {
    background-image: var(--gradient);
    color: white;
    border: 1px solid var(--main);
  }
  .mini-button:active {
    background-color: var(--main);
  }
  section {
    padding-top: 30px;
    padding-bottom: 30px;
  }
  .wrapper {
    width: auto;
    height: 100%;
    margin: 0 auto;
    padding: 0 45px 0 45px;
  }
  .minus-wrapper {
    position: relative;
    margin-left: -45px;
    margin-right: -45px;
  }
  .minus-right-wrapper {
    position: relative;
    margin-right: -45px;
  }
  .component-paddings {
    padding-top: 30px;
    padding-bottom: 30px;
  }
  .grid-4 {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 12px;
  }
  .card-border {
    padding: 15px;
    border: 1px solid rgba(0,0,0,0.085);
    border-radius: var(--br-min);
  }
  .card {
    height: 100%;
    display: block;
    text-decoration: none;
    padding: 12px;
    padding-top: 20px;
    border-radius: var(--br-min);
    border: 1px solid rgba(0,0,0,0.085);
    transition: all 0.2s ease-out;
  }
  .card:hover {
    //box-shadow: var(--cs-min);
    background-color: white;
  }
  .card:active {
    box-shadow: var(--cs-max);
    box-shadow: var(--cs-max-inset);
  }
  .keen-slider {
    padding-top: 15px;
    padding-bottom: 15px;
  }
  .keen-slider__slide {
    text-decoration: none;
    overflow: visible;
  }
  .keen-slider__slide img {
    width: 100%;
    object-fit: contain;
  }
  .dots {
    display: flex !important;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    list-style-type: none;
    margin-top: 7px;
  }
  .dot {
    width: 7px;
    height: 7px;
    display: block;
    background-color: var(--grey-3);
    border-radius: 50%;
    border: none;
    margin: 0 7px;
  }
  .dots .active {
    width: 21px;
    height: 7px;
    background-color: var(--main);
    position: relative;
    border-radius: 2px;
    box-shadow: -2px -2px 3px rgba(255,255,255,1), 2px 2px 3px rgba(0,0,0,0.05);
  }
  .promo-title {
    font-family: 'RussianRail';
    margin-bottom: 20px;
    display: block;
    font-size: 26px;
    line-height: 36px;
    text-transform: uppercase;
    text-decoration: none;
  }
  .markdown h1,
  .page-title {
    display: block;
    font-family: 'RussianRail';
    margin-bottom: 20px;
    font-size: 28px;
    line-height: 32px;
    font-weight: 500;
    text-transform: uppercase;
    text-decoration: none;
  }
  .markdown h2,
  .section-title {
    display: block;
    font-family: 'RussianRail';
    margin-bottom: 15px;
    font-size: 22px;
    line-height: 30px;
    font-weight: 500;
    text-transform: uppercase;
    text-decoration: none;
  }
  .markdown h3,
  .card-title {
    display: block;
    font-family: 'RussianRail';
    margin-bottom: 15px;
    font-size: 18px;
    line-height: 28px;
    font-weight: 500;
    text-transform: uppercase;
    text-decoration: none;
  }
  .markdown h4, h4,
  .title {
    display: block;
    font-family: 'RussianRail';
    margin-bottom: 15px;
    font-size: 18px;
    line-height: 26px;
    font-weight: 500;
    text-decoration: none;
  }
  .markdown h5, h5,
  .min-title {
    margin-bottom: 15px;
    display: block;
    font-family: 'IBMPlexSans';
    font-size: 16px;
    line-height: 22px;
    font-weight: 700;
    text-decoration: none;
  }
  .markdown h6, h6,
  .sub-title {
    margin-bottom: 15px;
    display: block;
    font-family: 'IBMPlexSans';
    font-size: 14px;
    line-height: 16px;
    text-transform: uppercase;
    text-decoration: none;
  }
  .promo-text .markdown p,
  .promo-text {
    display: block;
    margin-bottom: 20px;
    font-family: 'IBMPlexSans';
    font-size: 24px;
    line-height: 30px;
    font-weight: 500;
    text-decoration: none;
  }
  .big-text .markdown p,
  .big-text {
    display: block;
    margin-bottom: 15px;
    font-family: 'IBMPlexSans';
    font-size: 18px;
    line-height: 24px;
    font-weight: 500;
    text-decoration: none;
  }
  .mid-text .markdown p,
  .mid-text {
    display: block;
    margin-bottom: 12px;
    font-family: 'IBMPlexSans';
    font-size: 16px;
    line-height: 22px;
    text-decoration: none;
  }
  .text .markdown p,
  .text {
    font-family: 'IBMPlexSans';
    display: block;
    margin-bottom: 12px;
    font-size: 14px;
    line-height: 18px;
    font-weight: 500;
    text-decoration: none;
  }
  .min-text .markdown p,
  .min-text {
    display: block;
    margin-bottom: 9px;
    font-family: 'IBMPlexSans';
    font-size: 12px;
    line-height: 16px;
    font-weight: 500;
    text-decoration: none;
  }
  .caps-text {
    font-family: 'IBMPlexSans';
    display: block;
    margin-bottom: 12px;
    font-size: 14px;
    line-height: 18px;
    text-decoration: none;
    text-transform: uppercase;
  }
  .markdown p {
    margin-bottom: 15px;
    font-size: 16px;
    line-height: 23px;
  }
  .markdown ul, .markdown ol {
    margin-top: 15px;
    margin-bottom: 30px;
  }
  .markdown ul > li {
    position: relative;
    display: block;
    margin-bottom: 10px;
    margin-left: 10px;
    padding-left: 15px;
    font-size: 15px;
    line-height: 19px;
    text-decoration: none;
    color: var(--grey-9);
  }
  .markdown ol > li {
    margin-left: 15px;
    padding-left: 15px;
    line-height: 28px;
  }
  li::before {
    top: 8px;
    position: absolute;
    left: -8px;
    content: "";
    border-radius: 2px;
    display: block;
    width: 6px;
    height: 6px;
    background-color: var(--grey-3);
  }
  .markdown a {
    color: var(--main);
  }
  .markdown blockquote {
    margin-bottom: 12px;
    border-radius: var(--br-mid);
    padding: 15px;
    padding-top: 20px;
    padding-left: 25px;
    background-color: white;
    font-style: italic;
  }
  .markdown table {
    border-collapse: collapse;
    width: 100%;
    font-size: 14px;
    margin-bottom: 30px;
  }
  .markdown table,
  th,
  td {
    border: 1px solid var(--grey-2);
    padding: 3px;
    padding-left: 10px;
  }
  .markdown thead {
    background-color: var(--grey-7);
    color: var(--grey-1);
    text-align: left;
  }
  .markdown tbody {
  }
  .markdown tr:nth-child(even) {
    background-color: #fafafa;
  }
  .markdown th {
    height: 50px;
    font-size: 12px;
    font-weight: 100;
  }
  .markdown td {
    height: 40px;
    line-height: 16px;
    vertical-align: center;
    color: var(--grey-7);
  }
  .section-divider {
    position: relative;
  }
  .section-divider::before {
    position: absolute;
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    bottom: 0;
    left: 50%;
    border-radius: 0 0 2px 2px;
    transform: translateX(-50%);
    background-color: rgba(255,255,255,0.075);
  }
  .section-divider::after {
    position: absolute;
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    bottom: 1px;
    left: 50%;
    border-radius: 2px 2px 0 0;
    transform: translateX(-50%);
    background-color: rgba(0, 0, 0, 0.12);
  }
  @media (min-width: 768px) {
    section {
      padding-top: 45px;
      padding-bottom: 45px;
    }
    .wrapper {
      max-width: 760px;
      padding: 0;
    }
    .minus-wrapper {
      position: relative;
      margin-left: 0px;
      margin-right: 0px;
    }
    .minus-right-wrapper {
      margin-right: 0px;
    }
    .promo-title {
      margin-bottom: 20px;
      font-size: 34px;
      line-height: 40px;
    }
  }
  @media (min-width: 992px) {
    .wrapper {
      max-width: 900px;
    }
    .first-section {
      padding-top: 45px;
    }
    .markdown iframe {
      margin-right: 15px;
    }
  }
  @media (min-width: 1200px) {
    .wrapper {
      width: auto;
      height: 100%;
      max-width: 1050px;
      margin: 0 auto;
      padding: 0;
    }
    section {
      padding-top: 45px;
      padding-bottom: 45px;
    }
    .first-section {
      padding-top: 30px;
    }
    .mini-paddings {
      padding-top: 30px;
      padding-bottom: 60px;
    }
    .component-paddings {
      padding-top: 35px;
      padding-bottom: 35px;
    }
    .card-border {
      padding: 20px;
    }
    .buttons {
      width: 100%;
      margin-top: 30px;
    }
    .promo-button {
      height: 50px;
      line-height: 52px;
      font-size: 16px;
    }
    .button-1 {
      height: 50px;
      line-height: 50px;
      font-size: 16px;
    }
    .button-2 {
      height: 50px;
      line-height: 50px;
      font-size: 16px;
    }
    .keen-slider {
      z-index: 0;
    }
    .dots {
      display: flex !important;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: flex-end;
      align-items: center;
      list-style-type: none;
      margin-top: 7px;
    }
    .dot {
      width: 7px;
      height: 7px;
      display: block;
      border-radius: 2px;
      border: none;
      margin: 0 0 0 16px;
    }
    .dots .active {
      width: 20px;
      height: 7px;
      background-color: var(--main);
      position: relative;
    }
    .arrow {
      display: block;
      position: absolute;
      z-index: 1;
      padding: 6px;
      transform-origin: 50% 50%;
    }
    .arrow--left {
      display: block;
      cursor: pointer;
      width: 45px;
      height: 45px;
      bottom: 7px;
      left: 15px;
      transform-origin: 50% 50%;
      transform: translateY(-50%);
      background-color: rgba(255,255,255,0);
      border: 2px solid rgba(255,255,255,0.9);
      transition: all 0.2s ease-out;
      border-radius: 2px;
    }
    .arrow--left:hover {
      //transform: scale(1.15) translateY(-50%);
      //box-shadow: 3px 3px 3px rgba(0,0,0,0.275);
      background-color: rgba(0,0,0,0.4);
    }
    .arrow--left:active {
      box-shadow: 1px 1px 1px rgba(0,0,0,0.275);
    }
    .arrow--right {
      display: block;
      cursor: pointer;
      width: 45px;
      height: 45px;
      bottom: 7px;
      left: 69px;
      transform: translateY(-50%);
      background-color: rgba(255,255,255,0);
      border: 2px solid rgba(255,255,255,0.9);
      border-radius: 2px;
      transition: all 0.2s ease-out;
    }
    .arrow--right:hover {
      background-color: rgba(0,0,0,0.4);
      //transform: scale(1.15) translateY(-50%);
      //box-shadow: 3px 3px 3px rgba(0,0,0,0.275);
    }
    .arrow--right:active {
      box-shadow: -1px -1px 1px rgba(0,0,0,0.275);
    }
    .markdown iframe {
      margin-right: 18px;
    }
    .promo-title {
    }
    .markdown h1,
    .page-title {
    }
    .markdown h2,
    .section-title {
      font-size: 24px;
      line-height: 32px;
    }
    .markdown h3,
    .card-title {
    }
    .markdown h4, h4,
    .title {
    }
    .markdown h5, h5,
    .min-title {
    }
    .markdown h6, h6,
    .sub-title {
    }
    .promo-text .markdown p,
    .promo-text {
      display: block;
      margin-bottom: 20px;
      font-family: 'IBMPlexSans';
      font-size: 24px;
      line-height: 30px;
      font-weight: 500;
      text-decoration: none;
    }
    .big-text .markdown p,
    .big-text {
      display: block;
      margin-bottom: 15px;
      font-family: 'IBMPlexSans';
      font-size: 18px;
      line-height: 24px;
      font-weight: 500;
      text-decoration: none;
    }
    .mid-text .markdown p,
    .mid-text {
      display: block;
      margin-bottom: 12px;
      font-family: 'IBMPlexSans';
      font-size: 16px;
      line-height: 22px;
      text-decoration: none;
    }
    .text .markdown p,
    .text {
      font-family: 'IBMPlexSans';
      display: block;
      margin-bottom: 12px;
      font-size: 14px;
      line-height: 18px;
      font-weight: 500;
      text-decoration: none;
    }
    .min-text .markdown p,
    .min-text {
      display: block;
      margin-bottom: 9px;
      font-family: 'IBMPlexSans';
      font-size: 12px;
      line-height: 16px;
      font-weight: 500;
      text-decoration: none;
    }
    .caps-text {
      font-family: 'IBMPlexSans';
      display: block;
      margin-bottom: 12px;
      font-size: 14px;
      line-height: 18px;
      text-decoration: none;
      text-transform: uppercase;
    }
    .markdown p {
      margin-bottom: 15px;
      font-size: 16px;
      line-height: 22px;
    }
    .markdown ul, .markdown ol {
      margin-top: 15px;
      margin-bottom: 30px;
    }
    .markdown ul > li {
      position: relative;
      display: block;
      margin-bottom: 10px;
      margin-left: 12px;
      font-size: 15px;
      padding-left: 15px;
      line-height: 20px;
      text-decoration: none;
      color: var(--grey-8);
    }
    .markdown ol > li {
      margin-bottom: 10px;
      margin-left: 15px;
      padding-left: 15px;
      font-size: 15px;
      line-height: 20px;
    }
  }
  @media (min-width: 1600px) {
    .wrapper {
      width: auto;
      height: 100%;
      max-width: 1420px;
    }
    .inner-wrapper {
      width: 900px;
      margin-right: auto;
      margin-left: auto;
    }
    .first-section {
      padding-top: 30px !important;
    }
    section {
      padding-top: 50px;
      padding-bottom: 50px;
    }
    .text-container {
      width: 75%;
    }
    .card {
      padding: 20px;
      //padding-top: 45px;
    }
    .buttons {
      width: 100%;
      gap: 20px;
    }
    .promo-button {
      height: 50px;
      line-height: 50px;
      font-size: 18px;
    }
    .button-1 {
      height: 50px;
      line-height: 50px;
      font-size: 18px;
    }
    .button-2 {
      height: 50px;
      line-height: 50px;
      font-size: 18px;
    }
    .markdown p {
      margin-bottom: 15px;
      font-size: 16px;
      line-height: 24px;
    }
    .markdown ul, .markdown ol {
      margin-top: 15px;
      margin-bottom: 30px;
    }
    .markdown ul > li {
      position: relative;
      display: block;
      margin-bottom: 10px;
      margin-left: 10px;
      font-size: 15px;
      line-height: 22px;
      text-decoration: none;
      color: var(--grey-8);
    }
    .markdown ol > li {
      margin-bottom: 10px;
      margin-left: 15px;
      padding-left: 15px;
      font-size: 15px;
      line-height: 22px;
    }
    .markdown iframe {
      margin-right: 20px;
    }
  }
  @media (min-width: 1900px) {
    .wrapper {
      max-width: 1680px;
    }
  }
`;
