import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "./Pages/App"
import About from "./Pages/About"

const Router = () => {



    return(
        <>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About/>}></Route>




        </Routes>
        
        
        </BrowserRouter>
        
        </>
    )
}


export default Router