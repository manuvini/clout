import './App.css';
import Header from '../Components/Common/Header';
import Footer from '../Components/Common/Footer';
import Grid from '../Components/Common/Grid';
import BottomNavigation from '../Components/Common/BottomNav';
import Slider from '../Components/Common/Slider';
import ProductListing from '../Components/Common/SectionProducts';
import WhatsApp from '../Components/Common/WhatsApp';
import Notice from '../Components/Common/Notice';
import HomeCenter from '../Components/HomePage.js/HomeCenter';
import ServiceSlider from '../Components/HomePage.js/ServiceSlider';
import ReviewsSection from '../Components/HomePage.js/ReviewsSection';
import HorizontalProductView from '../Components/HomePage.js/ServiceSlider';
import TestimonialSection from '../Components/HomePage.js/ReviewsSection';
    
function App() {
  return (
    <>

    <div
    className='sticky top-0 z-50'
    ><Notice/>
    <Header/>

    </div>
    
    

    <Slider></Slider>
    {/* <ProductListing></ProductListing> */}

<HomeCenter/>

<HorizontalProductView/>

<TestimonialSection/>
<WhatsApp/>

    <Footer></Footer>






    {/* <div className="mt-8">
        <Grid />
      </div> */}
    

    
{/* <BottomNavigation></BottomNavigation> */}

  
    
    </> 
    
  );
}

export default App;
