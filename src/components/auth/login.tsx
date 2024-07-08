import {Link, useNavigate } from "react-router-dom";
import {Button, Container,Form,Row,Col, FormControl } from "react-bootstrap";
import { TfiBackRight } from "react-icons/tfi";
function Login(){

    const navigate =useNavigate();
    
    function handleHomePage(){
        navigate('/')
    }
    
    function handleRegisterPage(){
        navigate('/register')
    }

    function handleForgetPasswordPage(){
        navigate('/forget-password')
    }


    return(
        <>
            <Container className="custom-width ">
                <Row className=" mt-5 text-end">
                        <div className="text-center mt-5 d-none d-sm-block">
                             <img width={100} className="mx-1" sizes="sm" src="https://cinematicket.org/v3.30.13/assets/images/typography_dark.svg" alt="" />
                             <img width={25} sizes="sm" src="https://cinematicket.org/v3.30.13/assets/images/logo.svg" alt="" />
                        </div>
                        <div className="d-block justify-content-end d-none d-sm-block">
                             <Button onClick={handleHomePage} variant="">بازگشت
                             <TfiBackRight className="mx-1  "/>
                             <Link to={'/'}></Link>
                             </Button>
                        </div>
                    <Col className=" mt-4">
                        <div className="row">
                            <div className="col-lg-8  order-lg-2">
                                 <h6 style={{ fontSize: '14px' }}>
                                     .اگر در سینماتیکت حساب کاربری ندارید ثبت نام کنید
                                </h6>
                            </div>
                            <div className="col-lg-4  order-lg-1">
                                <Button  onClick={handleRegisterPage} size="sm" variant="danger" className=" mb-2 d-flex justify-content-end">ایجاد حساب کاربری
                                     <Link to={'/register'}></Link>
                                </Button>
                             </div>
                        </div>
                    <hr className="mt-4 text-muted"/>
                        <div className="row">
                            <h6  style={{fontSize:'14px'}}>.اگر در سینماتیکت حساب کاربری دارید وارد شوید</h6>
                            <div className="mt-4 d-flex justify-content-start">
                                <Button onClick={handleHomePage} variant="secondary" className=" col-lg-1 order-md-2" style={{position:"absolute"}}>ورود
                                    <Link to={'/'}></Link>
                                </Button>
                            </div>
                            <div className=" d-flex justify-content-end">
                                <Form className="col-lg-6  order-md-2">
                                    <Form.Group>
                                         <Button onClick={handleForgetPasswordPage} size="sm" variant="" className="cinema mt-2" style={{position:"absolute"}}>فراموش کردید؟|
                                            <Link to={'/forget-password'}></Link>
                                         </Button>
                                        <FormControl className="d-inline custom-input p-2" dir="rtl" style={{ height:'45px' }} type="text" placeholder="شماره موبایل..."/>
                                    </Form.Group>
                                </Form>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Login;