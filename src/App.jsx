import { createContext, useState } from 'react'
import './App.css'
import ChildA from './components/childA'

const userContext = createContext()
const themeContext = createContext()

function App() {
  const [user,setUser] = useState("IUK")
  const [theme,setTheme] = useState("light")
  return (
    <>
    <themeContext.Provider  value={{theme,setTheme}}>
      <userContext.Provider value={user}>
        <ChildA/>
      </userContext.Provider>
   </themeContext.Provider>
    </>
  )
}

export default App


export {userContext}
export {themeContext}
