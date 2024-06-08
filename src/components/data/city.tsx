interface city{
    id:number,
    title:string
}

const cityList: city[] =[
    {
        id:1,
        title:"همه شهرها"
    },
    {
        id:2,
        title:"تهران"
    },
    {
        id:3,
        title:"مشهد"
    },
    {
        id:4,
        title:"اصفهان"
    },
    {
        id:5,
        title:"شیراز"
    },
    {
        id:6,
        title:"کرج"
    },
    {
        id:7,
        title:"قم"
    },
    {
        id:8,
        title:"گرگان"
    },
    {
        id:9,
        title:"قزوین"
    },
    {
        id:10,
        title:"زنجان"
    },
    {
        id:11,
        title:"تبریز"
    },
    {
        id:12,
        title:"اهواز"
    },
    {
        id:13,
        title:"همدان"
    },
    {
        id:14,
        title:"سنندج"
    },
    {
        id:15,
        title:"زاهدان"
    },
    {
        id:16,
        title:"کاشان"
    },
    {
        id:17,
        title:"اردبیل"
    },
    {
        id:18,
        title:"اراک"
    },
    {
        id:19,
        title:"نیشابور"
    },
    {
        id:20,
        title:"بوشهر"
    },
    {
        id:21,
        title:"بابل"
    },
    {
        id:22,
        title:"ساری"
    },
    {
        id:23,
        title:"رامسر"
    },
    {
        id:24,
        title:"آبادان"
    },
    {
        id: 25,
        title:"کرمانشاه"
    },
    {
        id: 26,
        title:"بروجرد"
    },
    {
        id:27 ,
        title:"بیرجند"
    },
    {
        id:28 ,
        title:"رفسنجان"
    },
    {
        id: 29,
        title:"اسکو"
    },
    {
        id:30 ,
        title:"سبزوار"
    },
    {
        id:31 ,
        title:"ملایر"
    },
    {
        id:32 ,
        title:"خوی"
    },
    {
        id:33 ,
        title:"یزد"
    },
    {
        id:34 ,
        title:"شاهرود"
    },
    {
        id: 35,
        title:"رشت"
    },
    {
        id:36 ,
        title:"بهبهان"
    },
    {
        id:37 ,
        title:"ارومیه"
    },
    {
        id:38 ,
        title:"خرم آباد"
    },
    {
        id:39 ,
        title:"کرمان"
    },
    {
        id:40 ,
        title:"اندیشمک"
    },
]


function getCityData(id:number):city{
    const cityData = cityList.find((item)=>item.id ==id);
    if(cityData){
        return cityData;
    }else{
        throw new Error(`city whit id ${id} not found`)
    }
}

export {cityList, getCityData};