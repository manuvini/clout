import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "./Pages/App"

const Router = () => {



    return(
        <>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<App />} />




        </Routes>
        
        
        </BrowserRouter>
        
        </>
    )
}


export default Router