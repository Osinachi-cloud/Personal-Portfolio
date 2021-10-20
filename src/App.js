import './App.css';
import Header from './Header'
import Bio from './Bio'
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Form from './Form';
import Particle from './Particle';
import Nav from './Nav';
import Navbar from './Navbar';
import Services from './Services';
import Navtest from './Navtest';
import Footer from './Footer';



function App() {
  return (
    <Router>
    <div className="App">
      {/* <Navbar/> */}
      <Navtest/>
      <Header/>
      {/* <Particle/> */}
      <Bio/>
      <Services/>
      <Form/>
      <Footer/>

     
    </div>
    </Router>
  );
}

export default App;
