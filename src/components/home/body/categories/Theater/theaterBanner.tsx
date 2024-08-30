import './../../style.css';
import {Col, Row,Container} from "react-bootstrap";
import basicInfo from "../../../../data/basicInfoMovies/moviesBanner.tsx";

function theaterBanner(){
    const movie = basicInfo.find((movie => movie.id === 3))
    return(
        <><Container className="position-relative mt-4 height-size">
            <Row>
                <Col>
                    <img
                        className="imgBack d-lg-block d-none"
                        src={movie.images.imgBack}
                        alt="background"
                    />
                    <img
                        className="d-lg-none d-block img-back-sm"
                        src={movie.images.imgBackSm}
                        alt="background"
                    />
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default theaterBanner;