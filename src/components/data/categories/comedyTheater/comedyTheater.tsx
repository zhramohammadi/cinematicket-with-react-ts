const comedyTheater = [
    {
        id: 1,
        title: "کمدی هوو ",
        director: " پیام وزیری ",
        rating: 4.4,
        viewer: 2549,
        poster: "images/categoriesOfMovies/comedyTheater/havo.webp"
    },
    {
        id: 2,
        title: "دو خاستگار برای رعنا ",
        director: " پوریا وزیری ",
        rating: 4,
        viewer: 323,
        poster: "images/categoriesOfMovies/comedyTheater/do-khstegar-baraye-rana.webp "
    },
    {
        id: 3,
        title: "مخمصه ",
        director: " حمید رضا جهانگیری ",
        rating: 4.3,
        viewer: 532,
        poster: "images/categoriesOfMovies/comedyTheater/makhmase.webp "
    },
    {
        id: 4,
        title: "اگه بشه چی میشه ",
        director: " محید رضا طوبایی ",
        rating: 4.4,
        viewer: 835,
        poster: "images/categoriesOfMovies/comedyTheater/age-beshe-chi-mishe.webp "
    },
    {
        id: 5,
        title: "دردسرهای مرد مرده ",
        director: "آرزو کریمی زند ",
        rating: 4.1,
        viewer: 121,
        poster: "images/categoriesOfMovies/comedyTheater/dardesar-haye-marde-morde.webp "
    },
];

function comedyTheaterData (id:number) {
    const moviesList = comedyTheater.find((item)=>item.id ==id);
    if(moviesList){
        return moviesList;
    }else{
        throw new Error (`carousel whit id ${id} not found`)
    }
}

export {comedyTheater,comedyTheaterData};