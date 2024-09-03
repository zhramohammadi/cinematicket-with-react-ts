import {IoWalletOutline} from "react-icons/io5";
import {FaRegEdit} from "react-icons/fa";
import {TfiTicket} from "react-icons/tfi";
import {AiOutlineControl} from "react-icons/ai";
import { PiUserFocusLight } from "react-icons/pi";


interface DashboardButton{
    id:number,
    buttonName:string
    icon:JSX.Element,
    path:string
}

const dashboardButtons: DashboardButton[] = [
    {
        id:1 ,
        buttonName:'کیف پول ',
        icon: <IoWalletOutline className='text-danger mx-2'/>,
        path: '/wallet',
    },
    {
        id:2 ,
        buttonName:' اطلاعات کاربری',
        icon: <FaRegEdit className='text-danger mx-2'/>,
        path: '/editProfile',
    },
    {
        id: 3,
        buttonName:' احراز هویت',
        icon: <PiUserFocusLight className='text-danger mx-2'/>,
        path: '/authentication'
    },
    {
        id: 4,
        buttonName:'تراکنش ها ',
        icon: <TfiTicket className='text-danger mx-2'/>,
        path: '/transaction'
    },
    {
        id:5 ,
        buttonName:'بلیط های من ',
        icon: <AiOutlineControl className='text-danger mx-2'/> ,
        path:'/tickets'
    },
]

export default dashboardButtons;