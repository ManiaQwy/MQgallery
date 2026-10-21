import errorstc from './assets/stickers/MQerrorSTICKER.webp'
import errorgif from './assets/gifs/sticker2gif.webp'

import ratstc from './assets/stickers/MQratSTICKERgradient.webp'
import ratgif from './assets/gifs/sticker1gif.webp'

import shinestc from './assets/stickers/MQshineSTICKER.webp'
import shinegif from './assets/gifs/sticker3gif.webp'

import wizstc from './assets/stickers/MQhandjobSTICKER.webp'
import wizgif from './assets/gifs/sticker4gif.webp'

import fleshstc from './assets/stickers/MQfleshnoirSTICKER.webp'
import fleshgif from './assets/gifs/sticker5gif.webp'

import horsestc from './assets/stickers/MQdiffuse2STICKER.webp'
import horsegif from './assets/gifs/sticker6gif.webp'

import cardstc from './assets/stickers/MQpostcardSTICKER.webp'
import cardgif from './assets/gifs/sticker7gif.webp'



export const STICKER_DATA = {
    error:{
        gallery: errorgif,
        closeup: errorstc,
        title: "error.png",
    },
    rat:{
        gallery: ratgif,
        closeup: ratstc,
        title: "rat.png",
    },
    shine:{
        gallery: shinegif,
        closeup: shinestc,
        title: "shine.png",
    },
    wiz:{
        gallery: wizgif,
        closeup: wizstc,
        title: "wizard.png"
    },
    rot:{
        gallery: fleshgif,
        closeup: fleshstc,
        title: "mold.png",
    },
    horse:{
        gallery: horsegif,
        closeup: horsestc,
        title: "what.png",
    },
    holiday:{
        gallery: cardgif,
        closeup: cardstc,
        title: "greetings.png"
    }
}

//???
//WEBP-fying
// Get-ChildItem *.png | ForEach-Object { ffmpeg -i $_.FullName "$($_.BaseName).webp" }