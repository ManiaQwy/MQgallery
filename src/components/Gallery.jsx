import { useState } from "react";
import { GALLERY_DATA } from "../galleryData";
import PosterButton from "./PosterButton";
import './Gallery.css'
export default function Gallery(prop){
    const [newPoster, setNewPoster] = useState();

    const onPosterClick = (setPost) => {
        setNewPoster(setPost);
    }

    return(
        <section id="gallery">
            {newPoster ? (
                <section className="showoff" onClick={() => onPosterClick(undefined)}>
        <img src={GALLERY_DATA[newPoster].poster} alt={GALLERY_DATA[newPoster].title} />
        <p>{GALLERY_DATA[newPoster].title}</p>
        </section>
            ) : null}
            {prop.children}
            {Object.entries(GALLERY_DATA).map(([key, item]) => <PosterButton key={key} buttonImage={item.gif} isSelected={newPoster == item.title} onSelect={() => onPosterClick(key)}></PosterButton>)}
        </section>
    )
}