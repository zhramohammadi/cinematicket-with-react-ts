
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Navbar as NavbarBs,Nav,Button,ButtonGroup , Container, Modal,Form,Row,Col, NavbarToggle, NavbarCollapse, NavbarBrand } from "react-bootstrap";
import { cityList } from "../../data/city";
import { CiUser } from "react-icons/ci";
import { TfiTicket } from "react-icons/tfi";
import { TfiLocationPin } from "react-icons/tfi";
import { IoIosArrowDown } from "react-icons/io";
import { TbCurrentLocation } from "react-icons/tb";
import { RiCloseLargeFill } from "react-icons/ri";
import { BsPlayCircle } from "react-icons/bs";
function Navbar (){

    const [showModal, setShowModal]=useState(false);
    const [selectedCityName,setSelectedCityName] =useState("موقعیت مکانی");  
    const [searchText, setSearchText]=useState("");
    const [activeButton, setActiveButton] = useState(null);
    const navigate = useNavigate();


    const handleShow=() =>setShowModal(true);
    const handleCloseModal =()=>setShowModal(false);
    const handleCity = (cityName:string)=>setSelectedCityName(cityName);
    const filteredCity = cityList.filter((city)=>
        city.title.toLowerCase().includes(searchText.toLowerCase())
    )


    const handleClick = (buttonIndex:any) => {
        setActiveButton(buttonIndex);
      };

      function handleLoginPage() {
        navigate('/Login');
      }

    const buttons = [
        "فیلم ایرانی",
        "تئاتر کمدی",
        "تئاتر",
        "کودک و نوجوان",
        "فیلم خارجی",
        "هنر و تجربه",
      ];

    return(
        <>
        
             <NavbarBs className="border-bottom ">
            <Container fluid>
                <Nav className="mx-1 "dir="ltr">
                    <Button onClick={handleLoginPage} size="sm" className="text-muted  custom-button d-md-block d-none" variant="btn outline-secondary">
                        ورود یا ثبت نام
                     <Link to='/login'></Link>
                     <CiUser />
                    </Button>
                    <Button size="sm" className="text-muted  custom-button" variant="btn outline-secondary">
                        بلیط های من 
                        <TfiTicket  />
                    </Button>
                <NavbarBs.Collapse>
                    <Button onClick={handleShow} size="sm" className="text-muted  custom-button  d-md-block d-none" variant="btn outline-secondary">
                    <IoIosArrowDown />
                         {selectedCityName}
                        <TfiLocationPin />
                    </Button>
                    <TfiLocationPin onClick={handleShow}  className="m-2 d-md-none d-lg-none d-sm-block "/>
                </NavbarBs.Collapse>
                <Modal show={showModal} onHide={handleCloseModal} dir='rtl' size="lg" className="mt-5">
                    <Modal.Header>
                    <RiCloseLargeFill className="closeButton"  onClick={handleCloseModal} />
                        <Modal.Title className="text-muted m-2" >موقعیت مکانی</Modal.Title>
                        <Form className="mx-2 ">
                            <Form.Group>
                            <Form.Control value={searchText} onChange={(e) => setSearchText(e.target.value)} className=" custom-input"  type="search" placeholder="جستجوی نام شهر ..."></Form.Control> 
                            </Form.Group>
                       </Form>
                    </Modal.Header>
                    <Modal.Body className="custom-scrollbar mx-4" >
                    <Row xl={4} lg={3} md={2} sm={1} xs={1}>
                     {filteredCity.map((city) => (
                         <Col onClick={()=>handleCity(city.title)} className="mt-2  custom-button text-muted" key={city.id}>{city.title}</Col>
                        ))}
                     </Row>
                        
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="btn btn-danger">
                            <TbCurrentLocation className="m-1" />
                            مکان یابی
                        </Button>
                    </Modal.Footer>
                </Modal >
                </Nav>
                <Nav className=" mt-1" dir="rtl">
                    <Button variant="" >
                        <img width={17}  src="https://cinematicket.org/v3.30.13/assets/images/logo.svg" alt="" />
                        <img width={70}  sizes="sm" src="https://cinematicket.org/v3.30.13/assets/images/typography_dark.svg" alt="" />
                    </Button>
                    <Button variant=""  className="cinema  d-md-block d-none">
                    <BsPlayCircle />
                        سینما
                    </Button>
                        <Form className="mt-1  d-md-block d-none">
                            <Form.Group>
                            <Form.Control value={searchText} onChange={(e) => setSearchText(e.target.value)} style={{ width: "100%" }} className=" custom-input "  type="search" placeholder="جستجوی فیلم.سینما کارگردان.بازیگر و..."></Form.Control> 
                            </Form.Group>
                       </Form>
                </Nav> 
            </Container>
             </NavbarBs>
 
        <NavbarBs className="mx-5" dir="rtl">
        <ButtonGroup >
           {buttons.map((buttonText, index) => (
         <Button  key={index} variant="" className={`fontsize ${activeButton === index ? 'fontsizeOnClick' : ''} text-md-center d-md-block d-none`} onClick={() => handleClick(index)}>
            {buttonText}
         </Button>
           ))}
         </ButtonGroup>

        </NavbarBs>

        </>       
    )
}

export default Navbar;