import './App.css'
import Header from './components/Header'
import Gallery from './components/Gallery'
import SoundButton from './components/SoundButton'
import Footer from './components/Footer'
import Background from './components/Background'
import Quote from './components/Quote'
import Photobooth from './components/Photobooth'
import Burger from './components/Burger'
import Stickers from './components/Stickers'


function App() {

  return (
    <Background>
    <>
      <Gallery>
          <SoundButton></SoundButton>
          <Header/>
          <Photobooth/>
          {/*<Burger>
            <>
            <ul>
              <li>
                <a href="#1">POSTERIZER.2KXX</a>
              </li>
              <li>
                <a href="#2">CIRCUITBENDER.2KXX</a>
              </li>
            </ul>
            </>
          </Burger>*/}
      </Gallery>
      {/*<Quote>
            "You are a violent and irrepressible miracle. The vacuum of cosmos and the stars burning in it are afraid of you. Given enough time you would wipe us all out and replace us with nothing -- just by accident."
      </Quote>*/}
      <Stickers>

      </Stickers>
      <Footer></Footer>
      </>
      
    </Background>
  )
}

export default App
