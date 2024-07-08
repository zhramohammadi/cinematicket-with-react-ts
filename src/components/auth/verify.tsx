
import {Link, useNavigate } from "react-router-dom";
import { Button,Container,Col,Row,Form, FormControl } from "react-bootstrap";
import { TfiBackRight } from "react-icons/tfi";
import { RiLockPasswordLine } from "react-icons/ri";

function Verify(){

    const navigate =useNavigate();
    
    function handleRegisterPage(){
        navigate('/register')
    }
    function handleHomePage(){
        navigate('/')
    }
    function handleLoginPasswordPage(){
        navigate('/login-password')
    }

    return(
        <>
        <Container className="custom-width">
            <Row className="mt-5 text-end">
                <Col>
                     <div className="text-center mt-5 d-none d-sm-block">
                             <img width={100} className="mx-1" sizes="sm" src="https://cinematicket.org/v3.30.13/assets/images/typography_dark.svg" alt="" />
                             <img width={25} sizes="sm" src="https://cinematicket.org/v3.30.13/assets/images/logo.svg" alt="" />
                    </div>
                    <div className="d-flex justify-content-end ">
                             <Button onClick={handleRegisterPage} variant="">بازگشت
                             <TfiBackRight className="mx-1"/>
                             <Link to={'/register'}></Link>
                             </Button>
                    </div>
                    <div className="mt-4">
                        <h6>.کد فرستاده شده برای ()را وارد کنید</h6>
                         <div className="mt-4 d-flex justify-content-start">
                                <Button onClick={handleHomePage}  variant="secondary" className="px-5 d-flex justify-content-end d-lg-block d-none" style={{position:"absolute"}}>ادامه
                                    <Link to={'/'}></Link>
                                </Button>
                        </div>
                        <div className="d-flex justify-content-center">
                                <Button onClick={handleHomePage}  variant="secondary" className=" px-5 mt-5 d-lg-none d-xs-none" style={{position:"absolute"}}>ادامه
                                    <Link to={'/'}></Link>
                                </Button>
                        </div>
                        <div>
                        <Form className=" d-lg-block d-none">
                            <Form.Group>
                                <FormControl className="d-inline  custom-input" dir="rtl" style={{width:'300px',height:'45px' }} type="text" placeholder="کد تایید ..."/>
                            </Form.Group>
                         </Form>
                        <Form className=" d-flex justify-content-center d-lg-none d-xs-none">
                            <Form.Group>
                                <FormControl className="d-inline  custom-input" dir="rtl" style={{width:'300px',height:'45px' }} type="text" placeholder="کد تایید ..."/>
                            </Form.Group>
                         </Form>
                         </div>
                         <hr className="mt-5 text-muted"/>

                         <div className="mt-4">
                            <Button onClick={handleLoginPasswordPage} variant="none">
                                ورود با گذرواژه
                                <Link to={'/login-password'}></Link>
                                <RiLockPasswordLine className="mx-2"/>
                            </Button>
                         </div>

                    </div>

                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Verify;