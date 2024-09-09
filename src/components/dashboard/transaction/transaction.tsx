import Dashboard from "../dashboard.tsx";
import {Container} from "react-bootstrap";

function Transaction( ) {
    return(
        <>
            <div className='d-lg-block d-md-block  d-none'>
                <Dashboard/>
            </div>
            <div className='col-xl-9 col-lg-8 col-md-7 mx-lg-4 mt-5'>
                <Container className='text-center'>
                    <div>
                        <div>
                            <img src='images/transaction/transaction.svg'/>
                        </div>
                        <div className='mt-4'>
                            <h6 className='fw-bold'>!تا به حال تراکنشی انجام نداده اید</h6>
                            <p className='text-muted'>.در این صفحه تراکنش های شما نمایش داده میشود</p>
                        </div>
                    </div>
                </Container>
            </div>

        </>
    )
}


export default Transaction;