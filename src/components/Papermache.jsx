import { useState } from "react";
import { createPortal } from "react-dom";
import { ARCHIVES } from "../archiveData";
import "./Papermache.css";
import archivebanner from "../assets/misc/archivebanner.webp"

const PHOTO_W = 17; 
const PHOTO_H = 22; 

const rand = (min, max) => Math.random() * (max - min) + min;

const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}

const scatter = () =>
    ARCHIVES.map((src, id) => ({
        id,
        src,
        left: rand(0, 100 - PHOTO_W),
        top: rand(0, 100 - PHOTO_H),
        rotate: rand(-12, 12),
    }));

shuffle(ARCHIVES);

export default function Papermache() {
    const [photos, setPhotos] = useState(scatter);
    const [selected, setSelected] = useState(null);

    const deletePhoto = (e, id) => {
        e.stopPropagation(); //stops art from showing
        setPhotos((prev) => prev.filter((p) => p.id !== id));
    };

    return (
        <>
        <div id="warning">
            <b>WARNING</b>
            <p>*best experienced on pc</p>
            <p>*might require good enough hardware and internet connection to render and work properly</p>
        </div>
            <img id="archive-banner" src={archivebanner} alt="archiwum"/>
            {selected && createPortal(
                <section className="showoff" onClick={() => setSelected(null)}>
                    <img src={selected.src} alt={`archive ${selected.id}`} />
                </section>,
                document.body
            )}

            <div id="archive">
                {photos.map((p) => (
                    <div
                        key={p.id}
                        className="archive-photo"
                        style={{
                            left: `${p.left}%`,
                            top: `${p.top}%`,
                            transform: `rotate(${p.rotate}deg)`,
                        }}
                        onClick={() => setSelected(p)}
                    >
                        <img src={p.src} alt={`archive ${p.id}`} draggable={false} />
                        <button
                            className="archive-delete"
                            aria-label="Remove photo"
                            onClick={(e) => deletePhoto(e, p.id)}
                        >
                            X
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
}