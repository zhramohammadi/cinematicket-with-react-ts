
import {Button, Carousel, CarouselCaption, CarouselItem } from "react-bootstrap";
import { BsTicket } from "react-icons/bs";
import { GoHeartFill } from "react-icons/go";


function carousel(){
    return(
        <>
            <Carousel>
                <Carousel.Item>
                    <div>
                    <div className=" d-flex justify-content-start d-lg-block  d-none">
                        <img
                        className="carousel-images-left h-100"
                        src="images/carousel/temsah-khoni1.webp" 
                        alt="تمساح خونی" 
                        />
                    </div>
                    <div className=" d-flex justify-content-end ">
                        <img
                        className="carousel-images-right "
                        src="images/carousel/temsah-khoni2.webp" 
                        alt="تمساح خونی" 
                        />
                    </div>
                    <div >
                    <img
                        className="carousel-backGround  d-lg-block d-md-block d-sm-block"
                        src="images/carousel/temsah-khoni3.webp"
                        alt="" 
                    />
                    </div>
                    <CarouselCaption className="" style={{ width: '55%' }}>
                        <div className="text-end mb-5 col-lg-12 col-md-8 col-sm-7" >
                            <div className="mb-4">
                            <h4>تمساح خونی</h4>
                            </div>
                            <div>
                                <p>کارگردان:جوادعزتی</p>
                                <div className="flex-row m-2">
                                    <span className="DescriptionTime d-inline-block">رای 3685</span>
                                    <span className="Description d-inline-block"> 3.4 
                                    <GoHeartFill  className="m-1"/>
                                    </span>
                                    <span className="DescriptionTime d-lg-inline-block d-md-inline-block d-sm-inline d-none "> 106 دقیقه</span>
                                    <span className="DescriptionTime d-lg-inline-block d-md-inline-block d-sm-inline d-none "> اکشن </span>
                                    <span className="DescriptionTime d-lg-inline-block d-md-inline-block d-sm-inline d-none "> کمدی </span>
                                </div>
                                <h6 className="d-lg-block d-md-block d-sm-none " >...تمساح خونی نخستین ساخته جواد عزتی به عنوان کارگردان و به</h6>
                            </div>
                            <div className="mt-5 d-flex justify-content-end">
                                <Button className="col-lg-3 col-md-5 col-sm-8 col-10" size="sm"  variant="btn btn-light">
                                      خرید بلیت   
                                <BsTicket className="m-2"/>
                                </Button>
                            </div>
                        </div>
                        
                    </CarouselCaption>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div>
                    <div className=" d-flex justify-content-start d-lg-block  d-none">
                        <img
                        className="carousel-images-left h-100"
                        src="images/carousel/abi-roshan3.webp" 
                        alt="آبی روشن " 
                        />
                    </div>
                    <div className=" d-flex justify-content-end ">
                        <img
                        className="carousel-images-right "
                        src="images/carousel/abi-roshan2.webp" 
                        alt=" آبی روشن" 
                        />
                    </div>
                    <div >
                    <img
                        className="carousel-backGround  d-lg-block d-md-block d-sm-block"
                        src="images/carousel/abi-roshan1.webp"
                        alt="" 
                    />
                    </div>
                    <CarouselCaption className="" style={{ width: '55%' }}>
                        <div className="text-end mb-5 col-lg-12 col-md-8 col-sm-7" >
                            <div className="mb-4">
                            <h4> آبی روشن</h4>
                            </div>
                            <div>
                                <p>کارگردان:بابک خواجه پاشا</p>
                                <div className="flex-row m-2">
                                    <span className="DescriptionTime d-inline-block">رای 114</span>
                                    <span className="Description d-inline-block"> 3.5 
                                    <GoHeartFill  className="m-1"/>
                                    </span>
                                    <span className="DescriptionTime d-lg-inline-block d-md-inline-block d-sm-inline d-none "> 90 دقیقه</span>
                                    <span className="DescriptionTime d-lg-inline-block d-md-inline-block d-sm-inline d-none "> اجتماعی </span>
                                    <span className="DescriptionTime d-lg-inline-block d-md-inline-block d-sm-inline d-none "> درام </span>
                                </div>
                                <p className="d-lg-block d-md-block d-sm-none " style={{fontSize:12}}>... آبی روشن به کارگردانی بابک خواجه پاشا و تهیه کنندگی سید محمد حسین میری</p>
                            </div>
                            <div className="mt-5 d-flex justify-content-end">
                                <Button className="col-lg-3 col-md-5 col-sm-8 col-10" size="sm"  variant="btn btn-light">
                                      خرید بلیت   
                                <BsTicket className="m-2"/>
                                </Button>
                            </div>
                        </div>
                        
                    </CarouselCaption>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div>
                    <div className=" d-flex justify-content-start d-lg-block  d-none">
                        <img
                        className="carousel-images-left h-100"
                        src="images/carousel/mast-eshgh1.webp" 
                        alt=" مست عشق" 
                        />
                    </div>
                    <div className=" d-flex justify-content-end ">
                        <img
                        className="carousel-images-right "
                        src="images/carousel/mast-eshgh2.webp" 
                        alt=" مست عشق" 
                        />
                    </div>
                    <div >
                    <img
                        className="carousel-backGround  d-lg-block d-md-block d-sm-block"
                        src="images/carousel/mast-eshgh3.webp"
                        alt="" 
                    />
                    </div>
                    <CarouselCaption className="" style={{ width: '55%' }}>
                        <div className="text-end mb-5 col-lg-12 col-md-8 col-sm-7" >
                            <div className="mb-4">
                            <h4> مست عشق</h4>
                            </div>
                            <div>
                                <p>کارگردان:حسن فتحی</p>
                                <div className="flex-row m-2">
                                    <span className="DescriptionTime d-inline-block">رای 2439</span>
                                    <span className="Description d-inline-block"> 3.9 
                                    <GoHeartFill  className="m-1"/>
                                    </span>
                                    <span className="DescriptionTime d-lg-inline-block d-md-inline-block d-sm-inline d-none "> 105 دقیقه</span>
                                    <span className="DescriptionTime d-lg-inline-block d-md-inline-block d-sm-inline d-none "> تاریخی </span>
                                    <span className="DescriptionTime d-lg-inline-block d-md-inline-block d-sm-inline d-none "> عاشقانه </span>
                                </div>
                                <h6 className="d-lg-block d-md-block d-sm-none ">...فیلم مست عشق به کارگردانی حسن فتحی و نویسندگی حسن فتحی و کارگردانی</h6>
                            </div>
                            <div className="mt-5 d-flex justify-content-end">
                                <Button className="col-lg-3 col-md-5 col-sm-8 col-10" size="sm"  variant="btn btn-light">
                                      خرید بلیت   
                                <BsTicket className="m-2"/>
                                </Button>
                            </div>
                        </div>
                        
                    </CarouselCaption>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div>
                    <div className=" d-flex justify-content-start d-lg-block  d-none">
                        <img
                        className="carousel-images-left h-100"
                        src="images/carousel/bi-badan1.webp" 
                        alt=" بی بدن" 
                        />
                    </div>
                    <div className=" d-flex justify-content-end ">
                        <img
                        className="carousel-images-right "
                        src="images/carousel/bi-badan2.webp" 
                        alt=" بی بدن" 
                        />
                    </div>
                    <div >
                    <img
                        className="carousel-backGround  d-lg-block d-md-block d-sm-block"
                        src="images/carousel/bi-badan3.webp"
                        alt="" 
                    />
                    </div>
                    <CarouselCaption className="" style={{ width: '55%' }}>
                        <div className="text-end mb-5 col-lg-12 col-md-8 col-sm-7" >
                            <div className="mb-4">
                            <h4>بی بدن </h4>
                            </div>
                            <div>
                                <p>کارگردان:مرتضی علیزاده</p>
                                <div className="flex-row m-2">
                                    <span className="DescriptionTime d-inline-block">رای 2087</span>
                                    <span className="Description d-inline-block"> 4.4 
                                    <GoHeartFill  className="m-1"/>
                                    </span>
                                    <span className="DescriptionTime d-lg-inline-block d-md-inline-block d-sm-inline d-none "> 106 دقیقه</span>
                                    <span className="DescriptionTime d-lg-inline-block d-md-inline-block d-sm-inline d-none "> جنایی </span>
                                </div>
                                <h6 className="d-lg-block d-md-block d-sm-none ">...بد بدن نخسین ساخته مرتضی علیزاده به عنوان کارگردان با بازی</h6>
                            </div>
                            <div className="mt-5 d-flex justify-content-end">
                                <Button className="col-lg-3 col-md-5 col-sm-8 col-10" size="sm"  variant="btn btn-light">
                                      خرید بلیت   
                                <BsTicket className="m-2"/>
                                </Button>
                            </div>
                        </div>
                        
                    </CarouselCaption>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div>
                    <div className=" d-flex justify-content-start d-lg-block  d-none">
                        <img
                        className="carousel-images-left h-100"
                        src="images/carousel/atr-alod1.webp" 
                        alt="عطر آلود " 
                        />
                    </div>
                    <div className=" d-flex justify-content-end ">
                        <img
                        className="carousel-images-right "
                        src="images/carousel/atr-alod3.webp" 
                        alt="عطرآلود " 
                        />
                    </div>
                    <div >
                    <img
                        className="carousel-backGround  d-lg-block d-md-block d-sm-block"
                        src="images/carousel/atr-alod2.webp"
                        alt="" 
                    />
                    </div>
                    <CarouselCaption className="" style={{ width: '55%' }}>
                        <div className="text-end mb-5 col-lg-12 col-md-8 col-sm-7" >
                            <div className="mb-4">
                            <h4>عطر آلود </h4>
                            </div>
                            <div>
                                <p>کارگردان:هادی مقدم دوست</p>
                                <div className="flex-row m-2">
                                    <span className="DescriptionTime d-inline-block">رای 83</span>
                                    <span className="Description d-inline-block"> 2.9
                                    <GoHeartFill  className="m-1"/>
                                    </span>
                                    <span className="DescriptionTime d-lg-inline-block d-md-inline-block d-sm-inline d-none "> 90 دقیقه</span>
                                    <span className="DescriptionTime d-lg-inline-block d-md-inline-block d-sm-inline d-none "> اجتماعی </span>
                                    <span className="DescriptionTime d-lg-inline-block d-md-inline-block d-sm-inline d-none "> درام </span>
                                </div>
                                <h6 className="d-lg-block d-md-block d-sm-none ">...فیلم عطر آلود به کارگردانی هادی مقدم دوست و تهیه کنندگی یوسف منصوری</h6>
                            </div>
                            <div className="mt-5 d-flex justify-content-end">
                                <Button className="col-lg-3 col-md-5 col-sm-8 col-10" size="sm"  variant="btn btn-light">
                                      خرید بلیت   
                                <BsTicket className="m-2"/>
                                </Button>
                            </div>
                        </div>
                        
                    </CarouselCaption>
                    </div>
                </Carousel.Item>
                <CarouselItem>
                    <img
                    className="carousel-backGround "
                    src="images/carousel/khejalat-nakesh.webp"
                     alt="خجالت نکش" />
                </CarouselItem>
                
            </Carousel>
        </>
    )
};

export default carousel;