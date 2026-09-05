import errorstc from './assets/stickers/MQerrorSTICKER.webp'

import ratstc from './assets/stickers/MQratSTICKERgradient.webp'

import shinestc from './assets/stickers/MQshineSTICKER.webp'

export const STICKER_DATA = {
    error:{
        gallery: errorstc,
        closeup: errorstc,
        title: "error.png",
    },
    rat:{
        gallery: ratstc,
        closeup: ratstc,
        title: "rat.png",
    },
    shine:{
        gallery: shinestc,
        closeup: shinestc,
        title: "shine.png",
    },
}

//WEBP-fying
// Get-ChildItem *.png | ForEach-Object { ffmpeg -i $_.FullName "$($_.BaseName).webp" }