import './cinema.css';
import {useState} from "react";
import Sales from "../../home/body/salesChart/salesChart.tsx";
import cinemaData from "./../../data/pages/cinema/cinema.tsx";
import {Button,Row, Col } from "react-bootstrap";
import { GoChevronDown } from "react-icons/go";
import { TbFilterDiscount } from "react-icons/tb";
import optionButton from "./optionButton.tsx";
import { CiLocationOn } from "react-icons/ci";
import { IoMdStar } from "react-icons/io";


function Cinema(){
    const [isAccordionOpen, setAccordionOpen] = useState(false);
    const toggleAccordion = () => {
        setAccordionOpen(!isAccordionOpen);
    };
    const [ active,setActive ] =useState(4);
    const activeButton =(value :number) =>{
        setActive(value)
    }
    return (
        <>
            <Row>
                <Col lg={3} md={5}>
                    <Sales />
                </Col>
                <Col className="mx-lg-5 mx-md-5 mt-4 col-lg-8">
                    <Row className='bg-white rounded-2 p-2  '>
                    <div className="d-flex justify-content-between ">
                        <div className="">
                            <div className='filter-button mt-2'>
                                <Button className=' border-0' variant='none' onClick={toggleAccordion}>
                                    <GoChevronDown className='mx-1'/>
                                    فیلتر امکانات
                                    <TbFilterDiscount className='mx-1'/>
                                </Button>
                            </div>
                            {isAccordionOpen && (
                                <div className="d-flex filter-options mt-4 text-muted">
                                    {optionButton.map((button) => (
                                        <div key={button.id}>
                                            <Button variant='none' className='border-0 text-muted '>
                                                {button.icon}
                                                {button.buttonName}
                                            </Button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        <div className="d-flex ">
                            {[' سینما های من', ' نزدیک ترین ها ', 'محبوب ترین ها', 'همه سینما ها'].map((label, index) => (
                                <Button key={index} variant="none"
                                    className={`border-0 text-muted button-list ${active === index + 1 ? 'active-button' : ''}`}
                                    onClick={() => activeButton(index + 1)}>
                                    {label}
                                </Button>
                            ))}
                        </div>
                    </div>
                    </Row>
                    <div className='mt-5 text-end'>
                        <h6 className='fw-bold'>همه سینماها</h6>
                    </div>
                    <Row xs={1} md={2} lg={3} className="gy-4 text-end mt-2 ">
                        {cinemaData.map((cinema) => (
                            <Col key={cinema.id} >
                                <div className=" rounded-3 cinema-cart">
                                    <img className="cinema-image w-100 rounded-top-3" src={cinema.image} alt=""/>
                                    <div className="mt-2 p-3">
                                        <h6>{cinema.cinemaName}</h6>
                                        <p className="mt-4">
                                            {cinema.address} <CiLocationOn/>
                                        </p>
                                        <div className=" mt-4">
                                            <div className='d-inline-block mx-3'>
                                                <span className="voting text-muted">رای: {cinema.votes}</span>
                                            </div>
                                            <span className="rating bg-dark text-white px-4 py-1">
                                            {cinema.rating} <IoMdStar className='mx-1'/>
                                            </span>
                                        </div>
                                        <div className="mt-4 d-flex justify-content-end">
                                            {cinema.icons.map((icon, index) => (
                                                <span key={index} className="icon mx-1">{icon}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </>
    );
}

export default Cinema;