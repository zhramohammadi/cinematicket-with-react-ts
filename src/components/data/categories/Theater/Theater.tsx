const theater = [
    {
        id: 1,
        title: " پپرونی برای دیکتاتور ",
        director: " علی احمدی ",
        rating: 5,
        viewer:4,
        poster: "images/categoriesOfMovies/Theater/peperoni.webp"
    },
    {
        id: 2,
        title: " شکستن خط فرضی ",
        director: " رسول کاهانی ",
        rating: 5,
        viewer:2,
        poster: "images/categoriesOfMovies/Theater/shekastane-khate-farzi.webp"
    },
    {
        id: 3,
        title: " ریش آبی",
        director: " آروند دشت آرای ",
        rating: 2.4,
        viewer:5,
        poster: "images/categoriesOfMovies/Theater/rish-abi.webp"
    },
    {
        id: 4,
        title: " حق با مردم بود ",
        director: " علی نیکزاد ",
        rating: 4,
        viewer:423,
        poster: "images/categoriesOfMovies/Theater/hagh-ba-mardom-bod.webp"
    },
    {
        id: 5,
        title: " چاپلین ",
        director: " مهران رنجبر ",
        rating: 3.7,
        viewer:14,
        poster: "images/categoriesOfMovies/Theater/chaplin.webp"
    },
    {
        id: 6,
        title: " اسماعیل گرجی ",
        director: " علی احمدی ",
        rating: 3.2,
        viewer:87,
        poster: "images/categoriesOfMovies/Theater/varagh-khial.webp"
    },
    {
        id: 7,
        title: " من و گربه پری ",
        director: " شهره سلطانی ",
        rating: 2.4,
        viewer:36,
        poster: "images/categoriesOfMovies/Theater/man-va-gorbe-pari.webp"
    },
    {
        id: 8,
        title: " تیتانیوم",
        director: " اشکان درویشی ",
        rating: 4.5,
        viewer:246,
        poster: "images/categoriesOfMovies/Theater/titaniom.webp"
    },
    {
        id: 9,
        title: " خاطره تحمل ناپإیر یک همهمه نامفهوم",
        director: " الهام کردا ",
        rating: 2.5,
        viewer:216,
        poster: "images/categoriesOfMovies/Theater/khatere.webp"
    },
    {
        id: 10,
        title: "خام سفید ",
        director: " محمدرضا هلال زاده ",
        rating: 4.3,
        viewer:54,
        poster: "images/categoriesOfMovies/Theater/khak-sefid.webp"
    },
]

function moviesData (id:number) {
    const moviesList = theater.find((item)=>item.id ==id);
    if(moviesList){
        return moviesList;
    }else{
        throw new Error (`carousel whit id ${id} not found`)
    }
}

export {theater,moviesData};