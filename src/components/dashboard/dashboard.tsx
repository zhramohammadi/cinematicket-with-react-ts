import './dashboard.css'
import { Link } from 'react-router-dom';
import {Row, Col, Button} from "react-bootstrap";
import dashboardButton from "../data/dashboardButton.tsx";
import { GoChevronLeft } from "react-icons/go";
import { CiLogout } from "react-icons/ci";

function Dashboard() {
    return(
        <>
            <div>
                <div className='col-xl-3 col-lg-4 col-md-4 col-12 sideBox bg-white w-auto'>
                    <Col className='mt-4'>
                        {dashboardButton.map((button)=>(
                            <Row key={button.id}>
                                <Link to={button.path} className='dashboard-size border-0 text-decoration-none text-black p-md-3 p-sm-3 p-3 text-center'>
                                    <div className='d-flex justify-content-between buttonstyle'>
                                        <GoChevronLeft className='mx-3'/>
                                        <span className='mx-5'>
                                            {button.buttonName}
                                            {button.icon}
                                        </span>
                                    </div>
                                    <hr className='text-muted mt-4 d-lg-none d-md-none d-sm-none d-block'/>
                                </Link>
                            </Row>
                        ))}
                        <hr className='text-muted d-lg-block d-md-block d-sm-block d-none'/>

                        <div className='text-center buttonstyle dashboard-size'>
                            <Button variant='none' className='text-end border-0  '>
                                خروج از حساب کاربری
                                <CiLogout className='mx-2 text-danger'/>
                            </Button>
                        </div>
                    </Col>
                </div>
                <div className='col-lg-9 main'>
                    <main>
                    </main>
                </div>
            </div>
        </>
    )
}

export default Dashboard;