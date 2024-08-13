

const carouselItem = [
    {
        id: 1,       
        caption :"تمساح خونی",
        director: "جواد عزتی",
        votes: 3685,
        ating: 3.4,
        duration: "106 دقیقه",
        genre: ["اکشن", "کمدی"],
        Description: "...تمساح خونی نخستین ساخته جواد عزتی به عنوان کارگردان و به",
        images: {
            left :"images/carousel/temsah-khoni1.webp",
            right:"images/carousel/temsah-khoni2.webp",
            background:"images/carousel/temsah-khoni3.webp"
        }
    },
    {
        id: 2,       
        caption :"آبی روشن ",
        director: "بابک خواجه پاشا ",
        votes: 114,
        ating: 3.5,
        duration: "90 دقیقه",
        genre: ["اجتماعی", "درام"],
        Description: "...فیلم آی روشن به کارگردانی بابک خواجه پاشا و تهیه کنندگی سید محمد حسین میری",
        images: {
            left: "images/carousel/abi-roshan3.webp",
            right :"images/carousel/abi-roshan2.webp",
            background:"images/carousel/abi-roshan1.webp"
        }
    },
    {
        id: 3,      
        caption :" مست عشق ",
        director: "  حسن فتحی ",
        votes: 2439,
        ating: 3.9,
        duration: "105 دقیقه",
        genre: ["تاریخی", "عاشقانه"],
        Description: "...فیلم مست عشق به کارگردانی و نویسندگی حسن فتحیو تهییه کنندگی",
        images: {
            left :"images/carousel/mast-eshgh1.webp",
            right: "images/carousel/mast-eshgh2.webp",
            background:"images/carousel/mast-eshgh3.webp"
        }
    },
    {
        id: 4,       
        caption :"  بی بدن ",
        director: "  مرتضی علیزاده ",
        votes: 2087,
        ating: 4.4,
        duration: "100 دقیقه",
        genre: ["جنایی","اکشن"],
        Description: "...بی بدن نخستین ساخته مرتضی علیزاده به عنوان کارگردان با بازی",
        images: {
            left :"images/carousel/bi-badan1.webp",
            right: "images/carousel/bi-badan2.webp",
            background:"images/carousel/bi-badan3.webp"
        }
    },
    {
        id: 5,       
        caption :"عطر آلود ",
        director: "  هادی مقدم دوست  ",
        votes: 83,
        ating: 2.9,
        duration: "90 دقیقه",
        genre: ["احتماعی","درام"],
        Description: "...فیلم عطر آلود به کارگردانی هادی مقدم و تهیه کنندگی یوسف تیموری ",
        images: {
            left :"images/carousel/atr-alod1.webp",
            right: "images/carousel/atr-alod3.webp",
            background:"images/carousel/atr-alod2.webp"
        }
    },

]

function getcarouselData (id:number) {
    const carouselList = carouselItem.find((item)=>item.id ==id);
    if(carouselList){
        return carouselList;
    }else{
        throw new Error (`carousel whit id ${id} not found`)
    }
}

export {carouselItem,getcarouselData};