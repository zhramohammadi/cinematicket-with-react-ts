

import {Link, useNavigate } from "react-router-dom";
import { Button,Container,Col,Row,Form, FormControl } from "react-bootstrap";
import { TfiBackRight } from "react-icons/tfi";

function ForgetPassword(){
    const navigate =useNavigate();
    function handleLoginPasswordPage(){
        navigate('/login-password')
    }
    function handleVerifyPage(){
        navigate('/verify')
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
                             <Button onClick={handleLoginPasswordPage} variant="">بازگشت
                             <TfiBackRight className="mx-1"/>
                             <Link to={'/login-password'}></Link>
                             </Button>
                    </div>
                    <div>
                        <h6 className="mt-3">
                            .رمز عبور خود را فراموش کردید
                            <br></br>
                            کدام یک از اطلاعات زیر را به خاطر دارید؟
                        </h6>

                        <div className="mt-4">
                            <Button variant="none" className="col-6" size="sm">ایمیل </Button>
                            <Button variant="none" className="col-6" size="sm">شماره موبایل</Button>
                            <hr className=" text-muted"/>
                        </div>

                        <Form className="mt-3">
                            <Form.Group>
                                <FormControl className="d-inline custom-input p-2 col-12" type="text" placeholder="شماره موبایل  ..."/>
                            </Form.Group>
                         </Form>
                         <Button onClick={handleVerifyPage} variant="secondary" className=" mt-5 col-12">بازیابی اطلاعات حساب</Button>

                    </div>

                </Col>
            </Row>
        </Container>
        </>
    )
}

export default ForgetPassword;