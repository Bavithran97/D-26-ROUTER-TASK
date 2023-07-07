import React from "react";


function Navbar() {
    return(
        <div>
            <div><nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <b>SHOW TIME</b>
         </a>
        <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="MOVIES" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
        </div>
           </nav>
           </div>
           <div>
          <section className="hero">
            <img src="https://media.istockphoto.com/id/1404685434/vector/night-open-air-cinema-on-lawn-in-city-park.jpg?s=612x612&w=0&k=20&c=88JTgsjEEZ1S8jHkfM0D6zAfZhxUsj6IokMnRHtcg2k=" 
         className="home-image" alt="..." />
        </section>
         </div>
        </div>
     
    )
}
export default Navbar;
