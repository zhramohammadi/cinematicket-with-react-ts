
import {Link, useNavigate } from "react-router-dom";
import { Button,Container,Col,Row,Form, FormControl } from "react-bootstrap";
import { TfiBackRight } from "react-icons/tfi";


function LoginPassword(){

    const navigate =useNavigate();
    function handleVerifyPage(){
        navigate('/verify')
    }
    function handleHomePage(){
        navigate('/')
    }
    function handleForgetPasswordPage(){
        navigate('/forget-password')
    }

    return(
        <>
            <Container className="custom-width">
                <Row  className="mt-5 text-end">
                    <Col>
                    <div className="text-center mt-5  d-none d-sm-block">
                             <img width={100} className="mx-1" sizes="sm" src="https://cinematicket.org/v3.30.13/assets/images/typography_dark.svg" alt="" />
                             <img width={25} sizes="sm" src="https://cinematicket.org/v3.30.13/assets/images/logo.svg" alt="" />
                    </div>
                    <div className="d-flex justify-content-end  d-none d-sm-block">
                             <Button onClick={handleVerifyPage} variant="">بازگشت
                             <TfiBackRight className="mx-1"/>
                             <Link to={'/verify'}></Link>
                             </Button>
                    </div>
                    <div>
                        <h6>.گذرواژه خود را وارد کنید</h6>
                        <Form className="mt-3">
                            <Form.Group>
                                <FormControl className="d-inline custom-input p-2 col-12" dir="rtl" type="text" placeholder="گذرواژه  ..."/>
                            </Form.Group>
                         </Form>

                         <hr className="mt-5 text-muted"/>
                         
                            <Button className="col-12 mt-2" variant="danger" onClick={handleHomePage}>ورود
                                 <Link to={'/'}></Link>
                            </Button>
                            <Button className="col-12 mt-3 text-primary" size="sm" variant="none"  onClick={handleForgetPasswordPage}>فراموش کردید؟
                                 <Link to={'/forget-password'}></Link>
                            </Button>
                         

                    </div>

                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default LoginPassword;