import { useState } from "react";
import { createPortal } from "react-dom";
import { STICKER_DATA } from "../stickersData";
import PosterButton from "./PosterButton";
import './Sticker.css'
export default function Sticker(prop){
    const [newSticker, setNewSticker] = useState();

    const onStickerClick = (setPostStc) => {
        console.log("HALO SOURCE CONTROL")
        setNewSticker(setPostStc);
    }

    return(
        <>
            {/*<h1>stickers</h1>*/}
            {newSticker && createPortal(
                <section className="showoff" onClick={() => onStickerClick(undefined)}>
                    <img src={STICKER_DATA[newSticker].closeup} alt={STICKER_DATA[newSticker].title} />
                    <p>{STICKER_DATA[newSticker].title}</p>
                </section>,
                document.body
            )}
            <section id="gallery">
            {prop.children}
            {Object.entries(STICKER_DATA).map(([key, item]) => <PosterButton key={key} buttonImage={item.gallery} isSelected={newSticker == item.title} onSelect={() => onStickerClick(key)}></PosterButton>)}
        </section>
        </>
        
    )
}