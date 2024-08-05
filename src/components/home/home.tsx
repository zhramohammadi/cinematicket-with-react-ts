
import Header from './header/navbar';
import Carousel from './body/carousel/carousel';
import Sales from './body/salesChart/salesChart';
function Home(){
    return(
        <>
            <Header />
            <Carousel/>
            <Sales/>

        </>
    )
}

export default Home;