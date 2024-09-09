import {GoFold} from "react-icons/go";
import {CiCreditCard1, CiParking1, CiShoppingBasket} from "react-icons/ci";
import {IoBookOutline, IoCarSportOutline, IoFastFoodOutline} from "react-icons/io5";
import {LiaSave} from "react-icons/lia";
import {BiStreetView} from "react-icons/bi";
import {PiCoffeeLight} from "react-icons/pi";
import {GiShoppingCart} from "react-icons/gi";
import {MdOutlineNetworkWifi} from "react-icons/md";

interface OptionButton{
    id:number,
    buttonName:string,
    icon:JSX.Element,
}

const optionButton: OptionButton[] = [
    {
        id: 1,
        buttonName: 'آسانسور',
        icon: <GoFold />,
    },
    {
        id: 2,
        buttonName: 'پارکینگ',
        icon:<CiParking1 /> ,
    },    {
        id: 3,
        buttonName:'بوفه' ,
        icon:<CiShoppingBasket /> ,
    },
    {
        id: 4,
        buttonName: 'رستوران ',
        icon:  <IoFastFoodOutline />,
    },
    {
        id: 5,
        buttonName: ' کارواش',
        icon: <IoCarSportOutline />,
    },
    {
        id: 6,
        buttonName:' کارتخوان' ,
        icon:<CiCreditCard1 /> ,
    },
    {
        id:7 ,
        buttonName: 'چاپ بلیت ',
        icon:<LiaSave /> ,
    },
    {
        id: 8,
        buttonName: ' دسترس پذیر',
        icon:  <BiStreetView />,
    },
    {
        id: 9,
        buttonName:' کافی شاپ' ,
        icon:<PiCoffeeLight /> ,
    },
    {
        id:10 ,
        buttonName:'فروشگاه ' ,
        icon: <GiShoppingCart />,
    },
    {
        id:11,
        buttonName:' اینترنت رایگاه' ,
        icon: <MdOutlineNetworkWifi />,
    },
    {
        id:12,
        buttonName:'کتابخانه ' ,
        icon:  <IoBookOutline />,
    },

]

export default optionButton;