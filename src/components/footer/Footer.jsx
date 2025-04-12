import React from 'react'
import "./footer.css"
const Footer = () => {
  return (
    <div className='footer-container'>
        <div className="footer-content">
            <div className="social">
            <div className="icon">
                <a href="#" className='fa fa-facebook' sname = "Facebook"></a>
            </div>
            <div className="icon"><a href="#" className='fa fa-twitter' sname  = "twitter"   ></a></div>
            <div className="icon"><a href="#" className='fa fa-youtube' sname = "youtube" ></a></div>
            <div className="icon"><a href="#" className='fa fa-linkedin' sname = "linkedin"  ></a></div>
            </div>
            <div className="copyRight">
                <p> Copyright &copy; March 29<sup>th</sup> 2025</p>
            </div>
        </div>
    </div>
  )
}

export default Footer