import Footer from "../Components/Common/Footer";
import Header from "../Components/Common/Header"
import Notice from "../Components/Common/Notice";
import Slider from "../Components/Common/Slider";
import WhatsApp from "../Components/Common/WhatsApp";
import ContactContent from "../Components/ContactUsContent";

const Contact = () => {


    return (
        <div>
         <div
    className='sticky top-0 z-50'
    ><Notice/>
    <Header/>

    </div>
         <Slider/>
       <ContactContent/>
       <WhatsApp/>


    
    <Footer/>
    </div>

 
    
  );
};
export default Contact