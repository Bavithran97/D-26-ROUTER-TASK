import './App.css';
import {Link,Route,Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import VetriMaran from "./components/VetriMaran";
import Shankar from "./components/Shankar";
import SanjayLeelaBhanshali from "./components/SanjayLeelaBhanshali";
import KaranJohar from "./components/KaranJohar";
import ManiRatnam from './components/ManiRatnam';
function App() {
  return (<>
  <div>
      <Navbar/>

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" 
    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            <Link to = "/sanjayLeelaBhanshali">SanjayLeelaBhanshali</Link></a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="#"><Link to = "/KaranJohar">KaranJohar</Link></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><Link to = "/Shankar">Shankar</Link></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><Link to = "/VetriMaran">VetriMaran</Link></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><Link to = "/ManiRatnam">ManiRatnam</Link></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  
        <Routes>
         <Route path ="/ManiRatnam" element = {<ManiRatnam/>}/>
         <Route path ="/VetriMaran" element = {<VetriMaran/>}/>
         <Route path ="/Shankar" element = {<Shankar/>}/>
         <Route path ="/KaranJohar" element = {<KaranJohar/>}/>
         <Route path ="/SanjayLeelaBhanshali" element = {<SanjayLeelaBhanshali/>}/>
        </Routes>
        </div>
        </>
  );
}

export default App;
