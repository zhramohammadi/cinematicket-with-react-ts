import IranianMoviesBanner from "./IranianMovie/iranianMoviesbaner.tsx";
import IranianMovies from "./IranianMovie/iranianMovies.tsx";
import ComedyTheaterBanner from "./ComedyTheater/ComedyTheaterBanner.tsx";
import ComedyTheater from "./ComedyTheater/comedyTheater.tsx";
import TheaterBanner from "./Theater/theaterBanner.tsx";
import TheaterList from "./Theater/theater.tsx"
import KidsAndTeenagerBanner from "./KidsAndTeenager/kidsAndTeenagerBanner.tsx";
import KidsAndTeenager from "./KidsAndTeenager/kidsAndTeenager.tsx";
import ForeignFilmBanner from "./foreignFilm/foreignFilmBanner.tsx";
import ForeignFilm from "./foreignFilm/foreignFilm.tsx";
import ArtAndExperienceBanner from "./ArtAndExperience/artAndExperienceBanner.tsx";
import ArtAndExperience from "./ArtAndExperience/artAndExperience.tsx";
    function Categories(){
        return(
            <>
                <IranianMoviesBanner/>
                <IranianMovies/>
                <ComedyTheaterBanner/>
                <ComedyTheater/>
                <TheaterBanner/>
                <TheaterList/>
                <KidsAndTeenagerBanner/>
                <KidsAndTeenager/>
                <ForeignFilmBanner/>
                <ForeignFilm/>
                <ArtAndExperienceBanner/>
                <ArtAndExperience/>

            </>
        )
    }

    export default Categories;