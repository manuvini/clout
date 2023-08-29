import './App.css';
import Header from '../Components/Common/Header';
import Footer from '../Components/Common/Footer';
import Grid from '../Components/Common/Grid';
import BottomNavigation from '../Components/Common/BottomNav';
import Slider from '../Components/Common/Slider';
import ProductListing from '../Components/Common/SectionProducts';
import WhatsApp from '../Components/Common/WhatsApp';
import Notice from '../Components/Common/Notice';
    
function App() {
  return (
    <>
    <Notice/>
    <Header>
    </Header>

    <Slider></Slider>
    <ProductListing></ProductListing>

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
