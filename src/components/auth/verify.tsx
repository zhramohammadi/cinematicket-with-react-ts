
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
        <Container style={{width: '45%'}}>
            <Row className="mt-5 text-end">
                <Col>
                     <div className="text-center mt-5">
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
                        <Form className="mt-5">
                            <Form.Group>
                                <Button onClick={handleHomePage}  variant="secondary" className="px-5 d-flex justify-content-end " style={{position:"absolute"}}>ادامه
                                    <Link to={'/'}></Link>
                                </Button>
                                <Button  size="sm" variant="" className="cinema mt-2" style={{position:"absolute"}}> ارسال مجدد|
                                    <Link to={'/forgetNumber'}></Link>
                                </Button>
                                <FormControl className="d-inline custom-input p-2 " dir="rtl" style={{ width: "55%",height:'45px' }} type="text" placeholder="کد تایید ..."/>
                            </Form.Group>
                         </Form>

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