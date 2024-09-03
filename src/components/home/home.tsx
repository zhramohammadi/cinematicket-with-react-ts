import {Col, Row} from "react-bootstrap";

import Header from './header/header.tsx';
import Navbar from './header/navbar.tsx'
import Carousel from './body/carousel/carousel';
import Sales from './body/salesChart/salesChart';
import Categories from "./body/categories/categories.tsx";
import Footer from './footer/footer.tsx';
import FooterLg from "./footer/footerLg.tsx";

function Home(){
    return(
        <>
            <div className='fixed-top bg-white'>
                <Header/>
                <Navbar/>
            </div>
            <Carousel/>
            <Row>
                <Col lg={3} md={5} >
                    <Sales />
                </Col>
                <Col className="mx-lg-5 mx-md-5">
                    <Categories />
                </Col>
            </Row>
            <div className='fixed-bottom'>
                <FooterLg/>
                <Footer/>
            </div>

        </>
    )
}

export default Home;