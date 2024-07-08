
import {Button, Carousel, CarouselCaption } from "react-bootstrap";
import { BsTicket } from "react-icons/bs";
import { GoHeartFill } from "react-icons/go";


function carousel(){
    return(
        <>
            <Carousel>
                <Carousel.Item>
                    <div>
                    <div className=" d-flex justify-content-start d-lg-block d-md-block d-none">
                        <img
                        className="carousel-images-left"
                        src="images/carousel/temsah-khoni1.webp" 
                        alt="تمساح خونی" 
                        />
                    </div>
                    <div className=" d-flex justify-content-end">
                        <img
                        id=""
                        className="carousel-images-right "
                        src="images/carousel/temsah-khoni2.webp" 
                        alt="تمساح خونی" 
                        />
                    </div>
                    <div>
                    <img
                        className="w-100 h-50  d-lg-block d-md-block"
                        src="images/carousel/temsah-khoni3.webp"
                        alt="" 
                    />
                    </div>
                    <CarouselCaption>
                        <div className="text-end mb-1 " style={{width:'85%'}}>
                            <div className="mb-5">
                                <h4>تمساح خونی</h4>
                            </div>
                            <div>
                                <p>کارگردان:جوادعزتی</p>
                                <div className="flex-row m-2">
                                    <span className="DescriptionTime">رای 3685</span>
                                    <span className="Description"> 3.4 
                                    <GoHeartFill  className="m-1"/>
                                    </span>
                                    <span className="DescriptionTime"> 106 دقیقه</span>
                                    <span className="DescriptionTime"> اکشن </span>
                                    <span className="DescriptionTime"> کمدی </span>
                                </div>
                                <p >...تمساح خونی نخستین ساخته جواد عزتی به عنوان کارگردان و به</p>
                            </div>
                            <div className="mt-5">
                                <Button variant="btn btn-light">
                                      خرید بلیت   
                                <BsTicket className="m-2"/>
                                </Button>
                            </div>
                        </div>
                        
                    </CarouselCaption>
                    </div>
                </Carousel.Item>
            </Carousel>
        </>
    )
};

export default carousel;