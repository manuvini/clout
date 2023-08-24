import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Grid from './Components/Grid';
import BottomNavigation from './Components/BottomNav';
    
function App() {
  return (
    <>
    <Header></Header>
    <Grid></Grid>
    <div  style={{ height: "100vh"}}>

    </div>


    <BottomNavigation></BottomNavigation>

    <Footer></Footer>
  
    
    </> 
    
  );
}

export default App;
