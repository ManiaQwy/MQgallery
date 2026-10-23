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
import menustickers from './assets/misc/stickers.png'
import menuposters from './assets/misc/posters.png'
import menuphotos from './assets/misc/photobooth2.png'
import headgif from './assets/misc/headgif.gif'
import Mqpopup from './components/Mqpopup'

function App() {
  const [page, setPage] = useState('gallery')

  return (
    <>
    <Background>
      <>
        <Header>
          <SoundButton/>
        </Header>

        <nav className="menu">
          <button onClick={() => setPage('gallery')} className='menu-button'>
            <img src={menuposters} alt="W.I.P" className='menu-gif'/>
          </button>

          <button onClick={() => setPage('photobooth')} className='menu-button'>
            <img src={menuphotos} alt="W.I.P" className='menu-gif'/>
          </button>

          <button onClick={() => setPage('stickers')} className='menu-button'>
            <img src={menustickers} alt="W.I.P" className='menu-gif'/>
          </button>
          <button onClick={() => setPage('mache')} className='menu-button'>
            <img src={headgif} alt="W.I.P" className='menu-gif'/>
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
    <Mqpopup/>
    </>
  )
}

export default App