import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "./Pages/App"
import About from "./Pages/About"
import Services from "./Pages/Services"

const Router = () => {



    return(
        <>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About/>}></Route>
        <Route path="/services" element={<Services/>}></Route>





        </Routes>
        
        
        </BrowserRouter>
        
        </>
    )
}


export default Router