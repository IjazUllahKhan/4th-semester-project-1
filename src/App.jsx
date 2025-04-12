import './App.css'
import Footer from './components/footer/Footer.jsx'
import Header from './components/header/Header.jsx'
import MainContent from './components/mainContent/MainContent.jsx'
import Navbar from './components/navbar/Navbar.jsx'
import Ticker from './components/ticker/Ticker.jsx'
function App() {
  return (
    <>
    <Header/>
    <Navbar/>
    <Ticker/>
    <MainContent/>
    <Footer/>
    </>
  )
}

export default App