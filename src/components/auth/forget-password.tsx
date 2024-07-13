
import { useState } from "react";
import {Link, useNavigate } from "react-router-dom";
import { Button,Container,Col,Row,Form, FormControl } from "react-bootstrap";
import { TfiBackRight } from "react-icons/tfi";

function ForgetPassword(){

    const[click,setClick]= useState('شماره موبایل');
    const[placeHolder,setplaceHolder]=useState('شماره موبایل...');
    const navigate =useNavigate();
    
    const handleClick = (type:string) => {
        setClick(type);
        setplaceHolder(type === 'ایمیل' ? 'ایمیل...' : 'شماره موبایل...');
    };

    function handleLoginPasswordPage(){
        navigate('/login-password')
    }
    function handleVerifyPage(){
        navigate('/verify')
    }
    return(
        <>
        <Container  className="custom-width"style={{width:'55%'}}>
            <Row className="mt-5 text-end">
                <Col>
                <div className="text-center mt-5  d-none d-sm-block">
                             <img width={100} className="mx-1" sizes="sm" src="https://cinematicket.org/v3.30.13/assets/images/typography_dark.svg" alt="" />
                             <img width={25} sizes="sm" src="https://cinematicket.org/v3.30.13/assets/images/logo.svg" alt="" />
                    </div>
                    <div className="d-flex justify-content-end  d-none d-sm-block">
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
                            <Button   onClick={()=>handleClick('ایمیل')} variant="none" className={`col-6 custom-button ${click === 'ایمیل' ? 'click' : ''}`} size="sm">ایمیل </Button>
                            <Button variant="none" onClick={()=>handleClick('شماره موبایل')} className={`col-6 custom-button ${click === 'شماره موبایل' ? 'click' : ''}`}  size="sm">شماره موبایل</Button>
                            
                        </div>

                        <Form className="mt-3">
                            <Form.Group>
                                <FormControl dir="rtl" className=" custom-input p-2 col-12" type="text" placeholder={placeHolder}/>
                                
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