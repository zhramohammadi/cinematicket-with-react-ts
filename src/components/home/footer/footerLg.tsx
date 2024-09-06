import {MdEmail} from "react-icons/md";
import {FaFacebookF} from "react-icons/fa6";
import {FaTelegramPlane, FaTwitter} from "react-icons/fa";
import {PiInstagramLogoFill} from "react-icons/pi";
import {SiAparat} from "react-icons/si";
import footerButton from "./footerButton.tsx";
import {Button} from "react-bootstrap";


function FooterLg(){
    return(
        <>
            <footer className='footer fixed-bottom d-lg-block d-md-block d-none '>
                <div className='d-flex justify-content-between mx-5 mt-2'>
                    <div className='d-flex gap-3 '>
                        <a className='links' href='mailto:support@cinematicket.org'>
                            <MdEmail/>
                        </a>
                        <a className='links' href='https://www.facebook.com/cinematicket'>
                            <FaFacebookF/>
                        </a>
                        <a className='links' href='https://twitter.com/CinemaTicket'>
                            <FaTwitter/>
                        </a>
                        <a className='links' href='https://telegram.me/cinematicketorg'>
                            <FaTelegramPlane/>
                        </a>
                        <a className='links' href='https://www.instagram.com/cinematicket'>
                            <PiInstagramLogoFill/>
                        </a>
                        <a className='links' href='https://www.aparat.com/cinematicket/'>
                            <SiAparat/>
                        </a>
                    </div>

                    <div className='d-flex mx-2 '>
                        {footerButton.map((button) => (
                            <div key={button.id} className='item mb-2 '>
                                <Button className='text-light border-0 footer-size' size='sm' variant='none'>
                                    {button.buttonName}
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </footer>
        </>
    )
}

export default FooterLg;