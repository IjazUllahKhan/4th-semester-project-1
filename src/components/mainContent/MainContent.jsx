import React from 'react'
import "./mainContent.css"

const MainContent = () => {
  return (
    <div className="mainContainer">
        <aside >
            <ul className='sideBar'>
                <li><a href="#">Home</a></li>
                <li><a href="#">Others</a></li>
                <li><a href="#">Gallery</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">About Us</a></li>
            </ul>
        </aside>
        <main >
            <h1 >Online Admission Form</h1>
            <form action="#">
              <div className="form-field">
                <label htmlFor="name">Enter Your Name:</label>
                <input type="text" name="name" id="name" className='input-field' />
              </div>

              <div className="form-field">
                <label htmlFor="fname">Enter Your Father Name:</label>
                <input type="text" name="fname" id="fname" className='input-field' />
              </div>

              <div className="form-field">
                <label >Select Your Gender:</label>
                <div className="radio-group">
                  <input type="radio" name="gender" id="male" value= "male" />
                  <label htmlFor="male">Male</label>
                  <input type="radio" name="gender" id="female" value= "female" />
                  <label htmlFor="female">Female</label>
                  <input type="radio" name="gender" id="other" value= "other" />
                  <label htmlFor="other">Other</label>
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="dob">Date of Birth:</label>
                <input type="date" name="dob" id="dob" className='input-field' />
              </div>

              <div className="form-field">
                <label htmlFor="email">Email Address:</label>
                <input type="email" name="email" id="email"  className='input-field'/>
              </div>

              <div className="form-field">
                <label htmlFor="adress">Enter Your Address:</label>
                <input type="text" name="adress" id="adress" className='input-field' />
              </div>

              <div className="form-field">
                <label>Select Your Subject :</label>
                <select name="subject" id="subject">
                  <option value="" disabled hidden selected >Select One</option>
                  <option value="computer-science">Computer Science</option>
                  <option value="Biology">Biology</option>
                  <option value="Chemistry">Chemistry</option>
                </select>
              </div>

              <div className="btns">
                <button type="submit">Submit</button>
                <button type="reset">Reset</button>
              </div>
            </form>
        </main>
    </div>
  )
}

export default MainContent