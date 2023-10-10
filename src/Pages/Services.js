import Footer from "../Components/Common/Footer"
import Header from "../Components/Common/Header"
import Notice from "../Components/Common/Notice"
import ProductListing from "../Components/Common/SectionProducts"
import WhatsApp from "../Components/Common/WhatsApp"

const Services = () => {
    return (
        <>
            <div
                className='sticky top-0 z-50'
            ><Notice />
                <Header />

            </div>
            <ProductListing /> 
            <WhatsApp />
            <Footer />



        </>
    )
}

export default Services