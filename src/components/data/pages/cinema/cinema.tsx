import {GoFold} from "react-icons/go";
import {CiCreditCard1, CiParking1, CiShoppingBasket} from "react-icons/ci";
import {IoBookOutline, IoCarSportOutline, IoFastFoodOutline} from "react-icons/io5";
import {LiaSave} from "react-icons/lia";
import {BiStreetView} from "react-icons/bi";
import {PiCoffeeLight} from "react-icons/pi";
import {GiShoppingCart} from "react-icons/gi";
import {MdOutlineNetworkWifi} from "react-icons/md";


interface CinemaItem{
    id:number,
    cinemaName:string,
    address:string,
    rating:number,
    votes:number,
    image:string,
    icons:JSX.Element[],
}

const cinemaData :CinemaItem[] =[
    {
        id: 1,
        cinemaName:' پردیس سینمایی زندگی',
        address:'میدان صادقیه،بلوارکاشانی،بلوار اباذر  ',
        rating:3.3 ,
        votes:1376 ,
        image:'images/cinema/zendegi.webp',
        icons:[
            <CiParking1 />,
            <IoFastFoodOutline />,
            <CiCreditCard1 />,
            <LiaSave />,
            <PiCoffeeLight />,
        ]
    },
    {
        id:2 ,
        cinemaName:' پردیس سینمایی مگامال',
        address:' شهرک اکباتان،فاز2',
        rating:3.7 ,
        votes:3195 ,
        image: 'images/cinema/mgamal.webp',
        icons:[
            <GiShoppingCart />,
            <IoBookOutline />,
            <PiCoffeeLight />,
            <BiStreetView />,
            <LiaSave />,
            <IoCarSportOutline />
        ]
    },
    {
        id:3 ,
        cinemaName:' پردیس سینما آزادی',
        address:'خیابان بهشتی،نبش خالد اسلامبولی(وزرا) ',
        rating: 3.3,
        votes: 3576,
        image: 'images/cinema/azadi.webp',
        icons:[
            <GoFold />,
            <CiParking1 />,
            <CiShoppingBasket />,
            <IoCarSportOutline />,
            <IoFastFoodOutline />,
            <CiCreditCard1 />,
            <LiaSave />
        ]
    },
    {
        id: 4,
        cinemaName:'بام نیایش ',
        address:'...جنب آباد مرکزی-بلوار آبشناسان-کند ',
        rating: 3.8,
        votes:126 ,
        image: 'images/cinema/niayesh.webp',
        icons:[
            <IoFastFoodOutline />,
            <CiCreditCard1 />,
        ]
    },
    {
        id: 5,
        cinemaName:' پردیس سینمایی پرده طلایی',
        address:'... تهران،آیت الله سعیدی،شهرکولیعصر،',
        rating: 4.6,
        votes: 264,
        image: 'images/cinema/talaie.webp',
        icons:[
            <IoFastFoodOutline />,
            <CiParking1 />,
            <CiShoppingBasket />,
            <PiCoffeeLight />,
            <GiShoppingCart />,
            <MdOutlineNetworkWifi />
        ]
    },
    {
        id: 6,
        cinemaName:'پردیس سینمایی رزمال ',
        address:'...تهران،اتوبان خرای،انتهای ',
        rating: 4.3,
        votes: 103,
        image:'images/cinema/rzmal.webp' ,
        icons:[
            <IoBookOutline />,
            <MdOutlineNetworkWifi />,
            <PiCoffeeLight />
        ]
    },
    {
        id: 7,
        cinemaName:' پردیس سینمایی هدیش',
        address:'...میدان هروی-خ موسوی-روبه روی خیابان ',
        rating:4.4 ,
        votes:474 ,
        image: 'images/cinema/hediesh.webp',
        icons:[
            <GoFold />,
            <CiParking1 />,
            <CiShoppingBasket />,
            <IoFastFoodOutline />,
            <PiCoffeeLight />
        ]
    },
    {
        id: 8,
        cinemaName:'پردیس سینمایی باغ کتاب ',
        address:'... بزرگراه شهید حقانی،ورودی کتابخانه ملی',
        rating: 3.6,
        votes:3745 ,
        image: 'images/cinema/bagh-ketab.webp',
        icons:[
            <PiCoffeeLight />,
            <GiShoppingCart />,
            <MdOutlineNetworkWifi />,
            <IoBookOutline />,
            <IoCarSportOutline />,
            <IoFastFoodOutline />,
            <CiShoppingBasket /> ,
        ]
    },
    {
        id: 9,
        cinemaName:'پردیس سینمایی معین مال ',
        address:'...ابتدای خیابان آزادی،ابتدای خیابان استاد ',
        rating: 4.3,
        votes:224 ,
        image: 'images/cinema/moeinmal.webp',
        icons:[
            <CiShoppingBasket /> ,
            <CiParking1 /> ,
            <IoFastFoodOutline />,
            <GoFold />,
            <CiParking1 /> ,
        ]
    },
    {
        id: 10,
        cinemaName:' پردیس سینما گالری ملت',
        address:' ...خیابان ولیعصر،بزرگراه هاشمی رفسنجانی',
        rating: 3.3,
        votes:2094 ,
        image: 'images/cinema/melat.webp',
        icons:[
            <CiParking1 /> ,
            <CiShoppingBasket /> ,
            <IoFastFoodOutline />,
            <CiCreditCard1 /> ,
            <LiaSave /> ,
            <BiStreetView />,
        ]
    },
    {
        id:11 ,
        cinemaName:'پردیس سینمایی چارسو ',
        address:'خیابان جمهوری تقاطع حافظ ',
        rating: 3.8,
        votes: 2989,
        image: 'images/cinema/charso.webp',
        icons:[
            <BiStreetView />,
            <PiCoffeeLight /> ,
            <GoFold />,
            <CiParking1 /> ,
            <CiShoppingBasket /> ,
        ]
    },
    {
        id:12 ,
        cinemaName:' پردیس سینمایی نارسیس',
        address:' بالاتر از فلکه سوم تهران پارس',
        rating:3.8 ,
        votes:291 ,
        image:'images/cinema/narsis.webp' ,
        icons:[
            <GoFold />,
            <LiaSave /> ,
        ]
    },
    {
        id: 13,
        cinemaName:'پردیس سینمایی اطلس مال تهران ',
        address:'...نیاوران سه راه اقدسیه[موحد دانش] ',
        rating: 3.8,
        votes: 85,
        image:'images/cinema/atlas-mal.webp' ,
        icons:[
            <CiShoppingBasket /> ,
            <IoFastFoodOutline />,
            <GoFold />,
            <LiaSave /> ,
            <CiCreditCard1 /> ,
        ]
    },    {
        id: 14,
        cinemaName:' پردیس سینمایی شمیران',
        address:' ...اقدسیه،بزرگراه ارتش،مجموعه شمیران',
        rating: 4.4,
        votes:259 ,
        image: 'images/cinema/shemiran.webp',
        icons:[
            <GoFold />,
            <CiParking1 /> ,
            <CiShoppingBasket /> ,
            <IoFastFoodOutline />,
            <CiCreditCard1 /> ,
            <LiaSave /> ,
            <PiCoffeeLight /> ,
        ]
    },    {
        id:15 ,
        cinemaName:'سینما فرهنگ تهران ',
        address:' ...خیابان شریعتی،بالاتر از خیابان',
        rating: 3.5,
        votes: 2087,
        image:'images/cinema/farhang.webp' ,
        icons:[
            <PiCoffeeLight /> ,
            <GiShoppingCart />,
            <MdOutlineNetworkWifi />,
            <IoBookOutline />,
            <CiParking1 /> ,
            <GoFold />,
        ]
    },    {
        id: 16,
        cinemaName:'پردیس سینمایی ارگ ',
        address:' ...میدان تجریش،انتهای کوهسنگی- مجتمع',
        rating: 3.5,
        votes: 1171,
        image: 'images/cinema/arg.webp',
        icons:[
            <CiParking1 /> ,
            <GoFold />,
            <CiShoppingBasket /> ,
            <IoFastFoodOutline />,
        ]
    },
    {
        id:17 ,
        cinemaName:'پردیس سینمایی راگا',
        address:' ...شهرری،اتوبان شهید آوینی،خیابان کریم ',
        rating: 3.3,
        votes:611 ,
        image: 'images/cinema/raga.webp',
        icons:[
            <BiStreetView />,
            <PiCoffeeLight /> ,
            <GoFold />,
            <CiParking1 /> ,
            <CiShoppingBasket /> ,
            <IoFastFoodOutline />,
        ]
    },
{
    id: 18,
    cinemaName:'پردیس سینمایی پرندمال',
    address:' ...شهرجدیدپرند،شمال فاز3،میدان',
    rating: 4.5,
    votes: 364,
    image:'images/cinema/parand-mal.webp' ,
    icons:[
        <CiShoppingBasket /> ,
        <IoFastFoodOutline />,
        <CiCreditCard1 /> ,
        <LiaSave /> ,
        <PiCoffeeLight /> ,
        <GoFold />,
    ]
},

]

export default cinemaData;