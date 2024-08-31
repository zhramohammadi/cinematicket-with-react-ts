interface IraninanMovie {
  id:number,
  title:string,
  director:string,
  rating:number,
  viewer:number,
  poster:string,
}
const iraninan:IraninanMovie[]  = [
    {
        id: 1,
        title: "سال گربه  ",
        director: " مصطفی تقی زاده  ",
        rating: 2.9,
        viewer: 1493,
        poster: "images/categoriesOfMovies/IranianMovie/sal-gorbe.webp"
      },
      {
        id: 2,
        title: "یادگار جنوب",
        director: "پدرام پور امیری",
        rating: 3.4,
        viewer:212,
        poster: "images/categoriesOfMovies/IranianMovie/yadegare-jonob.webp"
      },
      {
        id: 3,
        title: " روایات ناتمام سیما",
        director: "علی رضا صمدی",
        rating: 3.1,
        viewer:31,
        poster: "images/categoriesOfMovies/IranianMovie/revayat-natamam-sima.webp"
      },
      {
        id: 4,
        title: "عطر آلود",
        director: "هادی مقدم ",
        rating: 2.8,
        viewer:99,
        poster: "images/categoriesOfMovies/IranianMovie/atr-alod.webp"
      },
      {
        id: 5,
        title: "این جمعیت قابل کنترل ",
        director: "محمد متین اوجانی  ",
        rating: 3.9,
        viewer:34,
        poster: "images/categoriesOfMovies/IranianMovie/in-jamiat-ghabele-kontrol.webp"
      },
      {
        id: 6,
        title: "تگزاس 3",
        director: "سید مسعود اطیابd  ",
        rating: 3.9,
        viewer:1965,
        poster: "images/categoriesOfMovies/IranianMovie/tegzas-3.webp"
      },
      {
        id: 7,
        title: "خجالت نکش 2",
        director: "رضا مقصودی ",
        rating: 3.1,
        viewer:658,
        poster: "images/categoriesOfMovies/IranianMovie/khejalat-nakesh-2 (2).webp"
      },
      {
        id: 8,
        title: "مست عشق",
        director: " حسن فتحی ",
        rating: 3.9,
        viewer:2520,
        poster: "images/categoriesOfMovies/IranianMovie/mast-eshgh.webp"
      },
      {
        id: 9,
        title: "آبی روشن ",
        director: " بابک خواجه پاشا  ",
        rating: 3.5,
        viewer:122,
        poster: "images/categoriesOfMovies/IranianMovie/abi-roshan.webp"
      },
      {
        id: 10,
        title: "شور عاشقی  ",
        director: " دلریوش یاری",
        rating: 3.8,
        viewer:66,
        poster: "images/categoriesOfMovies/IranianMovie/shore-asheghi.webp"
      },
      {
        id: 11,
        title: "کوچه ژاپنی ها ",
        director: "  امیر حسین ثقفی",
        rating: 2.8,
        viewer:31,
        poster: "images/categoriesOfMovies/IranianMovie/koche-zhaponi-ha.webp"
      },
      {
        id: 12,
        title: "تمساح خونی ",
        director: "  جواد عزتی  ",
        rating: 3.8,
        viewer:3751,
        poster: "images/categoriesOfMovies/IranianMovie/temsah-khoni.webp"
      },
      {
        id: 13,
        title: "پول پارتی  ",
        director: " سعید سهیلی   ",
        rating: 4.4,
        viewer:17,
        poster: "images/categoriesOfMovies/IranianMovie/pol-parti.webp"
      },
      {
        id: 14,
        title: "ساعت 6 صبح  ",
        director: " مهران مدیری   ",
        rating: 4.4,
        viewer:14,
        poster: "images/categoriesOfMovies/IranianMovie/saat-6-sobh.webp"
      },
      {
        id: 15,
        title: " مصاعب شیرین 2 ",
        director: "  جواد عزتی  ",
        rating: 3.3,
        viewer:3,
        poster: "images/categoriesOfMovies/IranianMovie/masaeb-shirin-2.webp"
      },

];

function moviesData (id:number) {
    const moviesList = iraninan.find((item)=>item.id ==id);
    if(moviesList){
        return moviesList;
    }else{
        throw new Error (`carousel whit id ${id} not found`)
    }
}

export {iraninan,moviesData};