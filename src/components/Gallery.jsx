import { useState } from "react";
import { createPortal } from "react-dom";
import { GALLERY_DATA } from "../galleryData";
import PosterButton from "./PosterButton";
import './Gallery.css'
export default function Gallery(prop){
    const [newPoster, setNewPoster] = useState();

    const onPosterClick = (setPost) => {
        setNewPoster(setPost);
    }

    return(
        <>
            {newPoster && createPortal(
                <section className="showoff" onClick={() => onPosterClick(undefined)}>
                    <img src={GALLERY_DATA[newPoster].poster} alt={GALLERY_DATA[newPoster].title} />
                    <p>{GALLERY_DATA[newPoster].title}</p>
                </section>,
                document.body
            )}
            <section id="gallery">
            {prop.children}
            <h1>posters</h1>
            {Object.entries(GALLERY_DATA).reverse().map(([key, item]) => <PosterButton key={key} buttonImage={item.gif} isSelected={newPoster == item.title} onSelect={() => onPosterClick(key)}></PosterButton>)}
        </section>
        </>
        
    )
}