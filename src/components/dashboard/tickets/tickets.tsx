import Dashboard from "../dashboard.tsx";
import {Button, Container} from "react-bootstrap";

function Tickets( ) {
    return(
        <>
            <div className='d-lg-block d-md-block  d-none'>
                <Dashboard/>
            </div>
            <div className='col-xl-9 col-lg-8 col-md-7 mx-lg-4 mt-5'>
                <Container className='text-center'>
                    <div>
                        <div>
                            <img src='images/tickets/ticket.svg'/>
                        </div>
                        <div className='mt-5'>
                            <h6 className='fw-bold'>!تا به حال بلیتی نخریدید</h6>
                            <p className='text-muted'>.در این صفحه بلیت های فعال و بیلط هایی که قبلا خریده اید به شما نمایش داده میشود</p>
                        </div>
                        <div className='mt-4'>
                            <Button className='bg-danger border-0 p-2'>
                                مشاهده فیلم ها و خرید بلیت
                            </Button>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}


export default Tickets;