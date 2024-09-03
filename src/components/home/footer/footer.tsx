import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveButton } from './../../../redux/footerSlice.tsx';
import { RootState } from './../../../redux/store.tsx';
import { Link } from 'react-router-dom';
import {Button} from "react-bootstrap";
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