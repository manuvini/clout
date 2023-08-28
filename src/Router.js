import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "./Pages/App"
import About from "./Pages/About"
import Contact from "./Pages/Contact"

const Router = () => {



    return(
        <>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About/>}></Route>






        <Route path="/contact" element={<Contact/>}></Route>

        </Routes>
        
        
        </BrowserRouter>
        
        </>
    )
}


export default Router