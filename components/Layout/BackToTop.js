import React, {useState, useEffect} from 'react'

export default function BackToTop() {
  const [widgetVisibility, setWidgetVisibility] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll, { passive: true });
    };
  });

  let offset;

  function handleScroll() {
    if (window.pageYOffset > 300) {
      setWidgetVisibility(true);
    } else setWidgetVisibility(false);

    offset = window.pageYOffset;
  };
  
  return (
      <a title="К началу страницы" className={`back-to-top ${widgetVisibility ? 'widget-visible' : 'widget-invisible'}`} href="#top">
        <img className='arrow-up lazyload' data-sizes="auto" data-src="/img/icons/arrow-up.svg" alt="Вернуться наверх"/>
      <style jsx>{`
        .widget-visible {
          visibility: visible;
          opacity: 1;
          transform: scale(1);
          top: 20px;
        }
        .widget-invisible {
          visibility: hidden;
          opacity: 0;
          transform: scale(0.35);
          top: -10px;
        }
        .back-to-top {
          transition: all 0.1s ease-out;
          display: flex;
          justify-content: center;
          align-items: center;
          position: fixed;
          content: '';
          width: 35px;
          height: 35px;
          right: 20px;          
          background-color: var(--c1);
          border-radius: var(--border-radius);
          z-index: 1;
          box-shadow: 5px 5px 10px rgba(0,0,0,0.2);
        }
        .back-to-top:hover {
          background-color:  var(--main);
          transform: scale(1.1);
        }
        .back-to-top:active {
          transform: scale(1);
        }
        .arrow-up {
          width: 50%;
          filter: invert(1);
        }
        @media (min-width: 1200px) {
          .widget-visible {
            top: 30px;
          }
          .back-to-top {
            width: 60px;
            height: 60px;
            bottom: auto;
            right: 30px;
          }
        }
      `}</style>
      </a>
  )
}
