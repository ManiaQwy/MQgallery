import errorstc from './assets/stickers/MQerrorSTICKER.webp'
import errorgif from './assets/gifs/sticker3gif.webp'

import ratstc from './assets/stickers/MQratSTICKERgradient.webp'
import ratgif from './assets/gifs/sticker1gif.webp'

import shinestc from './assets/stickers/MQshineSTICKER.webp'
import shinegif from './assets/gifs/sticker2gif.webp'

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
}

//???
//WEBP-fying
// Get-ChildItem *.png | ForEach-Object { ffmpeg -i $_.FullName "$($_.BaseName).webp" }