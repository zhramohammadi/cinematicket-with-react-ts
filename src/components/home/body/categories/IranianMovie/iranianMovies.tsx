
import {Col, Row, Button} from "react-bootstrap";
import {iraninan} from "../../../../data/categories/IranianMovie/IranianMovie.tsx";
import {GoChevronLeft, GoHeartFill } from "react-icons/go";
import { LuUser } from "react-icons/lu";
function iranianMovie(){
    return(
        <>
            <div className="d-flex justify-content-between m-2 ">
                <div className="button-size">
                    <Button size={'sm'} variant={'none'}>
                        <GoChevronLeft className="mx-1"/>
                        مشاهده همه
                    </Button>
                </div>
                <p className="mx-lg-3">فیلم ایرانی</p>
            </div>

            <Row xs={3} md={3} lg={4} xl={5} className="mx-1">
                {iraninan.map((moviesList) => (
                    <Col key={moviesList.id} className="mb-1">
                        <div className="image-container">
                            <img
                                className="poster-size"
                                src={moviesList.poster}
                                alt={moviesList.title}
                            />
                            <div className="caption-poster">
                                <div className="d-flex justify-content-between">
                        <span className="d-inline-block p-2">
                            {moviesList.viewer} <LuUser className="m-1"/>
                        </span>
                                    <span className="d-inline-block p-2">
                            {moviesList.rating} <GoHeartFill className="m-1 text-danger"/>
                        </span>
                                </div>
                                <p className="text-center">کارگردان: {moviesList.director}</p>
                            </div>
                        </div>
                        <div className="text-center mt-1 text-muted title-size">
                            <p>{moviesList.title}</p>
                        </div>
                    </Col>
                ))}

                <div className="col-12 d-lg-none d-md-none d-block">
                    <Button className="w-100" variant={'btn btn-outline-secondary'}>
                        <GoChevronLeft className="m-1"/>
                        مشاهده همه
                    </Button>
                </div>
            </Row>
        </>
    )
}

export default iranianMovie;