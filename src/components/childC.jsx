import React, { useContext } from 'react'
import { themeContext, userContext } from '../App'
import "../App.css"

const ChildC = () => {
  const user = useContext(userContext)
  const {theme , setTheme} = useContext(themeContext)
  function toggleTheme(){
    if(theme === "light") setTheme("dark")
    
    else 
      setTheme("light")
  }
  return (
    <div>
      <h1>
        Name: {user}
      </h1>
      <div id='theme' style={{backgroundColor: theme === "dark"? "black":"beige"}}>
        <button onClick={toggleTheme}>Change Theme</button>
      </div>
    </div>
  )
}

export default ChildC