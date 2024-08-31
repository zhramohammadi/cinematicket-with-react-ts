interface SalesTable{
    id: number;
    title: string;
    director:string,
    amount:number,
    img:string,
}

const salesTable:SalesTable[] = [
    {
        id :1 ,
        title: "تمساح خونی ",
        director:"جواد عزتی ",
        amount: 165273362250,
        img:"images/sales/temsah-khoni.jpeg"
    },
    {
        id : 2,
        title: " تگزاس 3",
        director:" سید مسعود اطیابی",                                                                           
        amount: 147259347150,
        img:"images/sales/tegzas-3.jpeg"
    },
    {
        id : 3,
        title: "مست عشق ",
        director:" حسن فتحی",
        amount: 113069115550,
        img:"images/sales/mast-eshgh.jpeg"
    },
    {
        id : 4,
        title: "سال گربه ",
        director:" مصطفی تقی زاده",
        amount: 61829737500,
        img:"images/sales/sal-gorbe.jpeg"
    },
    {
        id : 5,
        title: "خجالت نکش 2 ",
        director:" رضا مقصودی",
        amount: 507707226200,
        img:"images/sales/khejalat-nakesh.jpeg"
    },
    {
        id : 6,
        title: "بی بدن ",
        director:"مرتضی علیزاده ",
        amount: 46445014500,
        img:"images/sales/bi-badan.jpeg"
    },
    {
        id : 7,
        title: "آسمان غرب ",
        director:"محمد عسگری ",
        amount: 10131442500,
        img:"images/sales/aseman-gharb.jpeg"
    },
    {
        id :8 ,
        title: "ایلیا جستجوی قهرمان ",
        director:" سید علی موسوی نژاد",
        amount: 7506102000,
        img:"images/sales/ilea-jostejoye-ghahreman.jpeg"
    },
    {
        id : 9,
        title: " آپارانچی",
        director:" قربانعلی طاهرفر",
        amount: 5744512500,
        img:"images/sales/aparanchi.jpeg"
    },
]

function getSales (id:number) {
    const carouselList = salesTable.find((item)=>item.id ==id);
    if(carouselList){
        return carouselList;
    }else{
        throw new Error (`sales whit id ${id} not found`)
    }
};

export {salesTable,getSales};