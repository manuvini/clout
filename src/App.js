import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Grid from './Components/Grid';
    
function App() {
  return (
    <>
    <Header></Header>
    
    <div className="mt-8">
        <Grid />
      </div>

    
    <div  style={{ height: "100vh"}}>

    </div>

    


    <Footer></Footer>
  
    
    </> 
    
  );
}

export default App;
