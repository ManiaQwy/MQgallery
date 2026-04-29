import './App.css'
import Header from './components/Header'
import Gallery from './components/Gallery'
import SoundButton from './components/SoundButton'
import Footer from './components/Footer'
import Background from './components/Background'
import Quote from './components/Quote'
//import Burger from './components/Burger'


function App() {

  return (
    <Background>
    <>
      <Gallery>
          <SoundButton>
            <Header/>
          </SoundButton>
      </Gallery>
      <Quote>
            "You are a violent and irrepressible miracle. The vacuum of cosmos and the stars burning in it are afraid of you. Given enough time you would wipe us all out and replace us with nothing -- just by accident."
      </Quote>
      <Footer></Footer>
      </>
      
    </Background>
  )
}

export default App
