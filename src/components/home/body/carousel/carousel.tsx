import  { useState,useEffect } from 'react';

import {Button, Carousel, CarouselCaption, CarouselItem } from "react-bootstrap";
import { carouselItem } from "../../../data/carousel";
import { BsTicket } from "react-icons/bs";
import { GoHeartFill } from "react-icons/go";


function carousel(){
  const [showControls, setShowControls] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 576) {
        setShowControls(false);
      } else {
        setShowControls(true);
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
    return(
        <>
    <Carousel controls={showControls} indicators={showControls}>
      {carouselItem.map(item => (
        <CarouselItem key={item.id}>
            
                <div className="d-flex justify-content-start d-lg-block d-none">
                    <img 
                    src={item.images.left} 
                    className="carousel-images-left mx-4"
                    alt="" 
                    />
                </div>
                <div className="d-flex justify-content-end">
                    <img  
                    src={item.images.right} 
                    className="carousel-images-right imageSize"
                    alt="" 
                    />
                </div>
                <div>
                    <img  
                    src={item.images.background}
                    className="carousel-backGround  opacity "
                    alt="" 
                    />
                </div>
         
          <CarouselCaption >
            <div className="text-end mb-5 col-lg-10 col-md-8 col-sm-5 caption">
              <div className="mb-4 ">
                <h4>{item.caption}</h4>
              </div>
              <div>
                <p>کارگردان: {item.director}</p>
                <div className=" mb-1">
                  <span className="DescriptionTime d-inline-block">رای {item.votes}</span>
                  <span className="Description d-inline-block">
                    {item.ating} <GoHeartFill className="m-1" />
                  </span>
                  <span className="DescriptionTime d-inline-block">{item.duration}</span>
                  {item.genre.map((genre, index) => (
                    <span key={index} className="DescriptionTime d-inline-block">{genre}</span>
                  ))}
                </div>
                <h6 className="d-lg-block d-md-block d-none"> 
                  {item.Description}
                </h6>
              </div>
              <div className="mt-4">
                <Button className="col-lg-3 col-md-5 col-sm-8 col-12" size="sm" variant="light">
                  خرید بلیت
                  <BsTicket className="m-2" />
                </Button>
              </div>
            </div>
          </CarouselCaption>
        </CarouselItem>
      ))}
    </Carousel>
        </>
    )
};

export default carousel;