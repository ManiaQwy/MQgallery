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

//import wavesposter from './assets/wavesWeffects.webp'
//import wavesgif from './assets/poster11gif.webp'

import icantkillmyselfposter from './assets/icantkillmyselfposter.webp'
import icantkillmyselfgif from './assets/poster12gif.webp'

import starfetchposter from './assets/starfetchers1.webp'
import starfetchgif from './assets/poster13gif.webp'

import polotposter from './assets/iwychodze.webp'
import polotgif from './assets/poster14gif.webp'

import leadbellyposter from './assets/leadbellyradom.webp'
import leadbellygif from './assets/poster15gif.webp'

import realboonkposter from './assets/GETREALFTBOONK.webp'
import realboonkgif from './assets/poster16gif.webp'

import boonkswampposter from './assets/boonkbog.webp'
import boonkswampgif from './assets/poster17gif.webp'

import punktwyjsciaposter from './assets/szaberpunktwyjscia.webp'
import punktwyjsciagif from './assets/poster18gif.webp'



export const GALLERY_DATA = {
    richarddjames:{
        poster: richarddposter,
        gif: richarddgif,
        title: "apex_peaks.png",
    },
    paletteexpander:{
        poster: paletteposter,
        gif: palettegif,
        title: "expand_your_palette.png",
    },
    wingsguidence:{
        poster: wingsposter,
        gif: wingsgif,
        title: "skyward_guidence.png",
    },
    nub:{
        poster: nubposter,
        gif: nubgif,
        title: "im_nubbing_it.png",
    },
    joz:{
        poster: jozposter,
        gif: jozgif,
        title: "joz_richardson_jazzpunk.png",
    },
    brainfuck:{
        poster: brainfuckposter,
        gif: brainfuckgif,
        title: "schizo_brainfuck.png",
    },
    sludge:{
        poster: sludgeposter,
        gif: sludgegif,
        title: "elektras_sludge.png",
    },
    ratlayer:{
        poster: ratlayerposter,
        gif: ratlayergif,
        title: "rat_layer.png",
    },
    jazzup:{
        poster: jazzupposter,
        gif: jazzupgif,
        title: "jassmine.png",
    },
    utility:{
        poster: pompeiiposter,
        gif: pompeiigif,
        title: "pompeiislashutility.png",
    },
    /*waves:{
        poster: wavesposter,
        gif: wavesgif,
        title: "wavy.png",
    },*/
    tumor:{
        poster: icantkillmyselfposter,
        gif: icantkillmyselfgif,
        title: "ifhumanbodyhadwhatsapp.png",
    },
    starfetch:{
        poster: starfetchposter,
        gif: starfetchgif,
        title: "fetchingstars.png",
    },
    polottribute:{
        poster: polotposter,
        gif: polotgif,
        title: "polot_tribute.png",
    },
    leadbelly:{
        poster: leadbellyposter,
        gif: leadbellygif,
        title: "rdmpompeii_leadbelly.png",
    },
    real:{
        poster: realboonkposter,
        gif: realboonkgif,
        title: "boonkgetsrealfr.png"
    },
    swamp:{
        poster: boonkswampposter,
        gif: boonkswampgif,
        title: "boonk_swamp.png"
    },
    esc:{
        poster: punktwyjsciaposter,
        gif: punktwyjsciagif,
        title: "PKTnietenESC.png"
    }
}

//WEBP-fying
// Get-ChildItem *.gif | ForEach-Object { ffmpeg -i $_.FullName -loop 0 "$($_.BaseName).webp" }
// Get-ChildItem *.png | ForEach-Object { ffmpeg -i $_.FullName "$($_.BaseName).webp" }