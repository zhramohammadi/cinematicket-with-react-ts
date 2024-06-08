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
    
    function handleForgetNumberPage(){
        navigate('/forgetNumber')
    }


    return(
        <>
            <Container style={{width:'45%'}} >
                <Row className=" mt-5 text-end">
                    <Col>
                        <div className="text-center mt-5">
                             <img width={100} className="mx-1" sizes="sm" src="https://cinematicket.org/v3.30.13/assets/images/typography_dark.svg" alt="" />
                             <img width={25} sizes="sm" src="https://cinematicket.org/v3.30.13/assets/images/logo.svg" alt="" />
                        </div>
                        <div className="d-flex justify-content-end ">
                             <Button onClick={handleHomePage} variant="">بازگشت
                             <TfiBackRight className="mx-1"/>
                             <Link to={'/'}></Link>
                             </Button>
                        </div>

                        <div className="mt-4">
                             <Button onClick={handleRegisterPage} size="sm" variant="danger" className=" d-flex justify-content-end " style={{position:"absolute"}}>ایجاد حساب کاربری
                                <Link to={'/register'}></Link>
                             </Button>
                             <h6 style={{fontSize:'14px', }} className="d-inline">.اگر در سینماتیکت حساب کاربری ندارید ثبت نام کنید</h6>
                        </div>

                        <hr className="mt-5 text-muted"/>

                        <div className="mt-5">
                                <h6 style={{fontSize:'14px'}}>.اگر در سینماتیکت حساب کاربری دارید وارد شوید</h6>
                                <Form >
                                    <Form.Group className="mt-4" >
                                         <Button onClick={handleHomePage} variant="secondary" className="px-5 d-flex justify-content-end " style={{position:"absolute"}}>ورود
                                            <Link to={'/'}></Link>
                                         </Button>
                                         <Button onClick={handleForgetNumberPage} size="sm" variant="" className="cinema mt-2" style={{position:"absolute"}}>فراموش کردید؟|
                                            <Link to={'/forgetNumber'}></Link>
                                         </Button>
                                        <FormControl className="d-inline custom-input p-2 " dir="rtl" style={{ width: "42%",height:'45px' }} type="text" placeholder="شماره موبایل..."/>
                                    </Form.Group>
                                </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Login;