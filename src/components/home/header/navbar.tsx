
import { useState } from "react";
import {Link} from 'react-scroll';
import { Navbar as NavbarBs,ButtonGroup } from "react-bootstrap";
import navbarButton from "../../data/navbarButton.tsx";

function Navbar (){

      const [activeButton, setActiveButton] = useState(null);
      const handleClick = (buttonIndex:any) => {
         setActiveButton(buttonIndex);
      };
    return(
        <>
            <NavbarBs className="mx-5" dir="rtl">
                <ButtonGroup >
                       {navbarButton.map((buttonText, index) => (
                     <Link  to={buttonText.id}  key={index}  className={` navbarButton mx-2 text-dark fontsize ${activeButton === index ? 'fontsizeOnClick' : ''} text-md-center d-md-block d-none`} onClick={() => handleClick(index)}>
                        {buttonText.buttonName}
                     </Link>
                       ))}
                 </ButtonGroup>
            </NavbarBs>
        </>       
    )
}

export default Navbar;