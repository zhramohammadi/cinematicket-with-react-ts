import './editProfile.css'
import {Button, Col,Row, Container} from "react-bootstrap";
import Dashboard from "../dashboard.tsx";
import ProfileUpload from "./profileUpload .tsx";
import { BiRename } from "react-icons/bi";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { AiOutlineMail } from "react-icons/ai";
import { CiCalendarDate } from "react-icons/ci";
import { GoChevronLeft } from "react-icons/go";
import { CiLock } from "react-icons/ci";


function EditProfile( ) {


    return(
        <>
            <div className='d-lg-block  d-none'>
                <Dashboard/>
            </div>
            <div  className='d-flex justify-content-start align-items-start  col-xl-9 col-lg-8 mx-lg-4'>
                <Container fluid className=' edit-profile bg-white '>
                    <div className='text-end p-4 w-100'>
                        <div>
                            <ProfileUpload/>
                        </div>
                        <div className='mt-4 text-muted'>
                            <Row>
                                <Col className='col-lg-6 col-md-6 col-sm-6 col-12'>
                                    <div>
                                        <div>
                                            <span> شماره موبایل</span>
                                            <HiOutlineDevicePhoneMobile className='mx-2'/>
                                        </div>
                                        <input className='mt-2 border-0 w-100' type='number' placeholder='093644332066163'/>
                                    </div>
                                    <div>
                                        <div className='mt-4'>
                                            <span>تاریخ تولد</span>
                                            <CiCalendarDate className='mx-2'/>
                                        </div>
                                        <input className='mt-2 border-0 text-muted w-100' type='date'/>
                                    </div>
                                </Col>
                                <Col className='col-lg-6 col-md-6 col-sm-6 col-12'>
                                    <div>
                                        <div>
                                            <span> نام و نام خانوادگی</span>
                                            <BiRename className='mx-2'/>
                                        </div>
                                        <input className='mt-2 text-end border-0 w-100' type='text'
                                               placeholder='اصغر فرهادی'/>
                                    </div>
                                    <div className='mt-4'>
                                        <div>
                                            <span> ایمیل</span>
                                            <AiOutlineMail className='mx-2'/>
                                        </div>
                                        <input className='mt-2 border-0 w-100' type='email'
                                               placeholder='mohammadi@gmail.com'/>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <hr className='d-flex text-muted'/>
                        <div>
                            <Button className='border-0 p-2' variant='none'>
                                <GoChevronLeft className='mx-2'/>
                                انتخاب یا تغییر گذرواژه
                                <CiLock className='mx-2'/>
                            </Button>
                        </div>
                        <hr className='d-flex text-muted'/>
                        <div>
                            <Button className='bg-danger border-0 p-2 mb-5 col-lg-2 col-md-2 col-sm-3 col-12'>
                                ثبت تغییرات
                            </Button>
                        </div>
                    </div>
                </Container>
            </div>
            </>
            )
            }

            export default EditProfile;