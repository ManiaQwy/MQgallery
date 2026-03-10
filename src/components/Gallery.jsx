import { useState } from "react";
import { GALLERY_DATA } from "../galleryData";
import PosterButton from "./PosterButton";
import './Gallery.css'
export default function Gallery(prop){
    const [newPoster, setNewPoster] = useState();

    const onPosterClick = (setPost) => {
        setNewPoster(setPost);
        console.log(newPoster);
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
            <PosterButton buttonImage={GALLERY_DATA["richarddjames"].gif}isSelected={newPoster == 'richarddjames'} onSelect={() => onPosterClick("richarddjames")}></PosterButton>
            <PosterButton buttonImage={GALLERY_DATA["paletteexpander"].gif}isSelected={newPoster == 'paletteexpander'} onSelect={() => onPosterClick("paletteexpander")}></PosterButton>
            <PosterButton buttonImage={GALLERY_DATA["wingsguidence"].gif}isSelected={newPoster == 'wingsguidence'} onSelect={() => onPosterClick("wingsguidence")}></PosterButton>
            <PosterButton buttonImage={GALLERY_DATA["nub"].gif}isSelected={newPoster == 'nub'} onSelect={() => onPosterClick("nub")}></PosterButton>
            <PosterButton buttonImage={GALLERY_DATA["joz"].gif}isSelected={newPoster == 'joz'} onSelect={() => onPosterClick("joz")}></PosterButton>
            <PosterButton buttonImage={GALLERY_DATA["brainfuck"].gif}isSelected={newPoster == 'brainfuck'} onSelect={() => onPosterClick("brainfuck")}></PosterButton>
            <PosterButton buttonImage={GALLERY_DATA["sludge"].gif}isSelected={newPoster == 'sludge'} onSelect={() => onPosterClick("sludge")}></PosterButton>
            <PosterButton buttonImage={GALLERY_DATA["ratlayer"].gif}isSelected={newPoster == 'ratlayer'} onSelect={() => onPosterClick("ratlayer")}></PosterButton>
            <PosterButton buttonImage={GALLERY_DATA["jazzup"].gif}isSelected={newPoster == 'jazzup'} onSelect={() => onPosterClick("jazzup")}></PosterButton>
            <PosterButton buttonImage={GALLERY_DATA["utility"].gif}isSelected={newPoster == 'utility'} onSelect={() => onPosterClick("utility")}></PosterButton>
            <PosterButton buttonImage={GALLERY_DATA["waves"].gif}isSelected={newPoster == 'waves'} onSelect={() => onPosterClick("waves")}></PosterButton>
            <PosterButton buttonImage={GALLERY_DATA["tumor"].gif}isSelected={newPoster == 'tumor'} onSelect={() => onPosterClick("tumor")}></PosterButton>
        </section>
    )
}