import './cinema.css';
import {useState} from "react";
import Sales from "../../home/body/salesChart/salesChart.tsx";
import {Button,Row, Col } from "react-bootstrap";
import { GoChevronDown } from "react-icons/go";
import { TbFilterDiscount } from "react-icons/tb";
import optionButton from "./optionButton.tsx";



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
        <Row>
            <Col lg={3} md={5}>
                <Sales />
            </Col>
            <Col  className="mx-lg-5 mx-md-5 bg-white rounded-2 p-2 h-75 mt-4">
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
                                    <div key={button.id} >
                                        <Button variant='none' className='border-0 text-muted '>
                                            {button.icon}
                                            {button.buttonName}
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="d-flex button-list">
                        <div onClick={() => activeButton(1)}
                             className={` ${active === 1 ? 'active-button' : ''} `}>
                            <Button variant="none" className='border-0 text-muted'>
                                سینما های من
                            </Button>
                        </div>
                        <div onClick={() => activeButton(2)}
                             className={` ${active === 2 ? 'active-button' : ''} `}>
                            <Button className='border-0 text-muted' variant="none">
                                نزدیک ترین ها
                            </Button>
                        </div>
                        <div onClick={() => activeButton(3)}
                             className={` ${active === 3 ? 'active-button' : ''} `}>
                            <Button className='border-0 text-muted' variant="none">
                                محبوب ترین ها
                            </Button>
                        </div>
                        <div onClick={() => activeButton(4)}
                              className={` ${active === 4 ? 'active-button' : ''} `}>
                            <Button className='border-0 text-muted' variant="none">
                                همه سینما ها
                            </Button>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    );
}

export default Cinema;