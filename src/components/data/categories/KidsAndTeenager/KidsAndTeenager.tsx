interface KidsAndTeenager {
    id:number,
    title:string,
    director:string,
    rating:number,
    viewer:number,
    poster:string,
}
const kidsAndTeenager:KidsAndTeenager[] = [
    {
        id: 1,
        title: " کتابخورها ",
        director: " اسماعیل رحیمی سروش ",
        rating: 4.7,
        viewer:3,
        poster: "images/categoriesOfMovies/KidsAndTeenager/ketabkhorha.webp"
    },
    {
        id:2 ,
        title: " اتفاقات عجیب 16 سالگی ",
        director: "شازده کوچولو ",
        rating: 5,
        viewer:1,
        poster: "images/categoriesOfMovies/KidsAndTeenager/etefaghate-jadide-16salegi.webp "
    },
    {
        id: 3,
        title: " شازده کوچولو ",
        director: " احمد تیموری ",
        rating: 3.3,
        viewer:6,
        poster: "images/categoriesOfMovies/KidsAndTeenager/shazde-kocholo.webp "
    },
    {
        id:4 ,
        title: " سفر پر ماجرا ",
        director: " حجت الله سیفی ",
        rating: 2.3,
        viewer:23,
        poster: "images/categoriesOfMovies/KidsAndTeenager/safar-por-majara.webp "
    },
    {
        id: 5,
        title: "پاندای کونگفوکار  ",
        director: " مایکل میچل ",
        rating: 4.6,
        viewer:41,
        poster: "images/categoriesOfMovies/KidsAndTeenager/panda.webp "
    },
    {
        id: 6,
        title: " خانم قدا گول نخوریا ",
        director: " میثم میثاقی ",
        rating: 4.5,
        viewer:8,
        poster: "images/categoriesOfMovies/KidsAndTeenager/khanom-ghoda-gol-nakhoria.webp "
    },
    {
        id: 7,
        title: " میمون ها ",
        director: " مریم اسکندری ",
        rating: 4.2,
        viewer:17,
        poster: "images/categoriesOfMovies/KidsAndTeenager/meymonha.webp "
    },
    {
        id:8 ,
        title: " چوپان و چوب جادویی ",
        director: " محمد حسین داداش نیا ",
        rating:5 ,
        viewer:5,
        poster: "images/categoriesOfMovies/KidsAndTeenager/chopan-va-chob-jadoie.webp "
    },
    {
        id:9 ,
        title: " آرزوی الاغ ",
        director: " محمد حسین داداش نیا ",
        rating: 4,
        viewer:21,
        poster: "images/categoriesOfMovies/KidsAndTeenager/arezoye-olagh.webp"
    },

]

function moviesData (id:number) {
    const moviesList = kidsAndTeenager.find((item)=>item.id ==id);
    if(moviesList){
        return moviesList;
    }else{
        throw new Error (`carousel whit id ${id} not found`)
    }
}

export {kidsAndTeenager,moviesData};