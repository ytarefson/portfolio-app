import React, {useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Lightbox from 'react-image-lightbox';
import ReactMarkdown from 'react-markdown';
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const ImageSlider = (props) => {
    const [photoIndex, setphotoIndex] = useState(0);
    const [isOpen, setisOpen] = useState(false);
    const [pause, setPause] = useState(false);
    const timer = useRef();
    const [currentSlide, setCurrentSlide] = useState(0);
    const [sliderRef, slider] = useKeenSlider({
    dragSpeed: 0.45,
    slidesPerView: 1,
    duration: 3000,
    spacing: 6,
    loop: true,
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide)
    }  
  })
  useEffect(() => {
    sliderRef.current.addEventListener("mouseover", () => {
      setPause(true)
    })
    sliderRef.current.addEventListener("mouseout", () => {
      setPause(false)
    })
  }, [sliderRef])

  useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && slider) {
        slider.next()
      }
    }, 4000)
    return () => {
      clearInterval(timer.current)
    }
  }, [pause, slider])

  function ArrowLeft(props) {
    const disabeld = props.disabled ? " arrow--disabled" : ""
    return (
      <svg
        onClick={props.onClick}
        className={"arrow arrow--left" + disabeld}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" fill="white"/>
      </svg>
    )
  }  
  function ArrowRight(props) {
    const disabeld = props.disabled ? " arrow--disabled" : ""
    return (
      <svg
        onClick={props.onClick}
        className={"arrow arrow--right" + disabeld}        
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" fill="white" />
      </svg>
    )
  }
  return (
    <div className="image-slider-section component-paddings">

      {isOpen && (
        <Lightbox
          mainSrc={`http://localhost:1337${props.slider.images[photoIndex].url}`}
          nextSrc={`http://localhost:1337${
            props.slider.images[(photoIndex + 1) % props.slider.images.length].url
          }`}
          prevSrc={`http://localhost:1337${
            props.slider.images[(photoIndex + props.slider.images.length - 1) % props.slider.images.length].url
          }`}
          onCloseRequest={() => setisOpen(false)}
          onMovePrevRequest={() => {
            setphotoIndex((photoIndex + props.slider.images.length - 1) % props.slider.images.length);
          }}
          imageTitle={props.slider.images[photoIndex].caption != undefined ? props.slider.images[photoIndex].caption : ''}
          onMoveNextRequest={() => {
            setphotoIndex((photoIndex + 1) % props.slider.images.length);
          }}
        />
      )}
        <div className="image-slider">
          <span className="section-title">{props.slider.name}</span>
          <ReactMarkdown escapeHtml={false} children={props.slider.content} className="markdown"/>
          <div className="navigation-wrapper">
            <div ref={sliderRef} className="keen-slider product-slider">
            {props.slider.images.map((image,index)=> (
              <div 
              className='img-container keen-slider__slide product-slide'
              key={`keim-${index}-${image.hash}`}>
                <Image
                width={280}
                height={170}
                layout='responsive'
                objectFit='cover'
                onClick={() => {
                    setisOpen(true);
                    setphotoIndex(index);
                  }}
                // itemProp='image'
                className="gallery-image-container"
                title={`${image.caption ? image.caption : ''}`}
                alt={`${
                  image.alternativeText
                  ? image.alternativeText
                  : ''
                }`}
                src={`http://localhost:1337${image.url}`}                     
                />
                <span className="section-title mb-0 title-position">{image.caption}</span>
                <style jsx>{`
                  .title-position {
                    position: absolute;
                    z-index: 1;
                    color: white;
                    bottom: 35px;
                    left: 45px;
                    right: 15px;
                  }
                  .product-slide {
                    position: relative;
                  }
                  .product-slide::after {
                    pointer-events: none;
                    position: absolute;
                    content: "";
                    display: block;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    background-image: linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.35) 70%, rgba(0,0,0,0.7) 100%)
                  }
                  @media (min-width: 1200px) {
                    .title-position {
                      bottom: 57px;
                      left: 145px;
                      right: 45px;
                    }
                  }
                  @media (min-width: 1900px) {
                    .title-position {
                      bottom: 70px;
                      left: 130px;
                      right: 145px;
                    }
                  }
                  `}</style>
              </div>
            ))}
          {slider && (
            <>
              <ArrowLeft
                onClick={(e) => e.stopPropagation() || slider.prev()}
                disabled={currentSlide === 0}
              />
              <ArrowRight
                onClick={(e) => e.stopPropagation() || slider.next()}
                disabled={currentSlide === slider.details().size - 1}
              />
            </>
          )}
          </div>
            {slider && (
          <div className="dots">
            {[...Array(slider.details().size).keys()].map((idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    slider.moveToSlideRelative(idx)
                  }}
                  className={"dot" + (currentSlide === idx ? " active" : "")}
                />
              )
            })}
          </div>
        )}
        </div>
      </div>
    </div>
  )
}
export default ImageSlider;