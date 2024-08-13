import {Col, Row} from "react-bootstrap";

import Header from './header/navbar';
import Carousel from './body/carousel/carousel';
import Sales from './body/salesChart/salesChart';
import Categories from "./body/categories/categories.tsx";
function Home(){
    return(
        <>
            <Header/>
            <Carousel/>


            <Row>
                <Col lg={3} md={5} >
                    <Sales />
                </Col>
                <Col className="mx-lg-5 mx-md-5">
                    <Categories />
                </Col>
            </Row>
        </>
    )
}

export default Home;