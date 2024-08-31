import './../../style.css';
import {Col, Row, Button,Container} from "react-bootstrap";
import basicInfo from "../../../../data/basicInfoMovies/moviesBanner.tsx";
import {GoArrowLeft, GoHeartFill} from "react-icons/go";

function kidsAndTeenagerBanner(){
    const movie = basicInfo.find((movie => movie.id === 4))
    return(
        <>
            <Container className="position-relative mt-4 height-size">
                <Row>
                    <Col>
                        <img
                            className="imgBack d-lg-block d-none"
                            src={movie?.images?.imgBack}
                            alt="background"
                        />
                        <img
                            className="poster-back d-lg-block d-none mx-3"
                            src={movie?.images?.posterimg}
                            alt="poster"
                        />
                        <img
                            className="d-lg-none d-block img-back-sm"
                            src={movie?.images?.imgBackSm}
                            alt="background"
                        />
                        <div className="caption-movie mt-lg-5 text-end col-lg-9 col-11 ">
                            <h6>{movie?.title}</h6>
                            <p className="mt-lg-3 mt-1">{movie?.director}</p>
                            <div className="mt-lg-3">
                    <span className="DescriptionTime d-inline-block">
                        {movie?.rating} <GoHeartFill className="m-1 text-danger" />
                    </span>
                                <span className="DescriptionTime d-lg-inline-block d-none">{movie?.duration}</span>
                                <span className="DescriptionTime d-lg-inline-block d-none">{movie?.genre}</span>
                            </div>
                            <div className="mt-2 d-lg-block d-none">
                                <p className="font-size">{movie?.description}</p>
                            </div>
                            <div className="d-flex justify-content-lg-start justify-content-end col-9 mx-5">
                                <Button className="p-1" variant="danger">
                                    <GoArrowLeft className="mx-2" />
                                    خرید بلیت
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default kidsAndTeenagerBanner;