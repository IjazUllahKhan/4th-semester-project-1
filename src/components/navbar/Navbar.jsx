import React from 'react'
import "./nav.css"

const Navbar = () => {
  return (
    <div className='navContainer'>
        <ul className='navContent'>
            <li><a href="#">Home</a></li>
            <li><a href="#">Others</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">About Us</a></li>
        </ul>
        <div className="search">
            <input type="text" placeholder='Search' className="searchInput" />
            <button className='searchBtn'>Search</button>
        </div>
    </div>
  )
}

export default Navbar