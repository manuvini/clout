import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "./Pages/App"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Services from "./Pages/Services"
import Gallery from "./Pages/Gallery"
import PrivacyPolicy from "./Pages/PrivacyPolicy"
import TermsConditions from "./Pages/Terms&Conditions"
import ServicePolicy from "./Pages/ServicePolicy"

const Router = () => {



    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/about" element={<About />}></Route>

                    <Route path="/gallery" element={<Gallery />}></Route>

                    <Route path="/services" element={<Services />}></Route>

                    <Route path="/contact" element={<Contact />}></Route>

                    <Route path="/termsConditions" element={<TermsConditions />}></Route>

                    <Route path="/privacypolicy" element={<PrivacyPolicy/>}></Route>


                    <Route path="/servicepolicy" element={<ServicePolicy/>}></Route>


        <Route path="/contact" element={<Contact/>}></Route>

                </Routes>


            </BrowserRouter>

        </>
    )
}


export default Router