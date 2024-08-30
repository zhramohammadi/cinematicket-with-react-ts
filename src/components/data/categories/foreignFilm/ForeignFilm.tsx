const foreignFilm = [
    {
        id: 1,
        title: " درون و بیرون ",
        director: " کلسی مان ",
        rating: 4.5,
        viewer: 2,
        poster: "images/categoriesOfMovies/foreignFilm/inside out.webp "
    },
    {
        id: 2,
        title: " راهبه 2 ",
        director: " مایکل چاوز ",
        rating: 4.2,
        viewer: 43,
        poster: "images/categoriesOfMovies/foreignFilm/rehebe2.webp "
    },
    {
        id:3 ,
        title: " تاروت ",
        director: " اسپنسر کوهن ",
        rating: 2.7,
        viewer: 6,
        poster: "images/categoriesOfMovies/foreignFilm/tarot.webp "
    },
    {
        id:4 ,
        title: " longlegs ",
        director: " آز پرکیدز ",
        rating: 3.7,
        viewer: 32,
        poster: "images/categoriesOfMovies/foreignFilm/longlegs.webp "
    },
    {
        id: 5,
        title: " دایره سرخ ",
        director: " ژان پیر ملویل ",
        rating: 4.1,
        viewer: 43,
        poster: "images/categoriesOfMovies/foreignFilm/the red circle.webp "
    },
]

function moviesData (id:number) {
    const moviesList = foreignFilm.find((item)=>item.id ==id);
    if(moviesList){
        return moviesList;
    }else{
        throw new Error (`carousel whit id ${id} not found`)
    }
}

export {foreignFilm,moviesData};