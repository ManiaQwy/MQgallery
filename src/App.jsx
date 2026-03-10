import './App.css'
import Header from './components/Header'
import Gallery from './components/Gallery'
import SoundButton from './components/SoundButton'
import Footer from './components/Footer'
import Background from './components/Background'

function App() {

  return (<Background>
    <>
    <SoundButton/>
      <Gallery>
        <Header/>
      </Gallery>
      <Footer></Footer>
      </>
      </Background>
  )
}

export default App
