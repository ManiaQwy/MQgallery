import richarddposter from './assets/richarddhighres.webp'
import richarddgif from './assets/poster1gif.webp'

import paletteposter from './assets/expandyourpaletteposterized.webp'
import palettegif from './assets/poster2gif.webp'

import wingsposter from './assets/lywgyposter.webp'
import wingsgif from './assets/poster3gif.webp'

import nubposter from './assets/imnubbingit.webp'
import nubgif from './assets/poster4gif.webp'

import jozposter from './assets/jozislandposterized.webp'
import jozgif from './assets/poster5gif.webp'

import brainfuckposter from './assets/Schizodipshitbrainfuck.webp'
import brainfuckgif from './assets/poster6gif.webp'

import sludgeposter from './assets/wasteland.webp'
import sludgegif from './assets/poster7gif.webp'

import ratlayerposter from './assets/ratlayer.webp'
import ratlayergif from './assets/poster8gif.webp'

import jazzupposter from './assets/jazzup.webp'
import jazzupgif from './assets/poster9gif.webp'

import pompeiiposter from './assets/pompeiislashutility.webp'
import pompeiigif from './assets/poster10gif.webp'

import wavesposter from './assets/wavesWeffects.webp'
import wavesgif from './assets/poster11gif.webp'

import icantkillmyselfposter from './assets/icantkillmyselfposter.webp'
import icantkillmyselfgif from './assets/poster12gif.webp'



export const GALLERY_DATA = {
    richarddjames:{
        poster: richarddposter,
        gif: richarddgif,
        title: "apex_peaks.png",
        date: "18.01.2026"
    },
    paletteexpander:{
        poster: paletteposter,
        gif: palettegif,
        title: "expand_your_palette.png",
        date: "19.01.2026"
    },
    wingsguidence:{
        poster: wingsposter,
        gif: wingsgif,
        title: "skyward_guidence.png",
        date: "20.01.2026"
    },
    nub:{
        poster: nubposter,
        gif: nubgif,
        title: "im_nubbing_it.png",
        date: "20.01.2026"
    },
    joz:{
        poster: jozposter,
        gif: jozgif,
        title: "joz_richardson_jazzpunk.png",
        date: "20.01.2026"
    },
    brainfuck:{
        poster: brainfuckposter,
        gif: brainfuckgif,
        title: "schizo_brainfuck.png",
        date: "20.01.2026"
    },
    sludge:{
        poster: sludgeposter,
        gif: sludgegif,
        title: "elektras_sludge.png",
        date: "20.01.2026"
    },
    ratlayer:{
        poster: ratlayerposter,
        gif: ratlayergif,
        title: "rat_layer.png",
        date: "20.01.2026"
    },
    jazzup:{
        poster: jazzupposter,
        gif: jazzupgif,
        title: "jassmine.png",
        date: "20.01.2026"
    },
    utility:{
        poster: pompeiiposter,
        gif: pompeiigif,
        title: "pompeiislashutility.png",
        date: "20.01.2026"
    },
    waves:{
        poster: wavesposter,
        gif: wavesgif,
        title: "wavy.png",
        date: "20.01.2026"
    },
    tumor:{
        poster: icantkillmyselfposter,
        gif: icantkillmyselfgif,
        title: "ifhumanbodyhadwhatsapp.png",
        date: "20.01.2026"
    },
}

//WEBP-fying
// Get-ChildItem *.gif | ForEach-Object { ffmpeg -i $_.FullName -loop 0 "$($_.BaseName).webp" }