import React, {useState} from 'react';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import Lightbox from 'react-image-lightbox';

const ImageGallery = (props) => {
  const [photoIndex, setphotoIndex] = useState(0);
  const [isOpen, setisOpen] = useState(false);
  const openLightbox = (index) => {
    setisOpen(true);
    setphotoIndex(index);
  }
  let images = props.gallery.images.map((image, index) => (
    <div  className="image-container" 
          onClick={()=>openLightbox(index)}
          key={`imgal-${index}`} 
          style={{ position: "relative" }}>
      
      <Image src={`http://localhost:1337${image.url}`}
              title={image.caption}
              layout="fill"
              objectFit="cover"
              className="gallery-image"
              alt={image.alternativeText}
              />
      <style>{`
        .gallery-image {
          width: 100px;
          height: 100px;
        }
      `}</style>
    </div>
  ))

  return (
    <div className="image-gallery-section component-paddings">
      {isOpen && (
        <Lightbox
          mainSrc={`http://localhost:1337${props.gallery.images[photoIndex].url}`}
          nextSrc={`http://localhost:1337${props.gallery.images[(photoIndex + 1) % props.gallery.images.length].url}`}
          prevSrc={`http://localhost:1337${props.gallery.images[(photoIndex + props.gallery.images.length - 1) % props.gallery.images.length].url}`}
          onCloseRequest={() => setisOpen(false)}
          onMovePrevRequest={() => {
            setphotoIndex((photoIndex + props.gallery.images.length - 1) % props.gallery.images.length);
          }}
          imageTitle={props.gallery.images[photoIndex].caption != undefined ? props.gallery.images[photoIndex].caption : ''}
          onMoveNextRequest={() => {
            setphotoIndex((photoIndex + 1) % props.gallery.images.length);
          }}
        />
      )}
        <div className="image-gallery">
          <span className="section-title">{props.gallery.name}</span>
          <ReactMarkdown escapeHtml={false} children={props.gallery.content} className="markdown"/>
          <div className="images">
            {images}
          </div>
        </div>
      <style jsx>{`
        .images {
          display: grid;
          gap: 6px;
          grid-template-columns: 1fr 1fr;
          grid-auto-rows: 180px;
        }
        @media (min-width: 778px) {
          .images {
          display: grid;
          gap: 6px;
          grid-template-columns: 1fr 1fr 1fr;
          grid-auto-rows: 180px;
        }
        }
        `}</style>
    </div>
  )
}
export default ImageGallery;
