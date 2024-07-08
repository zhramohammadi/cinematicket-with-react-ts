
import {Link, useNavigate } from "react-router-dom";
import { Button,Container,Col,Row,Form, FormControl } from "react-bootstrap";
import { TfiBackRight } from "react-icons/tfi";

function Register(){

    const navigate =useNavigate();
    
    function handleLoginPage(){
        navigate('/login')
    }
    
    function handleVerifyPage(){
        navigate('/verify')
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
                     <div className="d-inline p-1 bg-white d-none d-sm-block">
                             <Button onClick={handleLoginPage} variant="">بازگشت
                             <TfiBackRight className="mx-1 bg-white"/>
                             <Link to={'/login'}></Link>
                             </Button>
                    </div>
                    <div className="mt-4">
                        <h6>ایجاد حساب کاربری</h6>
                        <p className="mt-4">.شماره موبایل خود را وارد کنید</p>
                        <div className="mt-4 d-flex justify-content-start">
                            <Button onClick={handleVerifyPage}  variant="secondary" className="px-5 order-md-2" style={{position:"absolute"}}>ادامه
                                <Link to={'/verify'}></Link>
                            </Button>
                        </div>
                        <div className="d-flex justify-content-end">
                            <Form className=" col-lg-5 col-md-5 col-sm-5">
                                <Form.Group className="" >
                                    <FormControl  className="d-inline custom-input p-2 order-md-1 custom-width-input" dir="rtl" style={{height:'40px' }} type="text" placeholder="شماره موبایل..."/>
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

export default Register;