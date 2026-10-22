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

function App() {
  const [page, setPage] = useState('gallery')

  return (
    <Background>
      <>
        <Header>
          <SoundButton/>
        </Header>

        <nav className="menu">
          <button onClick={() => setPage('gallery')}>
            GALLERY -TEMPLATE
          </button>

          <button onClick={() => setPage('photobooth')}>
            PHOTOBOOTH - TEMPLATE
          </button>

          <button onClick={() => setPage('stickers')}>
            STICKERS - TEMPLATE
          </button>
          <button onClick={() => setPage('mache')}>
            ??? - TEMPLATE
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