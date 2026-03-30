import './App.css'
import Header from './components/Header'
import Gallery from './components/Gallery'
import SoundButton from './components/SoundButton'
import Footer from './components/Footer'
import Background from './components/Background'
import Burger from './components/Burger'

function App() {

  return (
    <Background>
    <>
      <Gallery>
        <Header/>
        <Burger>
          <SoundButton/>
        </Burger>
      </Gallery>
      <Footer></Footer>
      </>
      
    </Background>
  )
}

export default App
