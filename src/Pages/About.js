import Header from "../Components/Common/Header"
import Footer from "../Components/Common/Footer"
import AboutUs from "../Components/AboutPage/AboutUsContent"
import Notice from "../Components/Common/Notice"
import WhatsApp from "../Components/Common/WhatsApp"


const About = () => {

    return (
        <>
            <div
                className='sticky top-0 z-50'
            ><Notice />
                <Header />

            </div>
            <AboutUs />
            <WhatsApp />
            <Footer />
        </>
    )
}

export default About