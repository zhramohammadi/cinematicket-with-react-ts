import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveButton } from './../../../redux/footerSlice.tsx';
import { RootState } from './../../../redux/store.tsx';
import footerButton from './footerButton.tsx'
import { Link } from 'react-router-dom';
import {Button} from "react-bootstrap";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { SiAparat } from "react-icons/si";
import { FiUser } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";
import { RiMovieLine } from "react-icons/ri";
import { AiOutlineHome } from "react-icons/ai";


interface FooterButtonProps {
    name: string;
    icon: JSX.Element;
}

const footerButtons: FooterButtonProps[] = [
    { name: 'login', icon: <FiUser /> },
    { name: 'search', icon: <IoSearchOutline /> },
    { name: 'cinema', icon: <RiMovieLine /> },
    { name: 'home', icon: <AiOutlineHome /> },

];

function Footer (){

    const dispatch = useDispatch();
    const activeButton = useSelector((state: RootState) => state.footer.activeButton);

    return(
        <>
            <footer className='footer fixed-bottom d-lg-block d-md-block d-none '>
                <div className='d-flex justify-content-between mx-5 mt-2'>
                    <div className='d-flex gap-3'>
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

                    <div  className='d-flex mx-3'>
                        {footerButton.map((button) => (
                            <div key={button.id} className='item mb-2'>
                                <Button className='text-light border-0' size='sm' variant='none'>
                                    {button.buttonName}
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </footer>

            <footer className="footersm fixed-bottom d-lg-none d-md-none d-block justify-content-between">
                <div className="d-flex justify-content-around items">
                    {footerButtons.map((button) => (
                        <Button
                            key={button.name}
                            variant="none"
                            className={`d-flex flex-column align-items-center border-0 ${
                                activeButton === button.name ? 'text-danger' : ''
                            }`}
                            onClick={() => dispatch(setActiveButton(button.name))}
                        >
                            <Link to={`/${button.name}`} className=" links d-flex flex-column align-items-center ">
                            <span className='fs-3'>{button.icon}</span>
                            <span className='items'>{button.name === 'home' ? 'خانه' : button.name === 'search' ? 'جستجو' : button.name === 'cinema' ? 'سینما' :'ورود' }</span>
                            </Link>
                            </Button>
                    ))}
                </div>
            </footer>
        </>
    )
}

export default Footer;