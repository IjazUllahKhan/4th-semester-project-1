import React from 'react'
import "./header.css"

const Header = () => {
  return (
    <div className='headerContainer'>
      <div className='headerContent'>
      <img src="edu.logo.png" alt="" className='logoImage' />
        <div className="centerContent">
          <h1>GOVT.AKL.PG COLLEGE MATTA SWAT</h1>
          <h3>
            Online Admission System
          </h3>
        </div>
        <img src="clg.jpeg" alt="" className='rightImage'/>
      </div>
    </div>
  )
}

export default Header