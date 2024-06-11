
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
        <Container style={{width: '45%'}}>
            <Row className="mt-5 text-end">
                <Col>
                    <div className="text-center mt-5">
                             <img width={100} className="mx-1" sizes="sm" src="https://cinematicket.org/v3.30.13/assets/images/typography_dark.svg" alt="" />
                             <img width={25} sizes="sm" src="https://cinematicket.org/v3.30.13/assets/images/logo.svg" alt="" />
                    </div>
                     <div className="d-flex justify-content-end ">
                             <Button onClick={handleLoginPage} variant="">بازگشت
                             <TfiBackRight className="mx-1"/>
                             <Link to={'/login'}></Link>
                             </Button>
                    </div>
                    <div className="mt-4">
                        <h6>ایجاد حساب کاربری</h6>
                        <p className="mt-4">.شماره موبایل خود را وارد کنید</p>

                        <Form className="mt-5">
                                    <Form.Group className="mt-4" >
                                         <Button onClick={handleVerifyPage}  variant="secondary" className="px-5 d-flex justify-content-end " style={{position:"absolute"}}>ادامه
                                            <Link to={'/verify'}></Link>
                                         </Button>
                                        <FormControl className="d-inline custom-input p-2 " dir="rtl" style={{ width: "50%",height:'40px' }} type="text" placeholder="شماره موبایل..."/>
                                    </Form.Group>
                                </Form>
                    </div>


                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Register;