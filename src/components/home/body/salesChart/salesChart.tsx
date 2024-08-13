
import { Container,Col,Row,Button } from "react-bootstrap";
import { salesTable } from "../../../data/salesChart";
import { GoChevronDown } from "react-icons/go";

function sales(){

    function formatPrice (number:number){
        return number.toLocaleString('fa-IR')
    }

    return(
        <>
            <Container  className="d-inline-block mx-4 d-lg-blok d-md-block d-none ">
                <div className="mt-4 ">
                <div>
                    <div  className="d-flex justify-content-between text-muted">
                        <div >
                            <h6>
                                به روزرسانی:دیروز
                            </h6>
                        </div>
                        <div>
                            <h6>
                                جدول فروش
                            </h6>
                        </div>
                    </div>
                </div>
                <hr/>
                <Col>
                    {salesTable.map((sales) => (
                        <Row key={sales.id}>
                            <div className="d-flex  justify-content-end ">
                                <div className=" mt-3">
                                    <div className="d-flex">
                                        <p className="text-muted  amount-font-size">{formatPrice(sales.amount)}</p>
                                        <p className="title-font-size">{sales.title}</p >
                                    </div>
                                    <p className="text-end director-font-size">{sales.director}</p>
                                </div>
                                <div>
                                    <img className="sales-img mx-2" src={sales.img} alt={sales.title} />
                                </div>
                            </div>
                             <hr className="mt-2 text-muted"/>
                        </Row>
                    ))}
                    <div className="d-flex  justify-content-center">
                        <Button className="text-danger mt-1 mb-4" variant="none">
                            <GoChevronDown className="mx-2"/>
                            مشاهده کامل جدول فروش
                        </Button>
                    </div>
                </Col>

                </div>
            </Container>
        </>
    )
};

export default sales;