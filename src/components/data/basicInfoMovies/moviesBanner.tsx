interface Movie {
    id: number;
    title?: string;
    director?: string;
    rating?: number;
    duration?: string;
    genre?: string;
    description?: string;
    images: {
        imgBack: string;
        imgBackSm: string;
        posterimg?: string;
    };
}

const basicInfo:Movie[] = [
        {
            id:1,
            title :"تگزاس3 ",
            director: " سیدمسعوداطیابی",
            rating: 3.9/5,
            duration: "100 دقیقه",
            genre: "کمدی",
            description: "...تگزاس 3 به کارگردانی سید مسعوداطیانی و تهیه کنندگی سید ابراهیم عامریان",
            images:{
                imgBack:"images/categoriesOfMovies/IranianMovie/background-tegzas.webp",
                imgBackSm:"images/categoriesOfMovies/IranianMovie/tegzas-back-sm.webp",
                posterimg: "images/categoriesOfMovies/IranianMovie/tegzas3.webp"
            }

        },

        {
            id:2,
            title :"اگه بشه چی میشه3 ",
            director: " حمید رضا طوبایی",
            rating: 4.5/5,
            duration: "90 دقیقه",
            genre: "کمدی",
            description: "...نمایش اگه بشه چی میشه به کارگردانی حمید رضا طوبایی و نویسندگی",
            images:{
                imgBack:"images/categoriesOfMovies/comedyTheater/ageBesheChiMishe.webp",
                imgBackSm:"images/categoriesOfMovies/comedyTheater/back-age-beshe.webp",
                posterimg: "images/categoriesOfMovies/comedyTheater/age-beshe-chi-mishe.webp"
            }

        },
        {
            id:3,
            images:{
                imgBack:"images/categoriesOfMovies/Theater/peperoni-back.webp",
                imgBackSm:"images/categoriesOfMovies/Theater/peperoni-backSm.webp"
            }

        },
    {
        id:4,
        title :"کتابخورها",
        director: " اسماعیل رحیمی سروش",
        rating: 4.7,
        duration: "55 دقیقه",
        genre: "کودک و نوجوان",
        description: "...نمایش کتابخور ها به کارگردانی و نویسندگی اسماعیل و",
        images:{
            imgBack:"images/categoriesOfMovies/KidsAndTeenager/ketabkhorha-back.webp",
            imgBackSm:"images/categoriesOfMovies/KidsAndTeenager/ketabkhorha-back-sm.webp",
            posterimg: "images/categoriesOfMovies/KidsAndTeenager/ketab-khorha.webp"
        }
           },

        {
            id:5,
            title :"راهبه2 ",
            director: "مایکل چاوز",
            rating: 4.3,
            duration: "100 دقیقه",
            genre: "ترسناک",
            description: "...فیلم راهبه 2 به کارگردانی مایکل چاوز و محصول 2023",
            images:{
                imgBack:"images/categoriesOfMovies/foreignFilm/background-rahebe.webp",
                imgBackSm:"images/categoriesOfMovies/foreignFilm/rahebe-back-sm.webp",
                posterimg: "images/categoriesOfMovies/foreignFilm/rehebe2.webp"
            }

        },
        {
            id:6,
            title :" در جهنم باران نمیبارد",
            director: " زهرا شاه حاتمی",
            rating: 4.5,
            duration: "100 دقیقه",
            genre:  "درام",
            description: "...فیلم در جهنم باران نمیبارد به کارگردانی",
            images:{
                imgBack:"images/categoriesOfMovies/ArtAndExperience/dar-jahanam-baran-nemibarad-back.webp",
                imgBackSm:"images/categoriesOfMovies/ArtAndExperience/dar-jahanam-baran-nemibarad-back-sm.webp",
                posterimg: "images/categoriesOfMovies/ArtAndExperience/dar-jahanam-baran-nemibarad.webp"
            }

        },

    ]


export default basicInfo;