import './App.css'
import { useState } from 'react'

import Header from './components/Header'
import Gallery from './components/Gallery'
import SoundButton from './components/SoundButton'
import Footer from './components/Footer'
import Background from './components/Background'
import Photobooth from './components/Photobooth'
import Stickers from './components/Stickers'
import Papermache from './components/Papermache'
import testgif from './assets/misc/testgif.gif'

function App() {
  const [page, setPage] = useState('gallery')

  return (
    <Background>
      <>
        <Header>
          <SoundButton/>
        </Header>

        <nav className="menu">
          <button onClick={() => setPage('gallery')} className='menu-button'>
            GALLERY
            <img src={testgif} alt="W.I.P" className='menu-gif'/>
          </button>

          <button onClick={() => setPage('photobooth')} className='menu-button'>
            PHOTOBOOTH
            <img src={testgif} alt="W.I.P" className='menu-gif'/>
          </button>

          <button onClick={() => setPage('stickers')} className='menu-button'>
            STICKERS
            <img src={testgif} alt="W.I.P" className='menu-gif'/>
          </button>
          <button onClick={() => setPage('mache')} className='menu-button'>
            ???
            <img src={testgif} alt="W.I.P" className='menu-gif'/>
          </button>
        </nav>

        {page === 'gallery' && (
          <Gallery>
          </Gallery>
        )}

        {page === 'photobooth' && <Photobooth />}

        {page === 'stickers' && <Stickers />}

        {page === 'mache' && <Papermache />}

        <Footer />
      </>
    </Background>
  )
}

export default App