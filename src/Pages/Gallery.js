import Footer from "../Components/Common/Footer"
import Grid from "../Components/Common/Grid"
import Header from "../Components/Common/Header"
import Notice from "../Components/Common/Notice"
import Slider from "../Components/Common/Slider"
import WhatsApp from "../Components/Common/WhatsApp"

const Gallery = () => {
    return (
        <>
            <div
                className='sticky top-0 z-50'
            ><Notice />
                <Header />

            </div>
            <Grid />
            <WhatsApp />

            <Footer />
        </>
    )

}

export default Gallery