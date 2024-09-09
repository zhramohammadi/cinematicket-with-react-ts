import './authentication.css';
import {Button, Col, Container, Row} from "react-bootstrap";
import { GoNorthStar } from "react-icons/go";
import Dashboard from "../dashboard.tsx";

function Authentication( ) {
    return(
        <>
            <div className='d-lg-block  d-none'>
                <Dashboard/>
            </div>
           <div className='d-flex justify-content-start align-items-start  col-xl-9 col-lg-8 mx-lg-4'>
                <Container className='bg-white text-end p-5 authentication'>
                    <div>
                        <h6>احراز هویت</h6>
                        <p className='mt-4'>
                            .با توجه به
                            <a href='' className='text-decoration-none p-1'> قوانین شفافیت مالی </a>
                            وبه جهت برداشت وجه از کیف پول لطفا اطلاعات زیر را تکمیل کنید.توجه کنید که اطلاعات ارائه شده باید
                            <span className='fw-bold p-2'>متعلق به یک فرد </span>
                            باشد
                        </p>
                    </div>

                    <div className='mt-5 text-muted '>
                        <Row>
                            <Col className='col-lg-6 col-md-6 col-sm-6 col-12'>
                                <div>
                                    <div>
                                        <GoNorthStar  className='mx-1 text-danger'/>
                                        <span> شماره موبایل</span>
                                    </div>
                                    <input className='mt-2 border-0 w-100' type='number' placeholder='09362066163'/>
                                </div>
                                <div>
                                    <div className='mt-4'>
                                        <GoNorthStar  className='mx-1 text-danger '/>
                                        <span>شماره شبا</span>
                                    </div>
                                    <input className='mt-2 border-0 text-muted w-100' type='number' placeholder='IR   ---- ---- ---- ---- ---- ----'/>
                                </div>
                            </Col>
                            <Col className='col-lg-6 col-md-6 col-sm-6 col-12'>
                                <div>
                                    <div >
                                        <GoNorthStar className='mx-1 text-danger '/>
                                        <span>تاریخ تولد</span>
                                    </div>
                                    <input className='mt-2 border-0 text-muted w-100' type='date'/>
                                </div>
                                <div className='mt-4'>
                                    <div>
                                        <GoNorthStar className='mx-1 text-danger'/>
                                        <span> کد ملی</span>
                                    </div>
                                    <input className='mt-2 border-0 w-100' type='email'
                                           placeholder='xxxxxxxxxx'/>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <Button className='mt-5 bg-white text-muted p-2' variant={'btn btn-outline-secondary'}>
                            ویرایش اطلاعات و درخواست بررسی
                        </Button>
                    </div>
                </Container>
           </div>
        </>
    )
}

export default Authentication;