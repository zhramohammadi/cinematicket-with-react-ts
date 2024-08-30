const artAndExperience = [
    {
        id: 1,
        title: " مهمانی سایه ها ",
        director: " جمشید عبداللهی ",
        rating: 5,
        viewer: 1,
        poster: "images/categoriesOfMovies/ArtAndExperience/mehmani-saye-ha.webp "
    },
    {
        id:2 ,
        title: " لانه کبود ",
        director: " مهرشاد کارخانی ",
        rating: 4,
        viewer: 1,
        poster: "images/categoriesOfMovies/ArtAndExperience/lane-kabod.webp "
    },
    {
        id:3 ,
        title: " 7600 ",
        director: " بهروز باقری ",
        rating: 2.5,
        viewer: 4,
        poster: "images/categoriesOfMovies/ArtAndExperience/7600.webp "
    },
    {
        id:4 ,
        title: " تدفین ",
        director: " محمد تنابنده ",
        rating: 3.6,
        viewer: 5,
        poster: "images/categoriesOfMovies/ArtAndExperience/tadfin.webp "
    },
    {
        id: 5,
        title: " در جهنم باران نمیبارد ",
        director: " زهرا شاه حاتمی ",
        rating: 4.5,
        viewer: 2,
        poster: "images/categoriesOfMovies/ArtAndExperience/dar-jahanam-baran-nemibarad.webp "
    },
]

function comedyTheaterData (id:number) {
    const moviesList = artAndExperience.find((item)=>item.id ==id);
    if(moviesList){
        return moviesList;
    }else{
        throw new Error (`carousel whit id ${id} not found`)
    }
}

export {artAndExperience,comedyTheaterData};