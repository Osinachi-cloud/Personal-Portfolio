import './App.css';
import Header from './Header'
import Bio from './Bio'
import { BrowserRouter as Router,} from "react-router-dom";
import Form from './Form';
import Services from './Services';
import Navtest from './Navtest';
import Footer from './Footer';



function App() {
  return (

    <Router>
    <div className="App">
      <div className="wrapper">
      <Navtest/>
      <Header/>
      <Bio/>
      <Services/>
      <Form/>
      </div>

      <Footer/>

     
    </div>
    </Router>
  );
}

export default App;
